import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import {
	UPDATE_CATEGORIES,
	UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
// import { makeStyles } from '@mui/styles';

// import SearchBar from '../components/SearchBar';
// import Jumbotron from '../components/Jumbotron';
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Container,
	// CardActions,
} from '@material-ui/core';
import useStyles from '../utils/styles';

import Meat from '../assets/Meat.jpg';
import Produce from '../assets/Produce.jpg';
import Dairy from '../assets/Dairy.jpg';
import Flowers from '../assets/Flowers.jpg';
import SpecialtyFoods from '../assets/SpecialtyFoods.jpg';
import Crafts from '../assets/Crafts.jpg';
import BathBody from '../assets/BathBody.jpg';
import Clothing from '../assets/Clothing.jpg';
import Art from '../assets/Art.jpg';

const categoriesss = [
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
	const [state, dispatch] = useStoreContext();

const { categories } = state;

const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

useEffect(() => {
	if (categoryData) {
		dispatch({
			type: UPDATE_CATEGORIES,
			categories: categoryData.categories,
		});
		categoryData.categories.forEach((category) => {
			idbPromise('categories', 'put', category);
		});
	} else if (!loading) {
		idbPromise('categories', 'get').then((categories) => {
			dispatch({
				type: UPDATE_CATEGORIES,
				categories: categories,
			});
		});
	}
}, [categoryData, loading, dispatch]);

const handleClick = (id) => {
	dispatch({
		type: UPDATE_CURRENT_CATEGORY,
		currentCategory: id,
	});
};

	return (
		<>
			<CssBaseline />

			<maim>
				<Container className={classes.cardGrid} maxWidth="xl">
					<Typography variant="h2">Categories</Typography>

					<Grid container spacing={2} style={{ marginTop: '3rem' }}>
						{categories.map((category, index) => (
							<Grid item key={category._id} xs={12} sm={6} md={4}>
								<Card
									className={classes.card}
									style={{ alignContent: 'center' }}
									onClick={() => window.open(category._id)}
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
function ChooseCategory() {
	function handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked');
	}
	return (
		<form onClick={handleClick}>
			<button type="submit">Submit</button>
		</form>
	);
}
export default CategoryMenu;
