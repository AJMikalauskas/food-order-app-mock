import React, { useContext } from "react";
import ReactDOM from 'react-dom'
import Cart from "./Cart";
import styles from "./Modal.module.css";
//import MealToCartContext from "../Context/Meal-To-Cart-Context";
import CartContext from "./Cart-Context/cart-context";
const Backdrop = (props) =>
{
    const cartCtx = useContext(CartContext);
    return <div className={styles.backdrop} onClick={cartCtx.stopShowingCartModalTest}></div>
}

const Modal = (props) =>
{
    return (
        <div className={styles.modal}>
            <Cart />
        </div>
    )
};

const ShoppingCartModal = (props) =>
{
    return (
    <React.Fragment>
        {/* onClose={props.onClose} in both Backdrop and Modal tags */}
        {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))};
        {ReactDOM.createPortal(<Modal />, document.getElementById("overlay-root"))};
    </React.Fragment>
    )
}

export default ShoppingCartModal;