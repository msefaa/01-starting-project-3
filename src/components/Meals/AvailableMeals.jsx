import React from "react";
import Cards from "../UI/Cards";
import classes from "./AvailableMeals.module.css";
import Mealitem from "../Meals/MealItemFile/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function AvailableMeals() {
  const meals = DUMMY_MEALS;
  return (
    <section className={classes.meals}>
      <Cards>
        <ul>
          {meals.map((item) => (
            <Mealitem key={item.id} item={item} id={item.id} />
          ))}
        </ul>
      </Cards>
    </section>
  );
}

export default AvailableMeals;
