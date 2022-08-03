import React from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span>
        <CartIcon className={styles.icon} />
      </span>
      <span>{props.children}</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
