import React from 'react';
import Carousel from '../components/Carousel';
import Jumbotron from '../components/Jumbotron';

import { Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		// padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: 560,
		clear: 'both',
		paddingTop: 120,
	},
}));

export default function Homepage({ children }) {
	// const classes = useStyles();

	return (
		<>
			<Jumbotron />
			{/* <Container
				style={{
					height: 560,
					clear: 'both',
					paddingTop: '10rem',
					textAlign: 'center',
				}}
			></Container> */}
		</>
	);
}
