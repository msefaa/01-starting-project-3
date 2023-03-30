import { useContext } from "react";
import CartContext from "../../store/Cartcontext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  const amount = useContext(CartContext);
  const amountNumber = amount.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amountNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
