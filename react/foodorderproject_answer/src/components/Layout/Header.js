import React, { useState } from "react";
import mealsImage from "../../assets/meals.jpg";
import Cart from "../Cart/Cart";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const cartClickHandler = () => {
    setIsCartClicked(true);
  };

  const deleteModal = () => {
    setIsCartClicked(false);
  };

  return (
    <React.Fragment>
      {isCartClicked && <Cart onClick={deleteModal} />}
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={cartClickHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
