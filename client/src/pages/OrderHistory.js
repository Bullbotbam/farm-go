import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER } from '../utils/queries';

import bananas from '../assets/groceries/bananas.jpg'
import coffee from '../assets/groceries/coffee.jpg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function OrderHistory() {

    // const { customerData } = useQuery(QUERY_CUSTOMER);
    // let customer;

    // if (customerData) {
    //     customer = data.customer
    // }

  return (
      <>
    <div className='container my-1'>
        <Link to="/">
            ← Back to Products
        </Link>
    <div className="my-2">  
    <div className='flex-row'>
    <Card  sx={{ maxWidth: 345 }}>
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
          $2.99
        </Typography>
      </CardContent>
    </Card>
    </div>  
    </div>
    </div>
    <div className='container my-1'>
    <div className="my-2">  
    <div className='flex-row'>
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        width="140"
        image={coffee}
        alt="bananas"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Coffee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $2.99
        </Typography>
      </CardContent>
    </Card>
    </div>  
    </div>
    </div>

</>
  );
}


{/* <div>
        <Link to="/">
            ← Back to Products
        </Link>
    {customer ? (
        <>
    {customer.order.products.map(({ image, productName, price }, index) => (
    <Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"l
        src= {image}
        alt="bananas"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
    </Card>
    ))}
    </>
    ) : null}
    </div> */}

export default OrderHistory;