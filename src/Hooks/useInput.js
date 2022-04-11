import { useEffect, useState } from 'react';

/**
 * @global
 * @typedef {Object} UseInput
 * @property {string} value - The Entered Value
 * @property {boolean} isValid - The Result of validation of the entered value
 * @property {boolean} hasError - To tell if the input has error e.g: If the isTouched is true and the value is not validate this will resulting true
 * @property {string} errorMessage - error message return from validation
 * @property {function} setValue - function for set value manually
 * @property {function} valueChangeHandler - function handler for onChange
 * @property {function} inputBlurHandler - function handler for onBlur
 * @property {function} reset - function for reset value and isTouched value
 */

/**
 * @typedef {Object} Validation
 * @property {boolean} isValid - Validation result
 * @property {string} message - Validation message
 */

/**
 * @typedef {Object} UseInputParam
 * @property {string | Number} initialValue - initial value of the input
 * @property {function} [validateValue] - put the function for validate the input
 */

/**
 * Custom Hook for handling enteredValue and check is the input field has touched also validate every value inputted
 * @param {UseInputParam} param
 * @returns {UseInput} the result of data

 */
const useInput = ( {initialValue = '', validateValue = () => {return {isValid: true}}} ) => {
    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [isTouched, setIsTouched] = useState(false);
    const [valueIsValid, setValueIsValid] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        /**
        * @type {Validation}
        */
        const validation = validateValue(enteredValue);
        setValueIsValid(validation.isValid);
        setHasError(!validation.isValid && isTouched);

        if(!validation.isValid && isTouched){
            setErrorMessage(validation.message);
        }else{
            setErrorMessage('');
        }
    }, [enteredValue, isTouched])
    
    /**
     * 
     * @param {Event} event 
     */
    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    /**
     * 
     * @param {Event} event 
     */
    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue(initialValue);
        setIsTouched(false);
    };

    const setValue = (val) => {
        setEnteredValue(val);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        errorMessage: errorMessage,
        setValue: setValue,
        valueChangeHandler: valueChangeHandler,
        inputBlurHandler: inputBlurHandler,
        reset: reset
    };
}

export default useInput;