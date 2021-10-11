import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 645,
		background: 'rgba(0,0,0,0.5)',
		margin: '20px',
	},
	media: {
		height: 440,
	},
	title: {
		fontFamily: 'Nunito',
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#fff',
	},
	desc: {
		fontFamily: 'Nunito',
		fontSize: '1.1rem',
		color: '#ddd',
	},
});

export default function ProductCard({ place, checked }) {
	const classes = useStyles();

	return (
		<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.media}
					image={process.env.PUBLIC_URL + './images/watermelon.jpg'}
					title="Watermelon"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="h1"
						className={classes.title}
					>
						{place.title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						className={classes.desc}
					>
						{place.description}
					</Typography>
				</CardContent>
			</Card>
		</Collapse>
	);
}

// import React from 'react';
// import {
// 	Card,
// 	CardContent,
// 	CardMedia,
// 	Typography,
// 	Button,
// 	CardActionArea,
// 	CardActions,
// } from '@mui/material';

// export default function ProductCard() {
// 	return (
// 		<Card sx={{ maxWidth: 345 }}>
// 			<CardActionArea>
// 				<CardMedia
// 					component="img"
// 					height="140"
// 					image="/client/src/images/pexels-brian-van-den-heuvel-1313267.jpg"
// 					alt="fruit"
// 				/>
// 				<CardContent>
// 					<Typography gutterBottom variant="h5" component="div">
// 						Watermelon
// 					</Typography>
// 					<Typography variant="body2" color="text.secondary">
// 						This is probably one of the best fruits around. I can eat it all day
// 						and twice on Sunday. Gosh! I wish I had some now...
// 					</Typography>
// 				</CardContent>
// 			</CardActionArea>
// 			<CardActions>
// 				<Button size="small" color="primary">
// 					Send to cart
// 				</Button>
// 			</CardActions>
// 		</Card>
// 	);
// }
