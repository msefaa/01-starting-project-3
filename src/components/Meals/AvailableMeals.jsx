import React, { useEffect, useState } from "react";
import Cards from "../UI/Cards";
import classes from "./AvailableMeals.module.css";
import Mealitem from "../Meals/MealItemFile/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-moive-app-45222-default-rtdb.europe-west1.firebasedatabase.app/Meals.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong!...");
      }
      const data = await response.json();
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedData);
      setIsloading(false);
    };

    fetchMeals().catch((err) => {
      setIsloading(false);
      setError(err.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.meals}>
        <Cards>
          <p style={{ textAlign: "center", fontSize: 18 }}>Loading...</p>
        </Cards>
      </section>
    );
  }
  if (error && !isLoading) {
    return (
      <section className={classes.meals}>
        <Cards>
          <p style={{ textAlign: "center", fontSize: 18 }}>{error}</p>
        </Cards>
      </section>
    );
  }
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
