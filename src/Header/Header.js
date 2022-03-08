import React, { Fragment, useContext, useState } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../img/meals.jpg";
import ShoppingCartModal from "../Cart-Items/Modal";
import CartContext from "../Cart-Items/Cart-Context/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      {cartCtx.showModal === true && cartCtx.shoppingCartShowingJSXTest}
      <header className={styles.header}>
        <h1>Xander's Kitchen</h1>
        <HeaderCartButton  />
        {/* <button>Cart</button> */}
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
