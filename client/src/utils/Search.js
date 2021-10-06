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
	// create a search box for the map
	return (
		<div>
			<Combobox
				onSelect={async (address) => {
					setValue(address, false);
					clearSuggestions;

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
						setValue(e.target.value);
					}}
					disabled={!ready}
					placeholder="Enter an address"
				/>
				<ComboboxPopover>
					<ComboboxList>
						{status === 'OK' &&
							data.map(({ id, description }) => {
								<ComboboxOption key={id} value={description} />;
							})}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		</div>
	);
}
