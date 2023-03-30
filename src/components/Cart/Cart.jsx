import React, { useContext } from "react";
import CartContext from "../../store/Cartcontext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  return (
    <Modal onHide={props.onHideModal}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItems
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt "]} onClick={props.onHideModal}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
