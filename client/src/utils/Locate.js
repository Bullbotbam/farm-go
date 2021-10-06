import React from 'react';

import mapStyles from './mapStyles';

const options = {
	styles: mapStyles,
};

export default function Locate({ panTo }) {
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
