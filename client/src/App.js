import React from 'react';
import SingUp from './components/SingUp';
import Cart from './components/Cart';
import MapSearch from './components/MapSearch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<div>
			<SingUp />
			<MapSearch />
			<Cart />
		</div>
	);
}
export default App;
