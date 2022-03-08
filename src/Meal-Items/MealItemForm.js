import React, { useContext, useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";
import MealToCartContext from "../Context/Meal-To-Cart-Context";

//const storedBtnIds = [];
//storedBtnIds.push(randomId);
const MealItemForm = (props) => {
  //const mealToCartCtx = useContext(MealToCartContext);
  const [amtIsValid, setAmtIsValid] = useState(true);
  //let numberOfItems = 1;
  const inputRef = useRef();
  // const storeInputValue = (inputValue) =>
  // {
  //     numberOfItems = inputValue;
  //     console.log(numberOfItems);
  // }

//   const addItemToCartHandler = (event) => {
//   };

  const formSubmitHandler = (event) => {
    console.log("test");
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const convertInputStrToNum = Number(enteredAmount);

    //Input fields don't have to be numbers and can be string even if you set the type to a number
        // - Seen through the two console.logs below
        console.log(enteredAmount);
        console.log(convertInputStrToNum);
        //console.log(100);

    if (enteredAmount.trim().length === 0 || convertInputStrToNum < 1 || convertInputStrToNum > 5) {
        setAmtIsValid(false);
      return;
    }
    //console.log(inputRef.current.value);
   // mealToCartCtx.addItem(inputRef);
   props.onAddToCart(convertInputStrToNum);
  }
  // let randomId = 0;
  // storedBtnIds.push(randomId);
  // console.log(storedBtnIds);
  //++randomId;
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      {/* addInputValue={storeInputValue} */}
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* onClick={addItemToCartHandler} */}
      <button>+ Add</button>
      {!amtIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealItemForm;
