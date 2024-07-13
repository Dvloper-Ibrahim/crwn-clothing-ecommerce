import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../Store/cart/cart.selector";
import { addItemToCart } from "../../Store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ProductCardContainer } from "./product-card.styles";
import { CategoryItem } from "../../Store/categories/category.types";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
