import { useDispatch, useSelector } from "react-redux";

// import { ReactComponent as ShippingIcon } from "../../Assets/shopping-bag.svg";
import { setIsCartOpen } from "../../Store/cart/cart.reducer";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../Store/cart/cart.selector";

import { CartIconContainer, ShippingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
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
