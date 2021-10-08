import React from 'react';
import MapSearch from './components/MapSearch';
import SearchNavBar from './components/Nav';
import MarketItem from './components/MarketItem';
import SignUp from './pages/SignUp';

function App() {
	return (
		<div>
			<SearchNavBar />
			{/* <MapSearch /> */}
			<MarketItem />
			{/* <SignUp /> */}
		</div>
	);
}

export default App;
