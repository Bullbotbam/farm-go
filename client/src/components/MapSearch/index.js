import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';

import mapStyles from '../../utils/mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
	width: '100vw',
	height: '100vh',
};
const options = {
	styles: mapStyles,
};
const center = {
	lat: 30.267153,
	lng: -97.743057,
};

function MapSearch() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

	if (loadError) return 'Error loading Maps';
	if (!isLoaded) return 'Loading Maps';

	return (
		<div>
			<h1>
				FarmGo Market
				<span role="img" aria-label="leaf">
					🌿
				</span>
			</h1>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={10}
				center={center}
				options={options}
			></GoogleMap>
		</div>
	);
}

export default MapSearch;
