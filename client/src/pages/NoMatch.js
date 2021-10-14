import React from 'react';
import Jumbotron from '../components/Jumbotron';
import { Container, Typography } from '@mui/material';
import empty from '../assets/field-empty.jpg';

export const NoMatch = () => {
	return (
		<Container
			style={{
				backgroundImage: `url(${empty})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100%',
			}}
		>
			<Jumbotron>
				<div>
					<Typography variant="h1">
						404 Nothing to see here,
						<br />
						go on and head back!
					</Typography>
				</div>
			</Jumbotron>
		</Container>
	);
};
