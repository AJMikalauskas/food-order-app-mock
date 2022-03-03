import React from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) =>
{
    const onRemoveCartItem = () =>
    {

    }

    const onAddCartItem = () => {

    }

    const placeOrder = () => {
        console.log("Ordering...");
    }
    return (
        <div>
        <ul className={`${styles['cart-items']}`}>
            
            <CartItem 
                // cartItemName={props.cartItemName}
                // cartItemPrice={props.cartItemPrice}
                // amtOfCartItem={props.amtOfCartItem}
                // onRemoveCartItem={onRemoveCartItem}
                // onAddCartItem={onAddCartItem}
                cartItemName={"Sushi"}
                cartItemPrice={"$22.99"}
                amtOfCartItem={"x1"}
                onRemoveCartItem={onRemoveCartItem}
                onAddCartItem={onAddCartItem}
            />
        </ul>
        <span className={styles.total}>Total Amount <span className={styles.actions}>$88.99</span></span>
        <div className={styles.actions}>
            <button className={`${styles['button--alt']}`} onClick={props.onClose}>Close</button>
            <button className={styles.button} onClick={placeOrder}>Order</button>
        </div>
        </div>
    )
};

export default Cart;