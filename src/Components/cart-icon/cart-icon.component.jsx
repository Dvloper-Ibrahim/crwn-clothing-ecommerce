import { useContext } from "react";

import { ReactComponent as ShippingIcon } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../Contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShippingIcon className="shipping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
