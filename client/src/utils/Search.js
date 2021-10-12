import React from 'react';
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
import { getToolbarUtilityClass } from '@mui/material';

export default function ({ panTo }) {

	// get nearest location 
	function getLocation(location) {
		
		fetch(
			"http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + location,
		)
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {

			console.log(data)
			const ID = data.results[0].id

			getLocationAddress(ID)
		})
		.catch(error => 
			console.log(error)
		);
	};

	// get nearest location's products
	function getLocationAddress(ID) {
		fetch(
			"http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + ID
		)
		.then(function(response) {
			return response.json()
		})
		.then(function(data) {

			const location = data.marketdetails.Address

			console.log(data.marketdetails.Address)

			console.log(location) 

			getTo(location);

		})
		.catch(error => 
			console.log(error)
		);
	};

	// set up a perimeter of where to find searchable places
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			location: { lat: () => 30.267153, lng: () => -97.743057 },
			radius: 40 * 1000,
		},
	});
	// create a search box for the map
	return (
		<div className="search">
			<Combobox
				onSelect={ async (address) => {
					setValue(address, false);
					clearSuggestions();

					try {
						const results = await getGeocode({ address });
						const { lat, lng } = await getLatLng(results[0]);
						panTo({ lat, lng });
					} catch (error) {
						console.log('error!!!');
					}
				}}
			>
				<ComboboxInput
					value={value}
					onChange={(e) => {
						// setValue(e.target.value);
						getLocation(e.target.value)
					}}
					disabled={!ready}
					placeholder="Search by ZIP code, city or state"
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
