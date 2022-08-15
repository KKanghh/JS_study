import React, { useState } from "react";

const CartContext = React.createContext({
  foods: [],
  cart: [],
  addCart: () => {},
  minusCart: () => {},
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const foods = [
    {
      id: 1,
      name: "Sushi",
      detail: "Finest fish and veggies",
      price: "22.99",
    },
    {
      id: 2,
      name: "Schnitzel",
      detail: "A german specialty!",
      price: "16.50",
    },
  ];

  const addFoodHandler = (food, num) => {
    console.log(num);
    setCart((prevCart) => {
      if (prevCart.find((cartFood) => cartFood.id === food.id)) {
        prevCart.find((cartFood) => cartFood.id === food.id).count += num;
        return [...prevCart];
      }
      food.count = num;
      return [...prevCart, food];
    });
  };

  const deleteFoodHandler = (food) => {
    setCart((prevCart) => {
      return prevCart.filter((cartFood) => cartFood.id !== food.id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        foods: foods,
        cart: cart,
        addCart: addFoodHandler,
        minusCart: deleteFoodHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
