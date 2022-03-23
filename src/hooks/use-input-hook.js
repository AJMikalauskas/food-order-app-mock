import React, { useState } from 'react'

const useInputHook = (validateFormValueFn) => 
{
    const [enteredFormValue, setEnteredFormValue] = useState("");
    const [inputFocused, setInputFocused] = useState(false);
    
    // Derived state, need validity and unvalid states
    const formValueIsValid = validateFormValueFn(enteredFormValue);
    // Determines whether or not to show error based on enteredFormValue and inputFocused
    const showErrorsOrNot = !formValueIsValid && inputFocused; 

    // Function to track form value and change input focused
    const trackFormValue = (event) =>
    {
        setEnteredFormValue(event.target.value);
    }
    
    const inputFocusedFn = () => 
    {
        setInputFocused(true);       
    }

    //Reset function for less code in CartForm.js
    const resetFormValueAndFocus = (inputValue) =>
    {
        setEnteredFormValue("");
        setInputFocused(false);
    }


    return { enteredFormValue, formValueIsValid, showErrorsOrNot, trackFormValue, inputFocusedFn, resetFormValueAndFocus };
}

export default useInputHook;