import React, {useState, useEffect} from "react";
import ShoppingCartModal from "../Modal";

const CartContext = React.createContext({
    // items: [],
    // totalAmount: 0,
    // addItem: (item) => {},
    // removeItem: (id) => {}
    showModal: false,
    showShoppingCartModalTest: () => {},
    stopShowingCartModalTest: () => {},
    // shoppingCartShowingJSXTest: 
})

export const CartContextProvider = (props) => 
{
    const [shoppingCartShowing, showShoppingCart] = useState(false);
    const [shoppingCartShowingJSX, showShoppingCartJSX] = useState();
  
    const showShoppingCartModal = () => {
        showShoppingCartJSX(<ShoppingCartModal />);
        showShoppingCart(true);
    }
  
    const stopShowingCartModal = () =>
    {
      showShoppingCart(false);
    }

    return (
        <CartContext.Provider 
        value={{
            showModal: shoppingCartShowing,
            showShoppingCartModalTest: showShoppingCartModal,
            stopShowingCartModalTest:stopShowingCartModal,
            shoppingCartShowingJSXTest: shoppingCartShowingJSX
        }}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartContext;