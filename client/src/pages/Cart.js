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

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.common.white,
		fontSize: 25,
		fontFamily: 'Gabriela , serif',
	},

	[`&.${tableCellClasses.body}`]: {
		fontSize: 20,
		fontFamily: 'Gabriela , serif',
	},
}));

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
			const cart = await idbPromise('cart', 'get');
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
      <h2 style={{ fontSize: "50px" }}> Your Cart</h2>
      {state.cart.length ? (
        <div className="yourCart">
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="summary" style={{ width: "35%" }}>
            <h2
              style={{
                backgroundColor: "green",
                color: "white",
                fontWeight: "none",
                height: "55px",
               objectFit: "fill"
              }}
            >
              Order Summary
            </h2>

            <span style={{ fontSize: "20px" }}>Total: ${total()}</span>
          </div>
          {Auth.loggedIn() ? (
            <Button 
              onClick={submitCheckout}
              variant="contained"
              color="success"
             style={{marginLeft: "84vw"}}
          
            >
              Checkout
            </Button>
          ) : (
           <span>(Please login or create an account to checkout)</span> 
            
          )}
        </div>
      ) : (
        <h3>You haven't added anything to your cart yet!</h3>
      )}
    </React.Fragment>
  );
};
export default Cart;
