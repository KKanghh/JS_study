import { createSlice } from "@reduxjs/toolkit";
const initialState = { totalAmount: 0, cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      console.log(action.payload);
      state.cart = action.payload.cart;
      state.totalAmount = action.payload.totalAmount;
    },
    add(state, action) {
      const itemIndex = state.cart.findIndex((e) => e.id === action.payload.id);
      if (itemIndex === -1) {
        state.cart.push({
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          amount: 1,
        });
      } else {
        state.cart[itemIndex].amount++;
      }
      state.totalAmount += action.payload.price;
    },
    sub(state, action) {
      const itemIndex = state.cart.findIndex((e) => e.id === action.payload.id);
      console.log(itemIndex);
      state.totalAmount -= state.cart[itemIndex].price;
      if (state.cart[itemIndex].amount > 1) state.cart[itemIndex].amount--;
      else state.cart.splice(itemIndex, 1);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
