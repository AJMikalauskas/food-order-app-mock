import React from "react";
import styles from "./Input.module.css"

const Input = () => {

    return (
        <div className={styles.input}>
            <label>Amount</label>
            <input type="number" placeholder="1" />
        </div>
    )
}

export default Input;