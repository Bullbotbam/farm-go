import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER } from '../utils/queries';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function OrderHistory() {

    const { customerData } = useQuery(QUERY_CUSTOMER);
    let customer;

    if (customerData) {
        customer = data.customer
    }

  return (
    <div>
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
        image={image}
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
    </div>
    
    
  );
}


// function OrderHistory() {

//     // const { customerData } = useQuery(QUERY_CUSTOMER);
//     // let customer;

//     // if (customerData) {
//     //     customer = data.customer
//     // }

//     return (
//         <>
//           <div className="container my-1">
//             <Link to="/">
//               ← Back to Farm Go
//               </Link>
    
//                 <h2>Showing history for Chase</h2>
//                   <div  className="my-2">
//                     <h3>Oct. 10th, 2021</h3>
//                     <div className="flex-row">
//                         <div className="card px-1 py-1">
//                           <p>your products</p>
//                           <div>
//                             <span>$100</span>
//                           </div>
//                         </div>
                     
//                     </div>
//                   </div>
//                   <div class="row">
//     <div class="col s12 m6">
//       <div class="card">
//         <div class="card-image">
//           {/* <img src="images/sample-1.jpg"> */}
//           <span class="card-title">Card Title</span>
//           <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
//         </div>
//         <div class="card-content">
//           <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
//         </div>
//       </div>
//     </div>
//   </div>
    
//           </div>
    
//         </>)

// };

export default OrderHistory;