import React, { useContext, useState } from "react";
import CartContext from "../../store/Cartcontext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
import CheckoutForm from "./CheckoutForm";
function Cart(props) {
  const [isChecking, setIsChecking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onCheckinClick = () => {
    setIsChecking(true);
  };
  const onCancelClick = () => {
    setIsChecking(false);
  };
  const onFetchOrderData = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-moive-app-45222-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          userData: userData,
          orderDetails: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setIsSubmitted(true);
    cartCtx.clearCart();
  };
  return (
    <Modal onHide={props.onHideModal}>
      {!isSubmitting && !isSubmitted && (
        <>
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
          {isChecking && (
            <CheckoutForm
              onCancel={onCancelClick}
              onConfirm={onFetchOrderData}
            />
          )}
          {!isChecking && (
            <div className={classes.actions}>
              <button
                className={classes["button--alt "]}
                onClick={props.onHideModal}
              >
                Close
              </button>
              {cartCtx.items.length > 0 && (
                <button className={classes.button} onClick={onCheckinClick}>
                  Order
                </button>
              )}
            </div>
          )}
        </>
      )}
      {isSubmitting && <p>Your order is sending...!</p>}
      {!isSubmitting && isSubmitted && (
        <>
          <p>Your order was sent succesfully!</p>
          <div className={classes.actions}>
            <button className={classes.button} onClick={props.onHideModal}>
              Close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default Cart;
