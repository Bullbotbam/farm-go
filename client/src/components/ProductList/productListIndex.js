import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import ProductItem from "../ProductItem/productItemIndex";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { idbPromise} from "../../utils/helpers"


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

    data.products.forEach((product) => {
        idbPromise('products', 'put', product);
    })
  }
  else if (!loading) {
      idbPromise('products', 'get').then((products) => {
          dispatch({
              type: UPDATE_PRODUCTS,
              products: products
          })
      })
  }
}, [data, loading, dispatch]);



function filterProducts() {
  if (!currentCategory) {
    return state.products;
  }

  return state.products.filter(product => product.category._id === currentCategory);
}

    return (
        <div className="my-2">
            {state.products.length ? (
                <div>
                    {filterProducts().map((product) => (
                        <ProductItem 
                        key={product._id}
                        _id={product._id}
                        image={product.image}
                        name={product.name}
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