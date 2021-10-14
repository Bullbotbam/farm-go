import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Container,
	// CardActions,
} from '@material-ui/core';
import useStyles from '../../utils/styles';

function ProductItem(item) {

	const classes = useStyles
	const { image, name, _id, price, quantity } = item;

	const [state, dispatch] = useStoreContext();
	const { cart } = state;

	const addItem = () => {
		const itemInCart = cart.find((cartItem) => cartItem._id === _id);
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
		<>
			<CssBaseline />

			<main>
				<Container className="card px-1 py-1" maxWidth="xl">
					<Grid container spacing={2} style={{ marginTop: '3rem' }}>
						<Grid xs={12} sm={6} md={4}>
							<Card className={classes.card} style={{ alignContent: 'center' }}>
								<Link to={`/products/${_id}`}>
									<CardMedia
										className={classes.cardMedia}
										image={`/images/${image}`}
										title="Image title"
										alt={name}
									/>
								</Link>
								<CardContent>
									<Typography gutterBottom variant="h5">
										<h4>{name}</h4>${price}
									</Typography>

									<Typography>{quantity}</Typography>
								</CardContent>
								<Button
									style={{
										color: 'green',
									}}
									onClick={addItem}
								>
									Add to cart
								</Button>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</main>
		</>
	);
}

export default ProductItem;
