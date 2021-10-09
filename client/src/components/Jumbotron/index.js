import React from 'react';
import { textAlign } from '@mui/system';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/stlyes';

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

	return (
		<>
			<Paper className={classes.paper}>{children}</Paper>
		</>
	);
}
