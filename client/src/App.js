import React from 'react';
import SingUp from './pages/SignUp';
import Jumbotron from './components/Jumbotron/jumboIndex';
import Cart from './pages/Cart';
import Coupons from './components/Coupons/couponsIndex';
import { NoMatch } from './pages/NoMatch';
import SearchBar from './components/SearchBar';
// import MapSearch from "./components/MapSearch";
import MarketItem from './components/MarketItem';
import ProductList from './components/ProductList/productListIndex';
import CategoryMenu from './pages/CategoryMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
import Nav from './components/Nav';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div >
					<StoreProvider>
						<Nav />
						<Jumbotron />
						{/* <SingUp /> */}
						<Cart />
					<ProductList />
					<Coupons />
						<CategoryMenu />
						<Switch>
							<Route exact path="/signup" component={SingUp} />
							{/* <Route component={MapSearch} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/products" component={MarketItem} />*/}
							{/* <Route component={ProductDetail} /> */}
							<Route component={NoMatch} />
						</Switch>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}
export default App;
