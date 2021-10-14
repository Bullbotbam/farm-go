import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER } from '../utils/queries';

import bananas from '../assets/groceries/bananas.jpg'
import coffee from '../assets/groceries/coffee.jpg'
import bread from '../assets/groceries/bread.jpg'

import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { isNamedType } from 'graphql';

function OrderHistory() {

    const { customerData } = useQuery(QUERY_CUSTOMER);
    let customer;

    if (customerData) {
        customer = customerData.customer
    }

  return (
    <>
    <div className='container my-1'>
    <br/>
    <h3>Your previous purchases:</h3>
    <br/>

    {customer ? (
      <>
      {customer.order.products.map(({ image, name, price }, index) => (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
      </>
    ) : null}
    </div>

</>
  );
}

{/* <>
<div className='container my-1'>
<br/>
<h3>Your previous purchases:</h3>
<br/>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={2}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={bananas}
        alt="bananas"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bananas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $1.99
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={2}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={bread}
        alt="bread"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bread
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $2.99
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={2}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={coffee}
        alt="coffee"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Coffee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $6.99
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid> */}


{/* <>
    <div className='container my-1'>
    <br/>
    <h3>Your previous purchases:</h3>
    <br/>

    {customer ? (
      <>
      {customer.order.products.map(({ image, name, price }, index) => (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}

export default OrderHistory;