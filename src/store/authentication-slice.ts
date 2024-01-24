import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loggedInHandler(state) {
      state.isAuthenticated = true;
    },
    loggedOutHandler(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authenticationAction = authenticationSlice.actions;
export default authenticationSlice;
