import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import useStyles from '../../utils/styles';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import { Button, CardActionArea, CardActions } from "@mui/material";

function ProductItem(item) {
  const classes = useStyles();
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
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid xs={12} sm={6} md={4}>
          <Card className="productItem">
            <CardActionArea>
              <Link to={`/products/${_id}`}>
                <img alt={name} src={`/images/${image}`} />
              </Link>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div>
                    <div>
                      {quantity} {("item", quantity)} in stock
                    </div>
                    <span>${price}</span>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
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
          </Card>
        </Grid>
      </Container>
    </>
  );
}

export default ProductItem;
