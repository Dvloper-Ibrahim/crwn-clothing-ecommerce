import { useContext } from "react";

// import { ReactComponent as ShippingIcon } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../Contexts/cart.context";

import { CartIconContainer, ShippingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <CartIconContainer className="cart-icon-container" onClick={toggleCart}>
      <ShippingIcon className="shipping-icon" />
      <ItemCount>
        {/* {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} */}
        {cartCount}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
