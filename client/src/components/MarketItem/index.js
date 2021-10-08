import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise, plualize } from '../../utils/helpers';

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
			idbPromise('cart', 'put', { ...item, purchasQuantity: 1 });
		}
	};
	return (
		<div className="card px-1 py-1">
			<Link to={`/products/${_id}`}>
				<img src={'/images/${image}'} alt={name} />
				<p>{name}</p>
			</Link>
			<div>
				<div>
					{quantity} {plualize('item', quantity)} in stock
				</div>
				<span>${price}</span>
			</div>
			<button onClick={addToCart}>Send to cart</button>
		</div>
	);
};

export default MarketItem;
