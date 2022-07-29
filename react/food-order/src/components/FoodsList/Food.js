import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import Button from "../UI/Button";
import styles from "./Food.module.css";

const Food = (props) => {
  const [amount, setAmount] = useState("1");
  const ctx = useContext(CartContext);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const addCartHandler = (event) => {
    event.preventDefault();
    ctx.addCart(props.food, parseInt(amount));
    console.log(`${props.food.name} ${amount}개`);
  };

  return (
    <li className={styles.food}>
      <div>
        <h3>{props.food.name}</h3>
        <div>{props.food.detail}</div>
        <div>$ {props.food.price}</div>
      </div>
      <form className="control" onSubmit={addCartHandler}>
        <div>
          <label>Amount: </label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
        <div>
          <Button type="submit">+ Add</Button>
        </div>
      </form>
    </li>
  );
};

export default Food;
