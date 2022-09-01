import { createSlice } from "@reduxjs/toolkit";
import { toggleCartActions } from "./toggleCart";
const initialState = { totalAmount: 0, cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
      if (state.cart[itemIndex].amount > 1) state.cart[itemIndex].amount--;
      else state.cart.splice(itemIndex, 1);
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleCartActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-10f07-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        toggleCartActions.showNotification({
          status: "success",
          title: "success",
          message: "sending cart data",
        })
      );
    } catch (err) {}
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
