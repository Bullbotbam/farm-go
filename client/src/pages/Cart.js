import React, { useEffect } from "react";
import CartItem from "../components/CartItem/cartIndex";
import { Button } from "@mui/material";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";
import image from "../assets/cupons/deal.jpg";
import { Typography, Card, CardContent } from "@material-ui/core";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function total() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
      getCheckout({
        variables: { products: productIds },
      });
    });
  }

  return (
    <React.Fragment>
      <div className="shoppingCart">
        <h2 style={{ fontSize: "50px", padding: "40px 40px", color: "white" }}>
          {" "}
          Shopping Cart
        </h2>
        {state.cart.length ? (
          <div className="cart">
            {state.cart.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
            <div
              className="summary"
              style={{ width: "90%", backgroundColor: "white" }}
            >
              <h2
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "none",
                  height: "45px",
                  objectFit: "fill",
                }}
              >
                Order Summary
              </h2>

              <h3
                style={{
                  fontSize: "22px",
                  backgroundColor: "white",
                  padding: "20px 25px",
                }}
              >
                Total: ${total()}
              </h3>
            </div>
            {Auth.loggedIn() ? (
              <Button
                onClick={submitCheckout}
                variant="contained"
                backgroundColor="white"
                color="success"
              >
                Checkout
              </Button>
            ) : (
              <span>(Please login or create an account to checkout)</span>
            )}
          </div>
        ) : (
          <Card style={{ alignContent: "center", backgroundColor: "transparent" }}>
             <Typography gutterBottom variant="h5">
                <h4 style={{marginLeft: "3.5vw", color: "white"}}>Your cart is empty</h4>
              </Typography>
            <img src={image} alt="sale" style={{width: "70%"}}/>
            <CardContent>
          
            </CardContent>
          </Card>
        )}
      </div>
    </React.Fragment>
  );
};
export default Cart;
