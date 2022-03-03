import React from "react";
import ReactDOM from 'react-dom'
import Cart from "./Cart";
import styles from "./Modal.module.css";

const Backdrop = (props) =>
{
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const Modal = (props) =>
{
    return (
        <div className={styles.modal}>
            <Cart onClose={props.onClose}/>
        </div>
    )
};

const ShoppingCartModal = (props) =>
{
    return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('backdrop-root'))};
        {ReactDOM.createPortal(<Modal onClose={props.onClose}/>, document.getElementById("overlay-root"))};
    </React.Fragment>
    )
}

export default ShoppingCartModal;