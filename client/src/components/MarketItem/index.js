import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	Button,
	CardActionArea,
	CardActions,
	Container,
} from '@mui/material';
import { margin } from '@mui/system';

const categories = await Category.insertMany([
	{ name: 'Fruit' },
	{ name: 'Vegetable' },
	{ name: 'Dairy' },
	{ name: 'Sea Food' },
	{ name: 'Bulk' },
]);

const productInfo = [
	{
		product: 1,
		name: 'Apples',
		category: categories[1]._id,
		img: 'apples.jpg',
		description: 'red delicious',
		price: 2.99,
		quantity: 200,
	},
	{
		product: 2,
		name: 'Watermelon',
		description:
			'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
		image: 'watermelon.jpg',
		category: categories[0]._id,
		price: 5.99,
		quantity: 500,
	},
	{
		product: 3,
		name: 'Apple',
		description:
			'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
		image: 'apple.jpg',
		category: categories[0]._id,
		price: 1.99,
		quantity: 500,
	},
	{
		product: 4,
		name: 'Avocado',
		category: categories[1]._id,
		description:
			'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
		image: 'toilet-paper.jpg',
		price: 1.99,
		quantity: 20,
	},
	{
		product: 5,
		name: 'Bananas',
		category: categories[0]._id,
		description:
			'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
		image: 'bananas.jpg',
		price: 3.99,
		quantity: 50,
	},
	{
		product: 6,
		name: 'Berries',
		category: categories[0]._id,
		description:
			'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
		image: 'berries.jpg',
		price: 14.99,
		quantity: 100,
	},
	{
		product: 7,
		name: 'Cherries',
		category: categories[0]._id,
		description:
			'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
		image: 'cherries.jpg',
		price: 3.99,
		quantity: 30,
	},
	{
		product: 8,
		name: 'Lemon',
		category: categories[0]._id,
		description:
			'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
		image: 'lemon.jpg',
		price: 1.99,
		quantity: 30,
	},
	{
		product: 9,
		name: 'Orange',
		category: categories[0]._id,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
		image: 'orange.jpg',
		price: 3.99,
		quantity: 100,
	},
	{
		product: 10,
		name: 'Pears',
		category: categories[0]._id,
		description:
			'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
		image: 'spinning-top.jpg',
		price: 1.99,
		quantity: 1000,
	},
];

function MarketItem(item) {
	// const classes = useStyles();

	const [state, dispatch] = useStoreContext();

	const { image, name, _id, price, quantity } = item;

	const { cart } = state;

	const addToCart = () => {
		// find the cart item with the matching id
		const itemInCart = cart.find((cartItem) => cartItem._id === _id);

		// if there was a match, call UPDATE with a new purhcase quantity
		if (itemInCart) {
			dispatch({
				type: UPDATE_CART_QUANTITY,
				_id: _id,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
			idbPromise('cart', 'put', {
				...itemInCart,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				product: { ...item, purchaseQuantity: 1 },
			});
			idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
		}
	};

	return (
		// <div>
		// 	<Link to={`/products/${_id}`}>
		// 		<img src={`/images/${image}`} alt={name} />
		// 	</Link>
		// 	<div>
		// 		<div>
		// 			{quantity} {pluralize('item', quantity)} in stock
		// 		</div>
		// 		<span>${price}</span>
		// 	</div>
		// 	<button onClick={addToCart}>Add to cart</button>
		// </div>

		<Container>
			<Grid container spacing={3} style={{ marginTop: '3rem' }}>
				{productInfo.map((product, index) => (
					<Grid item key={index} xs={12} sm={6} md={4}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<Link to={`/products/${image}`}>
									<CardMedia
										component="img"
										height="140"
										image={`/images/${image}`}
										alt={name}
									/>
									<Typography gutterBottom variant="h5" component="div">
										{name}
									</Typography>
								</Link>
								<CardContent>
									<Typography variant="body2" color="text.secondary">
										{quantity} {pluralize('item', quantity)} in stock
										<span>${price}</span>
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary" onClick={addToCart}>
									Send to cart
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default MarketItem;
