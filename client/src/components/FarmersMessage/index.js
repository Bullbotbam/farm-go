import React from 'react';
import { Typography, Container } from '@mui/material';
const FarmersMessage = () => {
	return (
		<Container
			style={{
				clear: 'both',
				padding: '1.5rem',
				fontFamily: 'Gabriela',
			}}
		>
			<Typography
				style={{
					padding: '.25rem 2.5rem',
					textJustify: 'inherit',
				}}
			>
				USDA's Local Food Directories help you locate farmers markets , on-farm
				markets, CSAs, and food hubs. The directories are managed and operated
				by the Agricultural Marketing Service (AMS), a USDA agency with the core
				mission of facilitating the fair and efficient marketing of U.S.
				agricultural products.
			</Typography>
			<Typography
				style={{
					padding: '.25rem 2.5rem',
					textJustify: 'inherit',
				}}
			>
				From customers looking to buy fresh local foods for their families to
				wholesale food buyers, you can quickly identify nearby suppliers of
				local food. By listing their business information in the directories,
				farmers, producers and distributors of local foods are able to take
				advantage of opportunities in both direct-to-consumer and wholesale
				markets.
			</Typography>
			<Typography
				style={{
					padding: '.25rem 2.5rem',
					textJustify: 'inherit',
				}}
			>
				Each directory provides key information about the business listed,
				including a mapped location, operating hours, months of operation, the
				types of products available, number of farmers at each market and the
				accepted forms of payment. Visit the
				<a
					style={{
						paddingLeft: '.5rem',
					}}
					href={
						'https://www.ams.usda.gov/services/local-regional/food-directories-listings'
					}
				>
					directory listing
				</a>
				to find a locally grown food near you.
			</Typography>
			<Typography
				style={{
					padding: '.25rem 2.5rem',
					textJustify: 'inherit',
				}}
			>
				Managers and owners of local food entities are invited to enter and/or
				update their business information in the directories. Visit the “Add or
				Update a Listing” page to enter current business information for your
				farmers market, CSA, food hub or on-farm market.
			</Typography>
		</Container>
	);
};

export default FarmersMessage;
