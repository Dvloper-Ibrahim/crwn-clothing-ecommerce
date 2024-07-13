import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../Store/cart/cart.selector";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import PaymentForm from "../../Components/payment-form/payment-form.component";

import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer style={{ marginTop: "100px" }}>
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
          <PaymentForm />
        </tfoot>
      </table>
    </CheckoutContainer>
  );
};

export default Checkout;
