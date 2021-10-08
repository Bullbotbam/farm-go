import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Button,
	CardActionArea,
	CardActions,
} from '@mui/material';

export default function ProductCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="/client/src/images/pexels-brian-van-den-heuvel-1313267.jpg"
					alt="fruit"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Watermelon
					</Typography>
					<Typography variant="body2" color="text.secondary">
						This is probably one of the best fruits around. I can eat it all day
						and twice on Sunday. Gosh! I wish I had some now...
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Send to cart
				</Button>
			</CardActions>
		</Card>
	);
}
