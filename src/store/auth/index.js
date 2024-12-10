import { createSlice } from "@reduxjs/toolkit";
import { mockAccounts } from "../../mock/users";

const initialState = {
  currentAccount: null, // Giriş yapılmadığında null olacak.
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload; // Kullanıcıyı giriş yaptıktan sonra atar.
    },
    _logout: (state) => {
      state.currentAccount = null; // Çıkış yapıldığında null yapar.
    },
  },
});

export const { _setCurrentAccount, _logout } = auth.actions;
export default auth.reducer;

// Mock hesapları dışa aktarma
export const accounts = mockAccounts;
