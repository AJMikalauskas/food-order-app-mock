import React, {useState, useContext} from "react";
import useInputHook from "../hooks/use-input-hook";
import styles from "./CartForm.module.css";
import MealToCartContext from "../Context/Meal-To-Cart-Context";

const CartForm = (props) => {
    // Add Better USer Feedback so cart and form say successfully submitted and cart items are removed once submit is successful
    const [isSubmitting, setIsSubmitting] = useState(false);
    props.loadingState(isSubmitting);
    const [submitData, setSubmitData] = useState(false);
    props.onSubmitValidForm(submitData);
    // Overall Form Validity State based on all states
    const [formIsValid, setFormIsValid] = useState(false);
    const mealToCartCtx = useContext(MealToCartContext);

    //const [specificNameError, setSpecificNameError]= useState("");
    // const validateNameVal = (nameInput) =>
    // {

    //     const nameInputValidRegex = nameInput.match(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/); 
    //     // Should return a true/false boolean?
    //     console.log(nameInputValidRegex);
    //     console.log(nameInput);
    //     if(nameInput.length === '')
    //     {
    //         setSpecificNameError("The name must contain more than 1 character!");
    //     }
    //     console.log(specificNameError);
    //     // else {
    //     // //const validateNameInput = nameInput.match(/^[A-Za-z][A-Za-z]{7,29}$/);
    //     // //console.log(validateNameInput);
    //     // return;
    //     // }
    //     return specificNameError;
    // }
    // These Regex values were found from Stack Overflow and other things like it
    const nameAndCityValidationRegex = "^[A-Za-z][A-Za-z]{7,29}$";
    const {enteredFormValue: nameInputValue, formValueIsValid: nameInputValid, 
        showErrorsOrNot: nameInputShowErrors, trackFormValue: trackNameInputValue, 
        inputFocusedFn: nameInputFocused, resetFormValueAndFocus: resetNameValueAndFocus} = useInputHook(
            //validateNameVal
        (nameInput) => nameInput.length > 1
            );
        //trackNameInputValue(nameInputValue);

    //const streetValidationRegex = "^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$";
    const {enteredFormValue: streetInputValue, formValueIsValid: streetInputValid, 
        showErrorsOrNot: streetInputShowErrors, trackFormValue: trackStreetInputValue, 
        inputFocusedFn: streetInputFocused, resetFormValueAndFocus: resetStreetValueAndFocus} = useInputHook(
            // Not Great Validation
                // Try and create search for street logic
            (validateStreetValue) => validateStreetValue.length > 10
        );
    //const postalCodeValidationRegex = "^[0-9]{1,4}(([\-\/][0-9]{1,4})|(\/[ABCDFGHJKLMNPRSTV]{1,2}))*$";
        // No need for special logic, since type of input is number, only validation is equal to 5 characters
    const {enteredFormValue: postalCodeInputValue, formValueIsValid: postalCodeInputValid, 
            showErrorsOrNot: postalCodeInputShowErrors, trackFormValue: trackPostalCodeInputValue, 
            inputFocusedFn: postalCodeInputFocused, resetFormValueAndFocus: resetPostalCodeValueAndFocus} = useInputHook(
                (validatePostalCodeValue) => validatePostalCodeValue.length === 5
            );
                // Follows the same logic as the town for regex since it's 
    const {enteredFormValue: cityInputValue, formValueIsValid: cityInputValid, 
            showErrorsOrNot: cityInputShowErrors, trackFormValue: trackCityInputValue, 
            inputFocusedFn: cityInputFocused, resetFormValueAndFocus: resetCityValueAndFocus} = useInputHook(
                (validateCityValue) => validateCityValue.length > 10
            );

    // const getCartItems = () =>
    // {
    //     const cartItems= [];
    //     console.log(mealToCartCtx.items);
    //     for(let cartItemNum = 0; cartItemNum < mealToCartCtx.items.length; cartItemNum++)
    //     {
    //         cartItems.push(mealToCartCtx.items[cartItemNum]);
    //     }
    //     return cartItems;
    // }
    const postOrderData = async() => {
        // Send Up Loading STate ot the cart.js so it will show loading for a small amount of time
        //setIsSubmitting(true);
        //props.loadingState(isSubmitting);
        const orderData = await fetch("https://food-ordering-app-db-b3d2e-default-rtdb.firebaseio.com/userOrderData.json",
        {
          method:'POST',
          headers: {
            'Content-Type':
              'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            user: {
            "Name": nameInputValue,
            "Street": streetInputValue,
            "ZipCode": postalCodeInputValue,
            "City": cityInputValue
            },
            // No need for object wrap around this -> no need to even use a function to get the cart items, 
                // could've done it but simpler this way
            orderInfo: mealToCartCtx.items
          })
        });
        const data = await orderData.json();
        console.log(data);
        setIsSubmitting(true);
        props.loadingState(isSubmitting);
        setSubmitData(true);
        props.onSubmitValidForm(true);
        }

    
        // Use Custom Input Hook
    //track User Inputs via states
    // const [enteredOrderName, setEnteredOrderName] = useState("")
    // const [enteredOrderStreet, setEnteredOrderStreet] = useState("")
    // //Postal Code is a number
    // const [enteredOrderPostalCode, setEnteredOrderPostalCode] = useState()
    // const [enteredOrderCity, setEnteredOrderCity] = useState("")

  const submitFormHandler = (event) => {
    event.preventDefault();
    //getCartItems();
    
    //Check Overall Form Is Valid Logic by checking all the 
    if(nameInputValid && streetInputValid && postalCodeInputValid && cityInputValid)
    {
        setFormIsValid(true);
    }
    else
    {
        //Don't run reset logic and other logic if the form isn't valid, set form valid if all pother values are valid
        return;
    }

    //Send Data to backend to be processed
    // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [apiData, setApiData] = useState([]);

    //This is the POST request to just get the data to the google firebase DB - need to call, cannot just put function inside this submitForm Data Fn
    postOrderData();

    resetNameValueAndFocus();
    resetStreetValueAndFocus();
    resetPostalCodeValueAndFocus();
    resetCityValueAndFocus();
    //If pass user validation, reset, create custom hook for inputs
    // setEnteredOrderName("");
    // setEnteredOrderStreet("");
    // setEnteredOrderPostalCode();
    // setEnteredOrderCity("");
  };

  const invalidNameCssShowing = nameInputShowErrors ? `${styles.control} ${styles.invalid}`: `${styles.control}`;
  const invalidStreetCssShowing = streetInputShowErrors ? `${styles.control} ${styles.invalid}`: `${styles.control}`;
  const invalidPostalCodeCssShowing = postalCodeInputShowErrors ? `${styles.control} ${styles.invalid}`: `${styles.control}`;
  const invalidCityCssShowing = cityInputShowErrors ? `${styles.control} ${styles.invalid}`: `${styles.control}`;
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={invalidNameCssShowing}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={nameInputValue} onChange={trackNameInputValue} onBlur={nameInputFocused}/>
        {nameInputShowErrors && <p className={styles.errorText}>The name field cannot be empty!</p>}
      </div>
      <div className={invalidStreetCssShowing}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={streetInputValue} onChange={trackStreetInputValue} onBlur={streetInputFocused}/>
        {streetInputShowErrors && <p className={styles.errorText}>Street must be longer than 10 Characters!</p>}
      </div>
      <div className={invalidPostalCodeCssShowing}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" value={postalCodeInputValue} onChange={trackPostalCodeInputValue} onBlur={postalCodeInputFocused}/>
        {postalCodeInputShowErrors && <p className={styles.errorText}>The postal code entered is invalid!</p>}
      </div>
      <div className={invalidCityCssShowing }>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={cityInputValue} onChange={trackCityInputValue} onBlur={cityInputFocused}/>
        {cityInputShowErrors && <p className={styles.errorText}>City must be longer than 10 characters!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CartForm;
