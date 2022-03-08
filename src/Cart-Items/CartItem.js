import React, { Fragment } from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={`${styles["cart-item"]}`}>
      <div>
        <h2>{props.cartItemName}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{props.cartItemPrice}</span>
          <span className={styles.amount}>x{props.amtOfCartItem}</span>
        </div>
        </div>
        <div className={styles.actions}>
            <button onClick={props.onRemoveCartItem}>-</button>
            <button onClick={props.onAddCartItem}>+</button>
        </div>
    </li>
  );
};

export default CartItem;
