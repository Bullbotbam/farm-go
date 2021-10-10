import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

import market1 from './market1.jpg';
import market2 from './market2.jpg';
import market3 from './market3.jpg';
import market4 from './market4.jpg';
import { Typography } from '@mui/material';

export default function CarouselImages(props) {
	const items = [
		{
			name: 'Christian Mackie',
			description: 'FarGo Market',
			image: market1,
		},
		{
			name: 'Clem Onojeghuo',
			description: 'FarGo Market',
			image: market2,
		},
		{
			name: 'Daniel Fazio',
			description: 'FarGo Market',
			image: market3,
		},
		{
			name: 'Davor Nisevic',
			description: 'FarGo Market',
			image: market4,
		},

		console.log(market1),
	];

	return (
		<Carousel>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

function Item(props) {
	return (
		<Paper>
			<Typography variant="h2">{props.item.name}</Typography>
			<Typography variant="h4">{props.item.description}</Typography>
		</Paper>
	);
}
