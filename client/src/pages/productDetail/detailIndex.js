import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [state, dispatch] = useStoreContext;
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(
        product.find(product.find((product) => product._id === id))
      );
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    }
  }, [products, data, dispatch, id]);

  return (
    <>
      {currentProduct ? (
        <div>
          <Link to="/">See all products</Link>
          <p>{currentProduct.name}</p>
          <p>{currentProduct.description}</p>
          <p>{currentProduct.price}</p>
          <button>Add to cart</button>
          <button>Delete item</button>
          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img src={currentProduct.image} alt="loading" /> : null}
    </>
  );
}

export default ProductDetail;
