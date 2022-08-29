import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isClicked: false,
};

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    click(state) {
      state.isClicked = !state.isClicked;
    },
  },
});

export const toggleCartActions = toggleCartSlice.actions;

export default toggleCartSlice.reducer;
