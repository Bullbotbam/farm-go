import React from 'react';
import SingUp from './pages/SignUp';
import Jumbotron from './components/Jumbotron/jumboIndex';
import Cart from './pages/Cart';
import { NoMatch } from './pages/NoMatch';
import SearchBar from './components/SearchBar';
import MapSearch from './components/MapSearch';
import ProductDetail from './pages/ProductDetail';
// import ProductDetail from './pages/ProductDetail';
import MarketItem from './components/MarketItem';
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
            <Jumbotron />
            <SingUp />
            <Cart />
    
						<Switch>
							<Route exact path="/signup" component={SingUp} />
							<Route component={MapSearch} />
							{/* <Route exact path="/cart" component={Cart} /> */}
							<Route exact path="/products" component={MarketItem} />
							<Route component={ProductDetail} />
							<Route component={NoMatch} />
						</Switch>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}
export default App;
