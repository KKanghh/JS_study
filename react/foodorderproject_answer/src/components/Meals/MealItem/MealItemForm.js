import React, { useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [inputValue, setInputValue] = useState("1");

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const buttonClickHandler = (event) => {
    event.preventDefault();
    props.onClick(inputValue);
    setInputValue("1");
  };

  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: inputValue,
          onChange: inputHandler,
        }}
      />
      <button onClick={buttonClickHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
