import React from 'react';
import CarouselImages from '../Carousel';
// import Jumbotron from '../components/Jumbotron';
import Image from 'material-ui-image';
import { Container, Divider, Paper, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Jumbotron from '../Jumbotron';
import FarmersMessage from '../FarmersMessage';
import { Box } from '@mui/system';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		// padding: theme.spacing(1),
		textAlign: 'center',
		height: 560,
		clear: 'both',
		paddingTop: 10,
	},
	box: {
		top: '-5rem',
	},
}));

export default function Home({ children }) {
	const classes = useStyles();

	return (
		<Container>
			<Paper
				style={{
					textAlign: 'center',
					color: 'whitesmoke',
					fontFamily: 'Gabriela',
				}}
				className="header"
			>
				<Typography variant="h3" className="logo">
					QUALITY PRODUCTS, LOCAL FLAVORS & FAMILIAR FACES
				</Typography>
			</Paper>
			<Paper backgroundColor="#f5f5f5">
				<FarmersMessage />
			</Paper>
			<CarouselImages />
		</Container>
	);
}
