import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	CardActionArea,
	CardActions,
} from '@mui/material';
import watermelon from '../../assets/groceries/watermelon.jpg';
import apple from '../../assets/groceries/apple.jpg';
import lemon from '../../assets/groceries/lemon.jpg';
import orange from '../../assets/groceries/orange.jpg';
import berries from '../../assets/groceries/berries.jpg';
import pears from '../../assets/groceries/pears.jpg';
import avocado from '../../assets/groceries/avocado.jpg';
import bananas from '../../assets/groceries/bananas.jpg';
import cherries from '../../assets/groceries/cherries.jpg';

const pricing = [
	{
		price_A: '$.99',
		price_B: '$1.99',
		price_C: '$2.99',
		price_D: '$3.99',
		price_E: '$4.99',
		price_A: '$5.99',
		price_F: '$6.99',
		price_G: '$7.99',
		price_H: '$8.99',
		price_I: '$9.99',
		price_J: '$15.99',
		price_K: '$19.99',
		price_L: '$24.99',
		price_M: '$29.99',
		price_N: '$34.99',
		price_O: '$39.99',
		price_P: '$49.99',
		price_Q: '$99.99',
	},
];

const Produce = [
	{
		name: 'Apples',
		price: price_A,
		image: apple,
	},
	{
		category: 'Oranges',
		price: price_A,
		image: orange,
	},
	{
		category: 'Pears',
		price: price_A,
		image: pears,
	},
	{
		category: 'Bananas',
		price: price_B,
		image: bananas,
	},
	{
		category: 'Avocado',
		price: price_C,
		image: avocado,
	},
	{
		category: 'Cherries',
		price: price_D,
		image: cherries,
	},

	{
		category: 'Watermelon',
		price: price_E,
		image: watermelon,
	},
	{
		category: 'Berries',
		price: price_D,
		image: berries,
	},

	{
		category: 'Lemons',
		description: price_A,
		image: lemon,
	},
];
export default function ProductCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component="img" height="140" image={image1} alt="fruit" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Watermelon
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<strong>Price:</strong> $5.99
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Send to cart
				</Button>
			</CardActions>
		</Card>
	);
}
