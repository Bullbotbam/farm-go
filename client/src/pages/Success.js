import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import image from "../assets/logo/cow.jpg"


function Success() {
     const [addOrder] = useMutation(ADD_ORDER);

     useEffect(() => {
       async function saveOrder() {

         const cart = await idbPromise("cart", "get");
         const products = cart.map((item) => item._id);

         if (products.length) {
           const { data } = await addOrder({ variables: { products } });
           const productData = data.addOrder.products;

           productData.forEach((item) => {
             idbPromise("cart", "delete", item);
           });
         }

         setTimeout(() => {
           window.location.assign("/");
         }, 5000);
       }

       saveOrder();
     }, [addOrder]);
  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <img src={image} alt="cow" />
      </Jumbotron>
    </div>
  );
}

export default Success;
