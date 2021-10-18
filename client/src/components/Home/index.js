import React from 'react';
// import Image from 'material-ui-image';
import { Container, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FarmersMessage from '../FarmersMessage';
import Landing from "../Landing"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		// padding: theme.spacing(1),
		textAlign: 'center',
		height: 560,
		clear: 'both',
		paddingTop: 1,
	},
	homebox: {
		width: '100%',
		backgroundSize: 'cover',
	},
}));

export default function Home({ children }) {
	const classes = useStyles();

	return (
		<>
		<Container className="homebox">
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
		</Container>

		<Landing />
		</>
	);
}
