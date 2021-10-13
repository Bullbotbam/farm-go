import React, { useEffect } from "react";
import CartItem from "../components/CartItem/cartIndex";
import TableContainer from "@mui/material/TableContainer";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { Button } from "@mui/material";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontSize: 25,
    fontFamily: "Gabriela , serif",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    fontFamily: "Gabriela , serif",
  },
}));

const Cart = () => {
  const [checkout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
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
      checkout({
        variables: { products: productIds },
      });
    });
  }

  return (
    <React.Fragment>
      <h2 style={{ fontSize: "50px" }}> Your Cart</h2>

      {state.cart.length ? (
        <TableContainer className="table">
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="summary" style={{ width: "25%" }}>
            <TableHead style={{ width: "70%" }}>
              <StyledTableCell>Order Summary</StyledTableCell>
            </TableHead>
            <TableBody>
              {/* TODO: REMOVE HARD CODED TOTAL VALUE WITH TOTAL FUNCTION (total()) */}
              <StyledTableCell>Total: ${4}</StyledTableCell>
            </TableBody>
            <Button
              onClick={submitCheckout}
              variant="contained"
              color="success"
              style={{
                margin: "5%",
                alignSelf: "center",
                display: "grid",
              }}
            >
              {" "}
              Checkouts
            </Button>
          </div>
        </TableContainer>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </React.Fragment>
  );
};
export default Cart;
