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

  const [successfulSubmitFormData, setSuccessfulSubmitFormData] = useState(false);
  const submitOrderAndFormData = (boolData) =>
  {
    if(boolData === true)
    {
      // delete modal with form and cart items ---> show thanks for ordering message 
      setSuccessfulSubmitFormData(boolData);
    }
  };

   const[loadingStateOfPOST,setLoadingStateOfPOST]= useState(false);
  const loadingOrderPostFn = (loadingStateVal) =>
  {
    setLoadingStateOfPOST(loadingStateVal);
  }

  const showFormAndCartItems =
  <React.Fragment>
    {cartItems}
      <div className={styles.actions}>
                {/* Create a conditional showing of an item form */}
                {showCartForm && <CartForm loadingState={loadingOrderPostFn} onSubmitValidForm={submitOrderAndFormData}  onCancel={cartCtx.stopShowingCartModalTest}/>}
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

  console.log(successfulSubmitFormData);
  return (
    <div>
      { !loadingStateOfPOST && !successfulSubmitFormData && showFormAndCartItems}
      { loadingStateOfPOST && !successfulSubmitFormData && <p>Sending Order Data...</p>}
      { successfulSubmitFormData && <p>Order Has Been Sent Successfully</p>}
    </div>
  );
};

export default Cart;
