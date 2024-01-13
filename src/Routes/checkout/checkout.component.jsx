import { useContext } from "react";

import { CartContext } from "../../Contexts/cart.context";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container" style={{ marginTop: "100px" }}>
      <div className="checkout-header">
        <span className="header-block">product</span>
        <span className="header-block">description</span>
        <span className="header-block">quantity</span>
        <span className="header-block">price</span>
        <span className="header-block">remove</span>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">
        Total: $
        {cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)}
      </span>
    </div>
  );
};

export default Checkout;
