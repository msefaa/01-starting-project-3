import React from "react";
import Meals from "../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>SefaMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={Meals} alt="logo" />
      </div>
    </>
  );
}

export default Header;
