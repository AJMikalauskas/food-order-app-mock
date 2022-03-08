import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./Cart-Items/Cart-Context/cart-context";
import { MealToCartContextProvider } from "./Context/Meal-To-Cart-Context";

ReactDOM.render(
  <React.StrictMode>
    <MealToCartContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </MealToCartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
