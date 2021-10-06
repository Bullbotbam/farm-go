import React from 'react';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';

export default function Locate({ panTo }) {
	// Setting markers on map of vendor locations
	const [markers, setMarkers] = React.useState([]);
	const [selected, setSelected] = React.useState(null);
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

	//  alllowing the use of the current value to be stored so the state can easily be returned to that value
	const mapRef = React.useRef();
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);
	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(14);
	}, []);

	return (
		<button
			className="locate"
			onClick={() => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						panTo({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						});
					},
					() => null,
					options
				);
			}}
		>
			<img src="compass.svg" alt="compass - locate me" />
		</button>
	);
}
