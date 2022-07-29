import React, { useContext } from "react";
import Food from "./Food";
import Card from "../UI/Card";
import styles from "./FoodsList.module.css";
import CartContext from "../../store/cart-context";

const FoodsList = (props) => {
  const ctx = useContext(CartContext);
  const foods = ctx.foods;

  let contents = foods.map((food) => <Food key={food.id} food={food} />);

  return (
    <Card className={styles.foodsList}>
      <ul>{contents}</ul>
    </Card>
  );
};

export default FoodsList;
