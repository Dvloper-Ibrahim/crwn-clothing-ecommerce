import { useContext } from "react";

import { CartContext } from "../../Contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const removeFullItem = () => {
    clearItemFromCart(cartItem);
  };

  const increaseItem = () => {
    addItemToCart(cartItem);
  };

  const decreaseItem = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={decreaseItem}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseItem}>
          &#10095;
        </span>
      </div>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={removeFullItem}>
        ×
      </span>
    </div>
  );
};

export default CheckoutItem;
