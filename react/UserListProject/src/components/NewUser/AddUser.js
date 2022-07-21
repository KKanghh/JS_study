import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (+enteredAge < 1) {
      setIsValid(false);
      return;
    }
    props.onNewUser({
      name: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    });
    setEnteredAge("");
    setEnteredUsername("");
  };

  const validHandler = () => {
    setIsValid(true);
  };

  let modal = "";

  if (!isValid) {
    modal = (
      <ErrorModal
        title="An error occured!"
        message="Something went wrong"
        onClick={validHandler}
      />
    );
  }

  return (
    <Wrapper>
      {modal}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
