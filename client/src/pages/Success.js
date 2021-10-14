import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import image from "../assets/logo/cow.jpg"

//TODO : REMOVE COMMENTS AFTER DONE WITH REST
function Success() {
  //    const [addOrder] = useMutation(ADD_ORDER);

  //    useEffect(() => {
  //      async function saveOrder() {
  //TO GET ALL ITEMS FROM CART; PRODUCTS MAPS THE CART ITEMS INTO AN ARRAY
  //        const cart = await idbPromise("cart", "get");
  //        const products = cart.map((item) => item._id);

  //        if (products.length) {
  //          const { data } = await addOrder({ variables: { products } });
  //          const productData = data.addOrder.products;

  //          productData.forEach((item) => {
  //            idbPromise("cart", "delete", item);
  //          });
  //        }
  //SET TIMER FOR 5SECONDS
  //        setTimeout(() => {
  //          window.location.assign("/");
  //        }, 5000);
  //      }

  //      saveOrder();
  //    }, [addOrder]);
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
