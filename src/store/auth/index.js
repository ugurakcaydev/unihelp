import { createSlice } from "@reduxjs/toolkit";

// Kullanıcı bilgilerini localStorage'dan alıyoruz
const savedAccount = JSON.parse(localStorage.getItem("currentAccount")) || {};

const initialState = {
  currentAccount: savedAccount,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _login: (state, action) => {
      state.currentAccount = action.payload;
      localStorage.setItem("currentAccount", JSON.stringify(action.payload)); // Login olduğunda localStorage'a kaydediyoruz
    },
    _logout: (state) => {
      state.currentAccount = {};
      localStorage.removeItem("currentAccount"); // Logout olduğunda localStorage'dan siliyoruz
    },
  },
});

export const { _login, _logout } = auth.actions;

export default auth.reducer;
