import React from "react";
import styles from "./HeaderCartButton.module.css";
import cartIcon from "../img/cart-icon.png";
import CartIcon from "./CartIcon";

const HeaderCartButton = (props) => {
  return (
    // When the add button is pressed from the menu items, the styles.bump class should go into effect
    <button className={styles.button}>
      {/* <img src={cartIcon} alt="cart-icon" className={styles.icon} /> */}
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
