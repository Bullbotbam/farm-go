import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: 'none',
		fontFamily: 'Gabriela',
	},
	appbarTitle: {
		flexGrow: '1',
	},
	appbarWrapper: {
		width: '80%',
		margin: '0 auto',
	},
	icon: {
		color: 'green',
		fontSize: '2rem',
	},
	colorText: {
		color: '#5aff3d',
	},
}));
export default function Header() {
	const classes = useStyles();
	return (
		<div classes={classes.root}>
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar className={classes.appbarWrapper}>
					<h1>FarmGo Market</h1>
					<IconButton>
						<SortIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div>
				<h1>The Fresh Choice</h1>
			</div>
		</div>
	);
}
