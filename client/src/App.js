import React from 'react';
import MapSearch from './components/MapSearch';
import SearchNavBar from './components/Nav';
import SignUp from './pages/SignUp';

function App() {
	return (
		<div>
			<SearchNavBar />
			{/* <MapSearch /> */}

			<SignUp />
		</div>
	);
}

export default App;
