import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CartContext from "./Cart-Context/cart-context";
import MealToCartContext from "../Context/Meal-To-Cart-Context";
import CartForm from "./CartForm";

const Cart = (props) => {
  const [showCartForm, setShowCartForm] = useState(false);
  const cartCtx = useContext(CartContext);
  const mealToCartCtx = useContext(MealToCartContext);
  const totalAmount = `$${mealToCartCtx.totalAmount.toFixed(2)}`;
  const hasItems = mealToCartCtx.items.length > 0;

  // Better User Feedback for when form is submitted to DB
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [submitValidForm, setSubmitValidForm] = useState(false);

  const onRemoveCartItem = (id) => {
    mealToCartCtx.removeItem(id);
  };

  const onAddCartItem = (item) => {
    mealToCartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={`${styles["cart-items"]}`}>
        {/* COmplex Logic to adding an actual item is seen in MealItem.js and AvailableMeals.js  */}
      {mealToCartCtx.items.map((cartMeal) => (
        <CartItem
          // cartItemName={props.cartItemName}
          // cartItemPrice={props.cartItemPrice}
          // amtOfCartItem={props.amtOfCartItem}
          // onRemoveCartItem={onRemoveCartItem}
          // onAddCartItem={onAddCartItem}
          key={cartMeal.id}
          cartItemName={cartMeal.name}
          cartItemPrice={`$${cartMeal.price.toFixed(2)}`}
          amtOfCartItem={cartMeal.amount}
          onRemoveCartItem={onRemoveCartItem.bind(null, cartMeal.id)}
          onAddCartItem={onAddCartItem.bind(null, cartMeal)}
        />
      ))}
    </ul>
  );

  const placeOrder = () => {
    console.log("Ordering...");
    setShowCartForm(true);
  };

  //He moved the post request to this page and better user feedback too
  const submitOrderHandler = async(userData) => 
  {
    setIsSubmitting(true);
      await fetch("https://food-ordering-app-db-b3d2e-default-rtdb.firebaseio.com/userOrderData.json",
      {
        method:'POST',
        headers: {
          'Content-Type':
            'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          // user: {
          // "Name": nameInputValue,
          // "Street": streetInputValue,
          // "ZipCode": postalCodeInputValue,
          // "City": cityInputValue
          // },
          user : userData,
          // No need for object wrap around this -> no need to even use a function to get the cart items, 
              // could've done it but simpler this way
          orderInfo: mealToCartCtx.items
        })
      });
      // const data = await orderData.json();
      // console.log(data);
      // setIsSubmitting(true);
      // props.loadingState(isSubmitting);
      // setSubmitData(true);
      // props.onSubmitValidForm(true);
      setIsSubmitting(false);
      setSubmitValidForm(true);
      mealToCartCtx.clearCart();
  }

  //}

  // const [successfulSubmitFormData, setSuccessfulSubmitFormData] = useState(false);
  // const submitOrderAndFormData = (boolData) =>
  // {
  //   if(boolData === true)
  //   {
  //     // delete modal with form and cart items ---> show thanks for ordering message 
  //     setSuccessfulSubmitFormData(boolData);
  //   }
  // };

  //  const[loadingStateOfPOST,setLoadingStateOfPOST]= useState(false);
  // const loadingOrderPostFn = (loadingStateVal) =>
  // {
  //   setLoadingStateOfPOST(loadingStateVal);
  // }

  const showFormAndCartItems =
  <React.Fragment>
     {cartItems}
      <div className={styles.actions}>
                {/* Create a conditional showing of an item form */}
                {showCartForm && <CartForm onConfirm={submitOrderHandler} onCancel={cartCtx.stopShowingCartModalTest}/>}
      <div className={styles.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
        <button
          className={`${styles["button--alt"]}`}
          onClick={cartCtx.stopShowingCartModalTest}
        >
          Close
        </button>
        {hasItems && <button className={styles.button} onClick={placeOrder}>
          Order
        </button>}
      </div>
  </React.Fragment>;

  //console.log(successfulSubmitFormData);
  return (
    <div>
         {!isSubmitting && !submitValidForm && showFormAndCartItems}
         {isSubmitting && !submitValidForm && <p>Submitting Order...</p>}
         {submitValidForm && <p>Order Successfully Sent!</p>}
      {/* { !loadingStateOfPOST && !successfulSubmitFormData && showFormAndCartItems}
      { loadingStateOfPOST && !successfulSubmitFormData && <p>Sending Order Data...</p>}
      { successfulSubmitFormData && <p>Order Has Been Sent Successfully</p>} */}
    </div>
  );
};

export default Cart;
