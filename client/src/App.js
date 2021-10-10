import React from 'react';
import SingUp from './components/SingUp';
import Cart from './pages/Cart';
import { NoMatch } from './pages/NoMatch';
import SearchBar from './components/SearchBar';
import MapSearch from './components/MapSearch';
import ProductDetail from './pages/ProductDetail';
import MarketItem from './components/MarketItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
import CarouselImages from './components/Carousel';
import CategoryMenu from './pages/CategoryMenu';
import Footer from './components/Footer';

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
						<CarouselImages />
						<CategoryMenu />
						{/* <Switch>
							<Route exact path="/signup" component={SingUp} />
							<Route component={MapSearch} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/products" component={MarketItem} />
							<Route component={ProductDetail} />
							<Route component={NoMatch} />
						</Switch> */}
						<Footer />
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}
export default App;
