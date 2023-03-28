import React from "react";
import classes from "./Cards.module.css";
function Cards({ children }) {
  return <div className={classes.card}>{children}</div>;
}

export default Cards;
