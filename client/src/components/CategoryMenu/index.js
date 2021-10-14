import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
	UPDATE_CATEGORIES,
	UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
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
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card
									className={classes.card}
									style={{ alignContent: 'center' }}
									onClick={() => window.open('/ProductCard')}
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
}
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

// 	return (
// 		<div>
// 			<h2>Choose a Category:</h2>
// 			{categories.map((item) => (
// 				<button
// 					key={item._id}
// 					onClick={() => {
// 						handleClick(item._id);
// 					}}
// 				>
// 					{item.name}
// 				</button>
// 			))}
// 		</div>
// 	);
// }

// export default CategoryMenu;
