const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, ProductName }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (ProductName) {
        params.ProductName = {
          $regex: ProductName,
        };
      }

      return await Product.find(params).populate("category");
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },
    customer: async (parent, args, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate(
          {
            path: "orders.products",
            populate: "category",
          }
        );

        customer.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return customer;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.customer) {
        const customer = await Customer.findById(context.customer._id).populate(
          {
            path: "orders.products",
            populate: "category",
          }
        );

        return customer.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products").execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].Productname,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addCustomer: async (parent, args) => {
      const user = await Customer.create(args);
      const token = signToken(user);

      return { token, user };
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

      throw new AuthenticationError("Not logged in");
    },
    updateCustomer: async (parent, args, context) => {
      if (context.customer) {
        return await Customer.findByIdAndUpdate(context.customer._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, { _id, count }) => {
      const decrement = Math.abs(count) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { count: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await Customer.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
