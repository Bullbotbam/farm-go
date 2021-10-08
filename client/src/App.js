import React from 'react';
import MapSearch from './components/MapSearch';
import SearchNavBar from './components/Nav';
import ProductCard from './components/ProductCard/ProductCard';
import SignUp from './pages/SignUp';

function App() {
	return (
		<div>
			<SearchNavBar />
			{/* <MapSearch /> */}
			<ProductCard />
			{/* <SignUp /> */}
		</div>
	);
}

export default App;
