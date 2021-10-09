import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import {
// 	Typography,
// 	Card,
// 	CardContent,
// 	CardMedia,
// 	CssBaseline,
// 	Grid,
// 	Container,
// 	CardActions,
// } from '@material-ui/core';

const productInfo = [
	{
		Item: 1,
		name: 'Apples',
		category: categories[1]._id,
		img: apples,
		description: 'red delicious',
		price: 2.99,
		quantity: 200,
	},
];
