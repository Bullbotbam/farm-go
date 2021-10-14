import React from 'react';
import SingUp from './pages/SignUp';
import OrderHistory from './pages/OrderHistory'
import Jumbotron from './components/Jumbotron/jumboIndex';
import Cart from './pages/Cart';
import Coupons from './components/Coupons/couponsIndex';
import { NoMatch } from './pages/NoMatch';
import SearchBar from './components/SearchBar';
import ProductDetail from './pages/productDetail';
// import MapSearch from "./components/MapSearch";
import Homepage from './pages/Homepage';
import ProductItem from './components/ProductItem/productItemIndex';
import ProductList from './components/ProductList/productListIndex';
import Category from './pages/CategoryMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';

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
				<div>
					<StoreProvider>
						<SearchBar />

						<Switch>
							<Route exact path="/" component={Jumbotron} />
							<Route exact path="/signup" component={SingUp} />
							<Route exact path="/products" component={ProductList} />
							<Route exact path="/category" component={Category} />
							<Route exact path="/sales" component={Coupons} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/history" component={OrderHistory} />
							<Route component={NoMatch} />
						</Switch>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}
export default App;
