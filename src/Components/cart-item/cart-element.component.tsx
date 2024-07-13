import { FC } from "react";

import { CartItem } from "../../Store/cart/cart.types";
import { CartElementContainer } from "./cart-element.styles";

export type CartElementProps = {
  cartItem: CartItem;
};

const CartElement: FC<CartElementProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartElementContainer>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <span className="total">${quantity * price}</span>
      </div>
    </CartElementContainer>
  );
};

export default CartElement;
