import React from "react";

function Cart() {
  return (
    <div>
      <div className="cart">
        <div className="close"></div>
        <h2>My Cart</h2>

        <div>
          <div className="flex-row space-between">
            <strong>Your Items</strong>
            <strong>Order Summary</strong>
            <strong> Total: $</strong>
            <strong>Order Summary</strong>

            <button>Checkout</button>
            <span>(log in to check out)</span>
          </div>
        </div>

        <h3>You haven't added anything to your cart yet!</h3>
      </div>
    </div>
  );
}
export default Cart;
