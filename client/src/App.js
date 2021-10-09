import React from 'react';
import SingUp from './components/SingUp';
import Cart from './components/Cart';
import MapSearch from './components/MapSearch';
import MarketItem from './components/MarketItem/MarketItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';

function App() {
	return (
		<div>
			<StoreProvider>
				{/* <SingUp /> */}
				{/* <MapSearch /> */}
				<Cart />
				<MarketItem />
			</StoreProvider>
		</div>
	);
}
export default App;
