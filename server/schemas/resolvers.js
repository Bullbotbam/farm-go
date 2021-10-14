const { AuthenticationError } = require('apollo-server-express');
const { Customer, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
	Query: {
		categories: async () => {
			return await Category.find();
		},
		products: async (parent, { category, name }) => {
			const params = {};

			if (category) {
				params.category = category;
			}

			if (name) {
				params.name = {
					$regex: name,
				};
			}

			return await Product.find(params).populate('category');
		},
		product: async (parent, { _id }) => {
			return await Product.findById(_id).populate('category');
		},
		customer: async (parent, args, context) => {
			if (context.customer) {
				const customer = await Customer.findById(context.customer._id).populate(
					{
						path: 'orders.products',
						populate: 'category',
					}
				);

				customer.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

				return customer;
			}

			throw new AuthenticationError('Not logged in');
		},
		order: async (parent, { _id }, context) => {
			if (context.customer) {
				const customer = await Customer.findById(context.customer._id).populate(
					{
						path: 'orders.products',
						populate: 'category',
					}
				);

				return customer.orders.id(_id);
			}

			throw new AuthenticationError('Not logged in');
		},
		checkout: async (parent, args, context) => {
			const order = new Order({ products: args.products });
			const line_items = [];

			const { products } = await order.populate('products').execPopulate();

			for (let i = 0; i < products.length; i++) {
				const product = await stripe.products.create({
					name: products[i].name,
					description: products[i].description,
					images: [`https://farm-gomarket.herokuapp.com/images/${products[i].image}`],
				});
				//generate price id using the product id
				const price = await stripe.prices.create({
					product: product.id,
					unit_amount: products[i].price * 100,
					currency: 'usd',
				});

				line_items.push({
					price: price.id,
					quantity: 1,
				});
			}

			const session = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items,
				mode: 'payment',
				success_url:
					'https://farm-gomarket.herokuapp.com/success?session_id={CHECKOUT_SESSION_ID}',
				cancel_url: 'https://farm-gomarket.herokuapp.com',
			});

			return { session: session.id };
		},
	},
	Mutation: {
		addCustomer: async (parent, args) => {
			const customer = await Customer.create(args);
			const token = signToken(customer);

			return { token, customer };
		},
		addOrder: async (parent, { products }, context) => {
			console.log(context);
			if (context.customer) {
				const order = new Order({ products });

				await Customer.findByIdAndUpdate(context.customer._id, {
					$push: { orders: order },
				});

				return order;
			}

			throw new AuthenticationError('Not logged in');
		},
		updateCustomer: async (parent, args, context) => {
			if (context.customer) {
				return await Customer.findByIdAndUpdate(context.customer._id, args, {
					new: true,
				});
			}

			throw new AuthenticationError('Not logged in');
		},
		updateProduct: async (parent, { _id, quantity }) => {
			const decrement = Math.abs(quantity) * -1;

			return await Product.findByIdAndUpdate(
				_id,
				{ $inc: { quantity: decrement } },
				{ new: true }
			);
		},
		login: async (parent, { email, password }) => {
			const customer = await Customer.findOne({ email });

			if (!customer) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await customer.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(customer);

			return { token, customer };
		},
	},
};

module.exports = resolvers;
