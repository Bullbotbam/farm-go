import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

const MarketItem = (item) => {
	const [state, dispatch] = useStoreContext();

	const { _id, image, name, quantity, price } = item;

	const { cart } = state;

	const addToCart = () => {
		const itemInCart = cart.find((cartItem) => cartItem._id === _id);
		if (itemInCart) {
			dispatch({
				type: UPDATE_CART_QUANTITY,
				_id: _id,
				purchasQuantity: parseInt(itemInCart.purchasQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				product: { ...item, purchasQuantity: 1 },
			});
		}
	};
};

export default MarketItem;
