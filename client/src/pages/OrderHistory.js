import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMER } from '../utils/queries';

function OrderHistory() {

    // const { customerData } = useQuery(QUERY_CUSTOMER);
    // let customer;

    // if (customerData) {
    //     customer = data.customer
    // }

    return (
        <>
          <div className="container my-1">
            <Link to="/">
              ← Back to Farm Go
              </Link>
    
                <h2>Showing history for Chase</h2>
                  <div  className="my-2">
                    <h3>Oct. 10th, 2021</h3>
                    <div className="flex-row">
                        <div className="card px-1 py-1">
                          <p>your products</p>
                          <div>
                            <span>$100</span>
                          </div>
                        </div>
                     
                    </div>
                  </div>
    
          </div>
    
        </>)

};

export default OrderHistory;