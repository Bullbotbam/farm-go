import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import ProductItem from "../ProductItem/productItemIndex";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import useStyles from "../../utils/styles";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

function ProductList() {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="xl">
        {state.products.length ? (
          <Grid container spacing={2} style={{ marginTop: "3rem" }}>
            {filterProducts().map((product) => (
              <Grid xs={12} sm={6} md={4}>
                <ProductItem
                  key={product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <h3>Add some items to your cart, get shopping!</h3>
        )}
      </Container>
      {loading ? <h2>Hello </h2> : null}
    </div>
  );
}
export default ProductList;
