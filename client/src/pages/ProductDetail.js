import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

import { useStoreContext } from '../utils/GlobalState';
import {
	REMOVE_FROM_CART,
	UPDATE_PRODUCTS,
	ADD_TO_CART,
	UPDATE_CART_QUANTITY,
} from '../utils/actions';
// import{QUERY_PRODUCTS} from ''
import { idbPromise } from '../utils/helpers';
import { Button, Container, Typography } from '@mui/material';
import Cart from '../components/Cart';

function ProductDetail() {
	const [state, dispatch] = useStoreContext();
	const { id } = useParams();

	const [currentProduct, setCurrentProduct] = useState({});

	// const { loading, data } = useQuery(QUERY_PRODUCTS);

	const { products, cart } = state;
	useEffect(() => {
		// check global state to see if in global this.state.
		if (products.length) {
			setCurrentProduct(products.find((product) => product._id === id));
		}
		// retrieve data from server
		else if (data) {
			dispatchEvent({
				type: UPDATE_PRODUCTS,
				products: data.products,
			});
			data.products.forEach((product) => {
				idbPromise('products', 'put', product);
			});
		}
		// get cache info from idb
		idbPromise('products', 'get').then((indexedProducts) => {
			dispatchEvent({
				type: UPDATE_PRODUCTS,
				products: indexedProducts,
			});
		});
	}, [products, data, loading, dispatch, id]);

	const addToCart = () => {
		const itemInCart = cart.find((cartItem) => cartItem._id === id);
		if (itemInCart) {
			dispatch({
				type: UPDATE_CART_QUANTITY,
				_id: id,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
			idbPromise('cart', 'put', {
				...itemInCart,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				product: { ...currentProduct, purchaseQuantity: 1 },
			});
			idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
		}
	};
	const removeFromCart = () => {
		dispatch({
			type: REMOVE_FROM_CART,
			_id: currentProduct._id,
		});

		idbPromise('cart', 'delete', { ...currentProduct });
	};

	return (
		<>
			{currentProduct && cart ? (
				<Container>
					<Link to="/">
						<span> 🔙</span>
					</Link>
					<Typography variant="h2">{currentProduct.name}</Typography>
					<Typography variant="caption">
						{currentProduct.description}
					</Typography>
					<Typography variant="h4">
						<strong>Price:</strong>${currentProduct.price}
						<Button onClick={addToCart}>Send to Cart</Button>
						<Button
							variant="button"
							disabled={!cart.find((p) => p._id === currentProduct._id)}
							onClick={removeFromCart}
						>
							Remove From Cart
						</Button>
						<img
							src={`images/${currentProduct.image}`}
							alt={currentProduct.name}
						/>
					</Typography>
				</Container>
			) : null}
			{loading ? <img src={loadspin} alt="loading" /> : null}
			<Cart />
		</>
	);
}
