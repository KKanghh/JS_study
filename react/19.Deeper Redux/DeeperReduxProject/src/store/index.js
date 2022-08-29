import { configureStore } from "@reduxjs/toolkit";
import toggleCartReducer from "./toggleCart";
import cartReducer from "./cart";

const store = configureStore({
  reducer: { toggleCart: toggleCartReducer, cart: cartReducer },
});

export default store;
