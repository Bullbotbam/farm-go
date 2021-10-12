import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import ProductItem from "../ProductItem/productItemIndex";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { Product } from "../../../../server/models";


function ProductList() {

 const [state, dispatch] = useStoreContext();

const { currentCategory } = state;

const { loading, data } = useQuery(QUERY_PRODUCTS);

useEffect(() => {
  if (data) {
    dispatch({
      type: UPDATE_PRODUCTS,
      products: data.products
    });
  }
}, [data, dispatch]);

function filterProducts() {
  if (!currentCategory) {
    return state.products;
  }

  return state.products.filter(product => product.category._id === currentCategory);
}

    return (
        <div className="productList">
            {products.length ? (
                <div>
                    {filterProducts().map((product) => (
                        <ProductItem 
                        key={product._id}
                        _id={product._id}
                        image={product.image}
                        name={product.price}
                        price={product.price}
                        quantity={product.quantity}
                        />
                    ))}
                    </div>
            ):(
                <h3>hello</h3>
            )}
          
        </div>
    )

}
export default ProductList;