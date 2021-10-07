import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

const MarketItem = (item) => {
	const [state, dispatch] = useStoreContext();

	const { _id, image, name, quantity, price } = item;

	const { cart } = state;
};

export default MarketItem;
