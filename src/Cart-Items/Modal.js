import React from "react";
import ReactDOM from 'react-dom'
import Cart from "./Cart";
import styles from "./Modal.module.css";

const Backdrop = (props) =>
{
    return <div className={styles.backdrop} ></div>
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