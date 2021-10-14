import {
	UPDATE_PRODUCTS,
	UPDATE_CATEGORIES,
	UPDATE_CURRENT_CATEGORY,
	UPDATE_CART_QUANTITY,
	ADD_TO_CART,
	ADD_MULTIPLE_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART,
} from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
	switch (action.type) {
		// return an updaated array if the new UPDATE_PRODUCTS if state object action type value is changed
		case UPDATE_PRODUCTS:
			return {
				...state,
				products: [...action.products],
			};
		case UPDATE_CATEGORIES:
			return {
				...state,
				categories: [...action.categories],
			};
		case UPDATE_CURRENT_CATEGORY:
			return {
				...state,
				currentCategories: action.currentCategories,
			};
		case ADD_TO_CART:
			return {
				...state,
				cartOpen: true,
				cart: [...state.cart, action.product],
			};
		case ADD_MULTIPLE_TO_CART:
			return {
				...state,
				cart: [...state.cart, ...action.products],
			};
		case UPDATE_CART_QUANTITY:
			return {
				...state,
				cartOpen: true,
				cart: state.cart.map((product) => {
					if (action._id === product._id) {
						product.purchaseQuantity = action.purchaseQuantity;
					}
					return product;
				}),
			};
		case REMOVE_FROM_CART:
			let newState = state.cart.filter((product) => {
				return product._id !== action._id;
			});
			return {
				...state,
				cartOpen: newState.length > 0,
				cart: [],
			};
		case CLEAR_CART:
			return {
				...state,
				cartOpen: false,
				cart: [],
			};
		default:
			return state;
	}
};

export function useProductReducer(initialState) {
	return useReducer(reducer, initialState);
}
