import React, { useContext } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import CartContext from "./Cart-Context/cart-context";
import MealToCartContext from "../Context/Meal-To-Cart-Context";

const Cart = (props) => {
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
  };
  return (
    <div>
        {cartItems}
      <div className={styles.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
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
    </div>
  );
};

export default Cart;
