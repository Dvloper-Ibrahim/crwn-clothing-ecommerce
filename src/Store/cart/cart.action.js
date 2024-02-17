import { CART_ACTION_TYPES } from "./cart.types";
import createAction from "../../Utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const isItemExists = cartItems.some((x) => x.id === productToAdd.id);

  if (isItemExists) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Decrease quantity until removal from cart
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((x) => x.id === cartItemToRemove.id);

  if (existingCartItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return cartItems.filter((x) => x.id !== cartItemToRemove.id);
};

// Clear item from cart
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((x) => x.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
