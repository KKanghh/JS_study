//import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) return;
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${!nameInputHasError ? "" : "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={`form-control ${!emailInputHasError ? "" : "invalid"}`}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Email must include @.</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
