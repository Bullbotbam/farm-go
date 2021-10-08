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
	Typography,
	Button,
	CardActionArea,
	CardActions,
} from '@mui/material';

function MarketItem(item) {
	const [state, dispatch] = useStoreContext();

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
	const { image, name, _id, price, quantity } = item;

	return (
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
	);
}

export default MarketItem;
