import React, { Fragment } from "react";
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";

const AvailableMeals = (props) => {
  
  // This calls MealItem.js 4 times
    // This is useful beacuse it is a way that the MealItem.js props info can be called specifically through the context.
      // Each List Item has props specifically from the MealItem.js file 
  const dummyMealsList = 
  props.meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      mealName={meal.name}
      mealDescription={meal.description}
      mealPrice={meal.price}
    />
  ));
  console.log(props.meals);
  console.log(dummyMealsList[0].props);
  if(dummyMealsList[0].props.mealId === 'm1')
  {
    console.log("THis contains sushi and y...")
  }

  return (
      <Card className={styles.meals}>
        <ul>
          {dummyMealsList}
        </ul>
      </Card>
  );
};
export default AvailableMeals;
