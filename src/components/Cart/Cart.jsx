import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
function Cart(props) {
  const cartItems = [{ id: "1", name: "sefa", amount: 2, price: 12.99 }];
  return (
    <Modal onHide={props.onHideModal}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>39.62 </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt "]} onClick={props.onHideModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
