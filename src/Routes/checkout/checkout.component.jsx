import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../Store/cart/cart.selector";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container" style={{ marginTop: "100px" }}>
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
          <span className="total">Total: $ {cartTotal}</span>
        </tfoot>
      </table>
    </div>
  );
};

export default Checkout;
