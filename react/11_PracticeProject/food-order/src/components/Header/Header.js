import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import CartModal from "../UI/CartModal";
import styles from "./Header.module.css";

const Header = () => {
  const ctx = useContext(CartContext);

  const [cartButtonClicked, setCartButtonClicked] = useState(false);
  const [cartIn, setCartIn] = useState(0);

  useEffect(() => {
    let i = 0;
    ctx.cart.forEach((food) => {
      i += food.count;
    });
    setCartIn(i);
  }, [ctx.cart]);

  const cartClickHandler = (event) => {
    setCartButtonClicked(true);
  };

  const cartExitHandler = () => {
    setCartButtonClicked(false);
  };

  return (
    <div className={styles.header}>
      {cartButtonClicked && <CartModal onClick={cartExitHandler} />}
      <h1>Food Order</h1>
      <Button onClick={cartClickHandler}>
        Your Cart <span className={styles.badge}>{cartIn}</span>
      </Button>
    </div>
  );
};

export default Header;
