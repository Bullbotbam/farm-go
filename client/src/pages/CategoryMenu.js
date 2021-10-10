import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function CategoryMenu(props) {
	const categories = [
		{
			category: 'Produce',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: Produce,
		},
		{
			category: 'Flowers',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: Flowers,
		},
		{
			category: 'Specialty Foods',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: SpecialtyFoods,
		},
		{
			category: 'Crafts',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: Crafts,
		},
		{
			category: 'Dairy',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: Dairy,
		},
		{
			category: 'Meat',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: Meat,
		},

		{
			category: 'Bath Body & Spirit',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: BathBody,
		},
		{
			category: 'Clothing',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: Clothing,
		},

		{
			category: 'Art & Photography',
			description:
				'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusda recusandae alias error harum maxime adipisci amet laborum.',
			image: Art,
		},
	];

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{Array.from(categories).map((_category, index) => (
					<Grid category xs={3} sm={4} md={4} key={index}>
						<Item>
							{' '}
							<img
								className="category"
								src={props.category.image}
								alt={props.category.name}
							/>
						</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
