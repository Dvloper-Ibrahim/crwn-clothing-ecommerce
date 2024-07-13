import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../Store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../Store/cart/cart.action";

import { CheckoutItemContainer } from "./checkout-item.styles";
import { CartElementProps } from "../cart-item/cart-element.component";

const CheckoutItem: FC<CartElementProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeFullItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const increaseItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const decreaseItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <td className="image-container">
        <img src={imageUrl} alt={name} />
      </td>
      <td className="name">{name}</td>
      <td className="quantity">
        <span className="arrow" onClick={decreaseItem}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseItem}>
          &#10095;
        </span>
      </td>
      <td className="price">${price}</td>
      <td className="remove-button" onClick={removeFullItem}>
        ×
      </td>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
