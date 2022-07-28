import React from "react";
import Button from "../UI/Button";
import styles from "./Header.module.css";

const Header = () => {
  const cartClickHandler = (event) => {
    console.log("cart");
  };

  return (
    <div className={styles.header}>
      <h1>Food Order</h1>
      <Button onClick={cartClickHandler}>Your Cart</Button>
    </div>
  );
};

export default Header;
