import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "a@gmail.com",
  password: "123",
  isValid: false,
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(action) {
      const newData = action.payload;
    },
    showSpinner(state) {
      state.isValid = !state.isValid;
    },
  },
});

export const uiActions = cartSlice.actions;
export default cartSlice;
