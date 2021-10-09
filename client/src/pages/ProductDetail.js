import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import {
// 	Typography,
// 	Card,
// 	CardContent,
// 	CardMedia,
// 	CssBaseline,
// 	Grid,
// 	Container,
// 	CardActions,
// } from '@material-ui/core';

import { useStoreContext } from '../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_PRODUCTS } from '../utils/actions';
import { idbPromise } from '../utils/helpers';

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
