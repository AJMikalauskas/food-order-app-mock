import React, { Fragment, useContext } from "react";
import MealToCartContext from "../Context/Meal-To-Cart-Context";
import Input from "../UI/Input";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  //console.log(props.mealName);
  //console.log(props.mealDescription);
  //console.log(props.mealPrice);
  const mealToCartCtx = useContext(MealToCartContext);
  const price = `$${props.mealPrice.toFixed(2)}`;
  console.log(price);

  // This addToCartHandler has the data from the Specific AvailableMeal because it's a list item and therefore, 4 list items exist or
    // 4 MealItem.js files as list items. So when addToCartHandler is called, the props within the list item are known due to it being 
      // a list item with the specific call of MealItem.js - each list item has its own props from AvailableMeals.js
        // This is semi complex logic and I got stuck on it for awhile - Amount is sent in from the MealItemForm.js
  const addToCartHandler = (amount) =>
  {
    console.log(props.mealName);
    console.log(props.mealDescription);
    mealToCartCtx.addItem({
      //key={props}
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: Number(props.mealPrice.toFixed(2))
    })
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={styles.description}>{props.mealDescription}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler}/>
    </li>
  );
};

export default MealItem;
