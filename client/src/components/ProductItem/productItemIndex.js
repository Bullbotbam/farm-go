import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { Typography, CardContent } from "@material-ui/core";
import { Button, CardActions } from "@mui/material";

function ProductItem(item) {
  const { image, name, _id, price, quantity } = item;

  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const addItem = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };
  return (
    <>
      <form spacing={2} xs={12} sm={6} md={4}>
        <Link to={`/products/${_id}`}>
          <img alt={name} src={`/images/${image}`} />
          <p>{name}</p>
        </Link>
        <CardContent>
          <Typography variant="h5">{name}</Typography>

          <Typography>${price}</Typography>
          {quantity}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            style={{
              color: "green",
              margin: "5%",
              display: "grid",
            }}
            onClick={addItem}
          >
            Add to cart
          </Button>
        </CardActions>
      </form>
    </>
  );
}

export default ProductItem;
