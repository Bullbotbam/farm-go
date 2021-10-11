import React from 'react';
import SingUp from './components/SingUp';
import Cart from './pages/Cart';
import { NoMatch } from './pages/NoMatch';
import SearchBar from './components/SearchBar';
import MapSearch from './components/MapSearch';
import ProductDetail from './pages/ProductDetail';
import MarketItem from './components/MarketItem';
import Homepage from './pages/Homepage';
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
// import ProductCard from './components/ProductCard/ProductCard';

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
					{/* <ProductCard /> */}
					<StoreProvider>
						<Switch>
							<Route exact path="/" component={Homepage} />
							<Route exact path="/menu" component={CategoryMenu} />
							<Route exact path="/products" component={MarketItem} />
							{/* <Route exact path="/signup" component={SingUp} />
							<Route component={MapSearch} />
							<Route exact path="/cart" component={Cart} />
							
							<Route component={ProductDetail} />
							<Route component={NoMatch} /> */}
						</Switch>
						<Footer />
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}
export default App;
