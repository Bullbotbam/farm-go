import React from 'react';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';

export default function () {
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

	return (
		<button>
			<img src="compass.svg" alt="compass - locate me" />
		</button>
	);
}
