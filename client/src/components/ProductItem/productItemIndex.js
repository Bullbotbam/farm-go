import React from 'react';

function ProductItem(item) {
const{
    image,
    name,
    _id,
    price, 
    quantity
}= item;

return (
    <div className="productItem" >
        <img alt={name}
        src={`/images${image}`}>
        </img>
    </div>
)
}

export default ProductItem; 