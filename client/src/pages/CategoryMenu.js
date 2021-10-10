import * as React from 'react';
import { makeStyles } from '@mui/styles';

// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Container,
	CardActions,
} from '@material-ui/core';
import useStyles from '../utils/styles';

import Meat from '../assets/images/Meat.jpg';
import Produce from '../assets/images/Produce.jpg';
import Dairy from '../assets/images/Dairy.jpg';
import Flowers from '../assets/images/Flowers.jpg';
import SpecialtyFoods from '../assets/images/SpecialtyFoods.jpg';
import Crafts from '../assets/images/Crafts.jpg';
import BathBody from '../assets/images/BathBody.jpg';
import Clothing from '../assets/images/Clothing.jpg';
import Art from '../assets/images/Art.jpg';

// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	padding: theme.spacing(2),
// 	textAlign: 'center',
// 	color: theme.palette.text.secondary,
// }));
// <Box sx={{ flexGrow: 1 }}>
// 	<Grid
// 		container
// 		spacing={{ xs: 2, md: 3 }}
// 		columns={{ xs: 4, sm: 8, md: 12 }}
// 	>
// 		{Array.from(categories).map((_category, index) => (
// 			<Grid item xs={3} sm={4} md={4} key={index}>
// 				<Item>
// 					{' '}
// 					<img
// 						className="category"
// 						src={props.item.image}
// 						alt={props.item.name}
// 					/>
// 					{props.item.description}
// 				</Item>
// 			</Grid>
// 		))}
// 	</Grid>
// </Box>
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

const CategoryMenu = () => {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />

			<maim>
				<Container className={classes.cardGrid} maxWidth="xl">
					<Typography variant="h2">Categories</Typography>

					<Grid container spacing={2} style={{ marginTop: '3rem' }}>
						{categories.map((category, index) => (
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card
									className={classes.card}
									style={{ alignContent: 'center' }}
								>
									<CardMedia
										className={classes.cardMedia}
										image={category.image}
										title="Image title"
									/>
									<CardContent className={classes.CardContent}>
										<Typography gutterBottom variant="h5">
											{category.category}
										</Typography>

										<Typography>{category.description}</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</maim>
		</>
	);
};
export default CategoryMenu;
