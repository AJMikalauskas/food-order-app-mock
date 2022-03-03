import React, { Fragment, useState } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../img/meals.jpg";
import ShoppingCartModal from "../Cart-Items/Modal";

const Header = (props) => {

  
  const [shoppingCartShowing, showShoppingCart] = useState(false);
  const [shoppingCartJSXShowing, showShoppingCartJSX] = useState();

  const showShoppingCartModal = () => {
      showShoppingCartJSX(<ShoppingCartModal onClose={stopShowingCartModal}/>);
      showShoppingCart(true);
  }

  const stopShowingCartModal = () =>
  {
    showShoppingCart(false);
  }
  return (
    <Fragment>
      {shoppingCartShowing === true && shoppingCartJSXShowing}
      <header className={styles.header}>
        <h1>Xander's Kitchen</h1>
        <HeaderCartButton onClick={showShoppingCartModal} />
        {/* <button>Cart</button> */}
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
