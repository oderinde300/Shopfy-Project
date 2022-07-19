import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const hasError = !enteredValueIsValid && isTouched;

    const valueInputChange = (event) => {
        setEnteredValue(event.target.value)
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return ({
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasError,
        valueInputChange,
        inputBlurHandler,
        reset,
        isTouched
    });
};

export default useInput;