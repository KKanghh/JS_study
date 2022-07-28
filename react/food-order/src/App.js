import React from "react";

import Header from "./components/Header/Header";
import "./App.css";
import Something from "./components/Main/Something";
import FoodsList from "./components/FoodsList/FoodsList";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Something></Something>
      <FoodsList></FoodsList>
    </React.Fragment>
  );
}

export default App;
