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
import image1 from '../../assets/groceries/watermelon.jpg';

export default function ProductCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component="img" height="140" image={image1} alt="fruit" />
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
