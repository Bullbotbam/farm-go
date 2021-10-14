import React from 'react';
// import Carousel from '../components/Carousel';
// import Jumbotron from '../components/Jumbotron';
import Image from 'material-ui-image';
import { Container, Divider, Paper, Typography } from '@mui/material';
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
		paddingTop: 120,
	},
}));

export default function Home({ children }) {
	const classes = useStyles();

	return (
		<Container>
			<Box
				sx={{
					top: -210,
					maxHeight: { xs: 560, md: 680, minWidth: { xs: 1200, md: 900 } },
				}}
				component="img"
				alt="vegetables"
				src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80"
			/>
			<Typography style={{ position: 'relative', top: '20px' }}>
				FarmGo Market
			</Typography>
			<Typography>From the source!</Typography>
			<Paper>
				<FarmersMessage />
			</Paper>
			<Footer />
		</Container>
	);
}
