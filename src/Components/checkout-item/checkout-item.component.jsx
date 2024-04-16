import { useSelector, useDispatch } from "react-redux";

// import { selectCartItems } from "../../Store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../Store/cart/cart.reducer";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  // const cartItems = useSelector(selectCartItems);

  const removeFullItem = () => dispatch(clearItemFromCart(cartItem));
  const increaseItem = () => dispatch(addItemToCart(cartItem));
  const decreaseItem = () => dispatch(removeItemFromCart(cartItem));

  return (
    <tr className="checkout-item-container">
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
    </tr>
  );
};

export default CheckoutItem;
