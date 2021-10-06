import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';

import mapStyles from '../../utils/mapStyles';

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
