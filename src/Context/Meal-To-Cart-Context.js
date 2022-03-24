import React, { useReducer, useState } from "react";

const MealToCartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const itemsReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    
    // console.log(action.item.price);
    // //const stringConvertPrice = `$${action.item.price.toFixed(2)}`;
    // console.log(state.items[0]);
    // console.log(state.items.length);

    // const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    //     // Test later, but for now use his solution
    // for(let itemNum = 0; itemNum < state.items.length; itemNum++)
    // {
    //     if(state.items[itemNum].id === action.item.id)
    //     {
    //         console.log("Same Item Error");
    //         const newItem = {
    //             ...state.items[itemNum],
    //             amount: state.items[itemNum].amount + action.item.amount
    //         }

    //         //action.item.amount += state.items[itemNum].amount;
    //         //const keepSameItems = state.item;
    //         //console.log(state.items);
    //         //console.log(action.items);
    //         //console.log(state.item);
    //         //const updatedTotalAmount = state.totalAmount + state.items[itemNum].price * action.item.amount;
    //         console.log(updatedTotalAmount);
    //         //state.items[itemNum].amount += action.item.amount;
    //         //state.items[itemNum] = action.item;
    //         const substituteStateWithAction = state.items.splice(itemNum,1,newItem);
    //         console.log(state.items);
    //         //const updatedItems = state.items.concat(action.item);
    //         //const prevItems = state.items;
    //         return {
    //             items: substituteStateWithAction,
    //             totalAmount: updatedTotalAmount
    //         }
    //     }
    // }
    // This is the value that will never change

    console.log((22.99 + 16.50).toFixed(2));
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
     const roundedTotalAmt = updatedTotalAmount.toFixed(2);
     console.log(roundedTotalAmt);
      //const updatedItems = state.items.concat(action.item);
    // // findIndex() just finds the index in the items array in which the copy of the action.item.id is found
    //     // this for instance would be 0 if I pressed add for sushi 2x
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // // This stores the object which is the original id made, not the copy
    const existingCartItem = state.items[existingCartItemIndex];
    //let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      // Uses original data, but changes amount to the original plus the amount from the action
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //existingCartItem.amount += action.item.amount;
      //updatedItems is set equal to theprevious state of the items with all values of the items
      // It then changes the item which has the original id to the updatedItem with the different amount
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // This is if there is no copy of an item being made
      // updatedItem stores the data from the action.item
      // updatedItems adds the updatedItem or action.item to itself by concatenation
      //updatedItem = {...action.item};

      // Simpler to just use the action.item and not an updatedItem, instead it's better to set up top in original if as a const
      updatedItems = state.items.concat(action.item);
    }
    //action.item.price = `$${action.item.price.toFixed(2)}`;
    //console.log(action.item.price);
    //console.log(updatedTotalAmount);
    //action.item.price = stringConvertPrice;
    //const testAmt = state.totalAmount + action.totalAmt;
    //console.log(updatedTotalAmount);
    //console.log(state.totalAmount);
    //console.log(testAmt);
    //const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmount: Number(roundedTotalAmt),
    };
  }

  if (action.type === "REMOVE_ITEM") 
  {
      console.log(state.items);
      let removingCartItemIndex = state.items.findIndex((item) => 
          item.id === action.id
      )
     console.log(removingCartItemIndex);

        // This will store the items but remove one amount from the specified item
        let subtractedItemFromArr;
        // This is the item in which the amount will go down by 1
    const removingOneAmtFromThisItem = state.items[removingCartItemIndex];
        // This is the total amount with the subtraction of the removed item amt price above 
    const subtractItemFromTotalAmount = Number((state.totalAmount - removingOneAmtFromThisItem.price).toFixed(2));
    
    const updatedItemAfterRemovingAmt = 
    {
        ...removingOneAmtFromThisItem,
        amount: removingOneAmtFromThisItem.amount - 1
    }

    // Set empty let value to the state(previous) of the items
    subtractedItemFromArr  = [...state.items];
    //subtractedItemFromArr[removingCartItemIndex] = updatedItemAfterRemovingAmt;
    //const removedCartItemAmt = subtractedItemFromArr[removingCartItemIndex].amount - 1; 
    //subtractedItemFromArr[removingCartItemIndex].amount = removedCartItemAmt; 
    if(updatedItemAfterRemovingAmt.amount === 0)
    {
        subtractedItemFromArr.splice(removingCartItemIndex,1)
        console.log(subtractedItemFromArr);
    }
    else
    {
        subtractedItemFromArr[removingCartItemIndex] = updatedItemAfterRemovingAmt;
    }

    return {
        items: subtractedItemFromArr,
        totalAmount: subtractItemFromTotalAmount
    }
  }

  if (action.type === "CLEAR_CART_ITEMS") 
  {
    return defaultCartState;
  }
  
  return defaultCartState;
};

export const MealToCartContextProvider = (props) => {
  const [itemsState, dispatchItems] = useReducer(
    itemsReducer,
    defaultCartState
  );
  //const items = [];
  //const [totalAmount, changeTotalAmt] = useState(0);
  // Test multiple adding amts of items
  const addItemToCartHandler = (item) => {
    //changeTotalAmt(amtOfItem);
    //console.log(totalAmount);
    console.log(item);
    dispatchItems({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
      dispatchItems({ type:"REMOVE_ITEM", id: id})
  };

  const clearCartHandler = () =>
  {
    dispatchItems({type:"CLEAR_CART_ITEMS"});
  }

  return (
    <MealToCartContext.Provider
      value={{
        items: itemsState.items,
        totalAmount: itemsState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
      }}
    >
      {props.children}
    </MealToCartContext.Provider>
  );
};

export default MealToCartContext;
