import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={AddUserHandler}>
        <label>Username</label>
        <input type="text" />
        <label>Age</label>
        <input type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
