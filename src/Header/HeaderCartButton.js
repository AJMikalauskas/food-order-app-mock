import React, {useContext, useState} from "react";
import styles from "./HeaderCartButton.module.css";
import cartIcon from "../img/cart-icon.png";
import CartIcon from "./CartIcon";
import ShoppingCartModal from "../Cart-Items/Modal";
import CartContext from "../Cart-Items/Cart-Context/cart-context";
import MealToCartContext from "../Context/Meal-To-Cart-Context";

const HeaderCartButton = (props) => {
const cartCtx = useContext(CartContext);
const mealToCartCtx = useContext(MealToCartContext);

const numberOfCartItems = mealToCartCtx.items.reduce((currentNum, item) => {
  return currentNum + item.amount;
}, 0);

  return (
    // When the add button is pressed from the menu items, the styles.bump class should go into effect
    <button className={styles.button} onClick={cartCtx.showShoppingCartModalTest}>
      {/* <img src={cartIcon} alt="cart-icon" className={styles.icon} /> */}
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
