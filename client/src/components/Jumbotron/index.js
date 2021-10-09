import React from 'react';
import { textAlign } from '@mui/system';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		height: 560,
		clear: 'both',
		paddingTop: 120,
		textAlign: 'center',
	},
}));

export default function Jumbotron(children) {
	const classes = useStyles();

	return <>{children}</>;
}
