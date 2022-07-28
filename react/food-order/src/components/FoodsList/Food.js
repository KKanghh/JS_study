import React from "react";

import Button from "../UI/Button";
import styles from "./Food.module.css";

const Food = (props) => {
  return (
    <li className={styles.food}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.detail}</div>
        <div>$ {props.price}</div>
      </div>
      <form className="control">
        <div>
          <label>Amount: </label>
          <input type="number" />
        </div>
        <div>
          <Button
            onClick={() => {
              console.log("Add to cart");
            }}
            type="submit"
          >
            + Add
          </Button>
        </div>
      </form>
    </li>
  );
};

export default Food;
