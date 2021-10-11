import React from 'react';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		backgroundImage: `url(${process.env.PUBLIC_URL + '/images/logo.png'})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
}));
export default function Homepage() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header />
		</div>
	);
}
