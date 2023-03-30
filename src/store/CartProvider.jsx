import React from "react";
import CartContext from "./Cartcontext";

function CartProvider(props) {
  const addItemToCart = (item) => {};
  const removeItemToCart = (id) => {};
  const value = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider;
