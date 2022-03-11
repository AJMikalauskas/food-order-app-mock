import React, {useContext, useState, useEffect} from "react";
import styles from "./HeaderCartButton.module.css";
import cartIcon from "../img/cart-icon.png";
import CartIcon from "./CartIcon";
import ShoppingCartModal from "../Cart-Items/Modal";
import CartContext from "../Cart-Items/Cart-Context/cart-context";
import MealToCartContext from "../Context/Meal-To-Cart-Context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
const cartCtx = useContext(CartContext);
const mealToCartCtx = useContext(MealToCartContext);

const { items } = mealToCartCtx;

const numberOfCartItems = items.reduce((currentNum, item) => {
  return currentNum + item.amount;
}, 0);

const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

useEffect(() =>
{
  if (items.length === 0)
  {
    return;
  }
  // else
  // {
    setBtnIsHighlighted(true);
  // }

  const timer = setTimeout(() => {
    setBtnIsHighlighted(false);
  }, 300);

  return () => {
    clearTimeout(timer);
  };
},[items]);

return (
    // When the add button is pressed from the menu items, the styles.bump class should go into effect
    <button className={btnClasses} onClick={cartCtx.showShoppingCartModalTest}>
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
