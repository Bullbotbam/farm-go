import React from 'react';
import Jumbotron from '../components/Jumbotron';
import { Container, Paper, Typography } from '@mui/material';

export const NoMatch = () => {
	return (
		<Container>
			<Jumbotron>
				<Paper className={classes.paper}>
					<Typography variant="h1">404 Nothing to see here,</Typography>
					<Typography variant="h1">go on and head back!</Typography>
				</Paper>
			</Jumbotron>
		</Container>
	);
};
