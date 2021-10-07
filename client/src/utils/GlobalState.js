import React, { createContext, useContext } from 'react';
// allows components to have access to functions that handle state management
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useProductReducer({
		product: [],
		cart: [],
		cartOpen: false,
		categories: [],
		currentCategories: '',
	});
	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
