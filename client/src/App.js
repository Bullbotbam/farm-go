import React from 'react';
import SingUp from './components/SingUp';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import MapSearch from './components/MapSearch';
// import ProductDetail from './pages/ProductDetail';
import MarketItem from './components/MarketItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';

const httpLink = createHttpLink({
	url: '/graphql',
});

const client = new ApolloClient({
	// link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<StoreProvider>
						<SearchBar />
						{/* <SingUp /> */}
						{/* <MapSearch /> */}
						<Cart />
						<MarketItem />

						{/* <ProductDetail /> */}
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}
export default App;
