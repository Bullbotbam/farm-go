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

export default function ({ panTo }) {
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
			radius: 10 * 1000,
		},
	});

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
			.then(async (data) => {
	
				const address = data.marketdetails.Address
				
				
					setValue(address, false);
					clearSuggestions();
					console.log(address)

					try {
						const results = await getGeocode({ address });
						console.log(results)
						const { lat, lng } = await getLatLng(results[0]);
						panTo({ lat, lng });
					} catch (error) {
						console.log(error);
					}
					
	
			})
			.catch(error => 
				console.log(error)
			);
		};

		
	// create a search box for the map
	return (
		<div className="search">
			<Combobox
				// onSelect={async (address) => {
				// 	setValue(address, false);
				// 	clearSuggestions();
				// 	console.log(address)

				// 	try {
				// 		const results = await getGeocode({ address });
				// 		console.log(results)
				// 		const { lat, lng } = await getLatLng(results[0]);
				// 		panTo({ lat, lng });
				// 	} catch (error) {
				// 		console.log('error!!!');
				// 	}
				// }}
			>
				<ComboboxInput
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						getLocation(e.target.value)
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