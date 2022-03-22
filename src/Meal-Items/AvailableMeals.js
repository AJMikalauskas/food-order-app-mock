import React, { Fragment, useState, useCallback, useEffect } from "react";
import styles from './AvailableMeals.module.css';
import MealItem from "./MealItem";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";

const AvailableMeals = (props) => {
  // HTTP get call and store data in a useState
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

    // This is the POST request to just get the data to the google firebase DB
  //const postMealsData = async() => {
  // const backendStoredDummyMeals = await fetch("https://food-ordering-app-db-b3d2e-default-rtdb.firebaseio.com/meals.json",
  // {
  //   method:'POST',
  //   headers: {
  //     'Content-Type':
  //       'application/json;charset=utf-8'
  //   },
  //   body: JSON.stringify({
  //     //id is the randomized cryptic key 
  //     "name": "Green Bowl",
  //     "description": "Healthy...and green...",
  //     "price":  18.99
  //   })
  // });
  // const data = await backendStoredDummyMeals.json();
  // console.log(data);
  // }


  // GET Request
  const getMealsData = useCallback(async() => {
    setLoading(true);
    setError(null);
    try 
    {
  const response = await fetch("https://food-ordering-app-db-b3d2e-default-rtdb.firebaseio.com/meals.json");
  const data = await response.json(); 
  console.log(data);

  const mealsFromFirebaseDB = [];
  for(const key in data)
  {
    mealsFromFirebaseDB.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price
    })
  }
  console.log(mealsFromFirebaseDB);
  setApiData(mealsFromFirebaseDB);
    }
    catch(error)
    {
      setError(error.message);
    }
    // Stop Loading state once data is shown via this end statement
    setLoading(false);
  }, []);
  // Need to use useCallback so that the function isn't being referenced as new function everytime it's called in the useEffect()

  useEffect(() => {
    getMealsData();
  }, [getMealsData]);



  // This calls MealItem.js 4 times
    // This is useful beacuse it is a way that the MealItem.js props info can be called specifically through the context.
      // Each List Item has props specifically from the MealItem.js file 
        // since mealsFromFirebaseDB is set in the useCallback, not accesible in function, useState outside of it and set to the array inside
          // use the apiData.map to show on the screen all the information and send to MealItem.js
  const dummyMealsList = 
  apiData.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      mealName={meal.name}
      mealDescription={meal.description}
      mealPrice={meal.price}
    />
  ));
    // Error if these are in, all we need now is http calls not props anymore 
  // console.log(props.meals);
  // console.log(dummyMealsList[0].props);
  // if(dummyMealsList[0].props.mealId === 'm1')
  // {
  //   console.log("THis contains sushi and y...")
  // }

  return (
      <Card className={styles.meals}>
        <ul>
          {dummyMealsList}
        </ul>
      </Card>
  );
};
export default AvailableMeals;
