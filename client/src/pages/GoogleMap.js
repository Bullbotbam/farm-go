import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';

import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import mapStyles from '../mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
	width: '100vw',
	height: '100vh',
};

const center = {
	lat: 30.267153,
	lng: -97.743057,
};

const options = {
	styles: mapStyles,
	disableDefaultUI: true,
};

export default function MapSearch() {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		libraries,
	});

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

	const mapRef = React.useRef();

	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(14);
	}, []);

	if (loadError) return 'Error loading Maps';
	if (!isLoaded) return 'Loading Maps';

	return (
		<div>
			<h1>
				FarmGo
				<span role="img" aria-label="leaf">
					🌿
				</span>
			</h1>

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
					<InfoWindow
						position={{ lat: selected.lat, lng: selected.lng }}
						onCloseClick={() => {
							setSelected(null);
						}}
					>
						<div>
							<h2>FarmGo Market</h2>
							<p>Location hours: {formatRelative(selected.time, new Date())}</p>
						</div>
					</InfoWindow>
				) : null}
			</GoogleMap>
		</div>
	);
}

function Locate({ panTo }) {
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

function Search({ panTo }) {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			location: { lat: () => 30.267153, lng: () => -97.743057 },
			radius: 20 * 1000,
		},
	});

	return (
		<div className="search">
			<Combobox
				onSelect={async (address) => {
					setValue(address, false);
					clearSuggestions();

					try {
						const results = await getGeocode({ address });
						const { lat, lng } = await getLatLng(results[0]);
						panTo({ lat, lng });
					} catch (error) {
						console.log('error!');
					}
					// console.log(address);
				}}
			>
				<ComboboxInput
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					disabled={!ready}
					placeholder="Enter an address"
				/>
				<ComboboxPopover>
					<ComboboxList>
						{status === 'OK' &&
							data.map(({ id, description }) => (
								<ComboboxOption key={id} value={description} />
							))}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		</div>
	);
}
