import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Cartcontext from "../../../store/Cartcontext";
function Mealitem({ item }) {
  const price = `$${item.price.toFixed(2)}`;
  const crtContex = useContext(Cartcontext);
  const addToCarthandler = (amount) => {
    crtContex.addItem({
      id: item.id,
      name: item.name,
      amount: amount,
      price: item.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={item.id} onAddToCart={addToCarthandler} />
      </div>
    </li>
  );
}

export default Mealitem;
