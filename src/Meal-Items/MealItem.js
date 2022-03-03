import React, { Fragment } from "react";
import Input from "../UI/Input";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  console.log(props.mealName);
  console.log(props.mealDescription);
  console.log(props.mealPrice);
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={styles.description}>{props.mealDescription}</div>
        <div className={styles.price}>{`$${props.mealPrice.toFixed(2)}`}</div>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
