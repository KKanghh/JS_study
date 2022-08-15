import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserage = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserage.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onNewUser({
      name: enteredName,
      age: enteredUserage,
      id: Math.random().toString(),
    });

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const validHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <ErrorModal error={error} onClick={validHandler} />}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
