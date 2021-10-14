import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import Locate from '../../utils/Locate';
import mapStyles from '../../utils/mapStyles';

import './style.css';
import Search from '../../utils/Search';

const libraries = ['places'];
const mapContainerStyle = {
	width: '100vw',
	height: '100vh',
};
const options = {
	styles: mapStyles,
	disableDefaultUI: true,
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

	// adding useState to set markers on map so as to not have the page completely reload
	const [markers, setMarkers] = React.useState([]);

	// setting the value to null so that the value is reset.  This will allow the object vlaue to be cleared and then can be selected again.
	const [selected, setSelected] = React.useState(null);

	// using useCallback to provide coordinates for the the location where the markers were placed
	const onMapClick = React.useCallback((event) => {
		setMarkers((current) => [
			...current,
			{
				lat: event.latLng.lat(),
				lng: event.latLng.lng(),
				time: new Date(),
			},
		]);
	}, []);

	// allowing the use of the current value to be stored so the state can easily be returned to that value
	const mapRef = React.useRef();

	// returning a memorized version of the map to be returned if no changes are made.
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

	// allowing the map to zoom in on selected area after referrencing the original centered location.
	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(14);
	}, []);

	if (loadError) return 'Error loading Maps';
	if (!isLoaded) return 'Loading Maps';

	return (
		<div>
			{/* <h1>
				FarmGo 
				<span className="market">-market </span>
				<span role="img" aria-label="leaf">
					🌿
				</span>
			</h1> */}

			<Search panTo={panTo} />
			<Locate panTo={panTo} />

			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				zoom={10}
				center={center}
				options={options}
				onClick={onMapClick}
				onLoad={onMapLoad}
			>
				{markers.map((marker) => (
					// providing a way to create markers to show vendor locations
					<Marker
						key={marker.time.toISOString()}
						position={{ lat: marker.lat, lng: marker.lng }}
						icon={{
							url: '/leaf.svg',
							scaledSize: new window.google.maps.Size(30, 30),
							origin: new window.google.maps.Point(0, 0),
							anchor: new window.google.maps.Point(15, 15),
						}}
						onClick={() => {
							setSelected(marker);
						}}
					/>
				))}

				{selected ? (
					// create a modal to provide information on markers when clicked
					<InfoWindow
						position={{ lat: selected.lat, lng: selected.lng }}
						onCloseClick={() => {
							setSelected(null);
						}}
					>
						<div>
							<h2>FarmGo Market</h2>
							<p>Location Address</p>
							<p>Location Hours 8 AM - Noon</p>
							<p>Pick-up Location</p>
						</div>
					</InfoWindow>
				) : null}
			</GoogleMap>
		</div>
	);
}

export default MapSearch;
