import React from "react";
import Food from "./Food";
import Card from "../UI/Card";
import styles from "./FoodsList.module.css";

const FoodsList = (props) => {
  const foods = [
    {
      name: "Sushi",
      detail: "Finest fish and veggies",
      price: 22.99,
    },
  ];

  let contents = foods.map((food) => (
    <Food name={food.name} detail={food.detail} price={food.price} />
  ));

  return (
    <Card className={styles.foodsList}>
      <ul>{contents}</ul>
    </Card>
  );
};

export default FoodsList;
