// import React from 'react';
// import { Container, Paper } from '@mui/material';
// // import { makeStyles } from '@mui/styles';

// // const useStyles = makeStyles((theme) => ({
// // 	root: {
// // 		flexGrow: 1,
// // 	},
// // 	paper: {
// // 		// padding: theme.spacing(1),
// // 		textAlign: 'center',
// // 		color: theme.palette.text.secondary,
// // 		height: 560,
// // 		clear: 'both',
// // 		paddingTop: 120,
// // 	},
// // }));

// export default function Jumbotron({ children }) {
// 	// const classes = useStyles();

// 	return (
// 		<Container
// 			style={{
// 				height: 560,
// 				clear: 'both',
// 				paddingTop: '10rem',
// 				textAlign: 'center',
// 			}}
// 		></Container>
// 	);
// }
import React from 'react';

function Jumbotron({ children }) {
	return (
		<div 
			style={{
				height: 1200,
				clear: 'both',
				// paddingTop: 20,
				textAlign: 'center',
			}}
		>
			{children}
		</div>
	);
}

export default Jumbotron;
