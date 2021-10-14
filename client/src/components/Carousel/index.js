import React from 'react';
import { Carousel } from 'react-material-ui-carousel';
import { Card } from '@material-ui/core';

import market1 from '../../assets/market1.jpg';
import market2 from '../../assets/market2.jpg';
import market3 from '../../assets/market3.jpg';
import market4 from '../../assets/market4.jpg';

export default function CarouselImages(props) {
	const items = [
		{
			name: 'Christian Mackie',
			description: 'FarmGo Market South',
			image: market1,
		},
		{
			name: 'Clem Onojeghuo',
			description: 'FarmGo Market North',
			image: market2,
		},
		{
			name: 'Daniel Fazio',
			description: 'FarmGo Market East',
			image: market3,
		},
		{
			name: 'Davor Nisevic',
			description: 'FarmGo Market West',
			image: market4,
		},
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
		<Card style={{ marginLeft: '25%' }}>
			<img
				className="imageCarousel"
				src={props.item.image}
				alt={props.item.name}
			/>

			<h2
				onClick={() => {
					window.location.href = props.item.link;
				}}
			>
				{props.item.description}
			</h2>
		</Card>
	);
}
