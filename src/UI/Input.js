import React, { useContext, useRef } from "react";
import MealToCartContext from "../Context/Meal-To-Cart-Context";
import styles from "./Input.module.css"

//const storeIds = [];
//let numId = 1;
const Input = React.forwardRef((props, ref) => {

    //const inputRef = useRef();
    //const mealToCartCtx = useContext(MealToCartContext);
        //let randomId = Math.random();
    //storeIds.push(randomId);
    //numId++;
    //console.log(storeIds);
    // const inputTrackerHandler = (event) =>
    // {
    //     console.log(event.target.value);
    //     console.log(props.inputRef.value);
    //     //props.addInputValue(Number(event.target.value));
    // }

    return (
        <div className={styles.input}>
            {/* Amount */}
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* onChange={inputTrackerHandler} */}
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;