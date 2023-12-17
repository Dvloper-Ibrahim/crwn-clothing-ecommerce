import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../Contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigateTo = useNavigate();

  const goToCheckout = () => {
    navigateTo("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckout}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
