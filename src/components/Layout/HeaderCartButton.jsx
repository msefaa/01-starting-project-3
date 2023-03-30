import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cartcontext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  const amount = useContext(CartContext);
  const [bump, setBump] = useState(false);
  const amountNumber = amount.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  const { items } = amount;
  const btnClasses = `${classes.button} ${bump ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amountNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
