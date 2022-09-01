import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClicked: false,
  notification: null,
};

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    click(state) {
      state.isClicked = !state.isClicked;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const toggleCartActions = toggleCartSlice.actions;

export default toggleCartSlice.reducer;
