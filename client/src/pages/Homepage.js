import React from 'react';
import Carousel from '../components/Carousel';
import Jumbotron from '../components/Jumbotron';

import { Container, Paper, Typography } from '@mui/material';
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
			<Container
				style={{
					height: 860,
					clear: 'both',
					paddingTop: '1rem',
					textAlign: 'center',
				}}
			>
				<Jumbotron />
				<Typography>
					USDA's Local Food Directories help you locate
					<a
						href={
							'https://www.ams.usda.gov/local-food-directories/farmersmarkets'
						}
					>
						farmers markets
					</a>
					, on-farm markets, CSAs, and food hubs. The directories are managed
					and operated by the Agricultural Marketing Service (AMS), a USDA
					agency with the core mission of facilitating the fair and efficient
					marketing of U.S. agricultural products.
				</Typography>
				<Typography>
					From customers looking to buy fresh local foods for their families to
					wholesale food buyers, you can quickly identify nearby suppliers of
					local food. By listing their business information in the directories,
					farmers, producers and distributors of local foods are able to take
					advantage of opportunities in both direct-to-consumer and wholesale
					markets.
				</Typography>
				<Typography>
					Each directory provides key information about the business listed,
					including a mapped location, operating hours, months of operation, the
					types of products available, number of farmers at each market and the
					accepted forms of payment. Visit the directory listing to find a
					locally grown food near you.
				</Typography>
				<Typography>
					Managers and owners of local food entities are invited to enter and/or
					update their business information in the directories. Visit the “Add
					or Update a Listing” page to enter current business information for
					your farmers market, CSA, food hub or on-farm market.
				</Typography>
			</Container>
		</>
	);
}
