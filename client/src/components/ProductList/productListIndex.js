import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import ProductItem from "../ProductItem/productItemIndex";


function ProductList() {
    return (
        <div>
            <p>
                <ProductItem />
            </p>
        </div>
    )

}
export default ProductList;