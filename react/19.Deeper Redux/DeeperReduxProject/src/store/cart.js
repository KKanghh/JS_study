import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalAmount: 0, cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cart.findIndex((e) => e.id === action.payload.id);
      console.log(itemIndex);
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
    sub(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
