import React, { Fragment } from "react";
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";

const AvailableMeals = (props) => {
  
  const dummyMealsList = 
  props.meals.map((meal) => (
    <MealItem
      key={meal.id}
      mealName={meal.name}
      mealDescription={meal.description}
      mealPrice={meal.price}
    />
  ));

  return (
      <Card className={styles.meals}>
        <ul>
          {dummyMealsList}
        </ul>
      </Card>
  );
};
export default AvailableMeals;
