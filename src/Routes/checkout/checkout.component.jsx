import { useContext } from "react";

import { CartContext } from "../../Contexts/cart.context";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container" style={{ marginTop: "100px" }}>
      {/* <div className="checkout-header">
        <span className="header-block">product</span>
        <span className="header-block">description</span>
        <span className="header-block">quantity</span>
        <span className="header-block">price</span>
        <span className="header-block">remove</span>
      </div> */}
      <table>
        <thead>
          <tr className="checkout-header">
            <th className="header-block">Product</th>
            <th className="header-block">Description</th>
            <th className="header-block">Quantity</th>
            <th className="header-block">Price</th>
            <th className="header-block">Remove</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} cartItem={item} />
          ))}
        </tbody>

        <tfoot>
          <span className="total">
            Total: $
            {/* {cartItems.reduce(
              (acc, curr) => acc + curr.quantity * curr.price,
              0
            )} */}
            {cartTotal}
          </span>
        </tfoot>
      </table>
    </div>
  );
};

export default Checkout;
