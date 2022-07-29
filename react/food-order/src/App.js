import React from "react";

import Header from "./components/Header/Header";
import "./App.css";
import Introduce from "./components/Main/Introduce";
import FoodsList from "./components/FoodsList/FoodsList";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Introduce></Introduce>
      <FoodsList></FoodsList>
    </React.Fragment>
  );
}

export default App;
