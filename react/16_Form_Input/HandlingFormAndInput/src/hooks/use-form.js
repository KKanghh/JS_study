import { useState } from "react";

const useForm = (validationCheck) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const valueIsValid = validationCheck(enteredValue);
  const hasError = !valueIsValid && inputIsTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputIsTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    changeHandler: valueChangeHandler,
    blurHandler: valueBlurHandler,
    reset,
  };
};

export default useForm;
