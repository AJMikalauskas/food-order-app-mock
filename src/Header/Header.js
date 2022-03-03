import React, { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../img/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Xander's Kitchen</h1>
        <HeaderCartButton />
        {/* <button>Cart</button> */}
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
