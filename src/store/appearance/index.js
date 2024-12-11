import { createSlice } from "@reduxjs/toolkit";

import { useSelector } from "react-redux";
const initialState = {
  //DEFAULT
  backgroundColor: {
    name: "white",
    primary: "#fff",
    secondary: "#f9f9f9", //Hover
    third: "#eff3f4", //Hover
  },
  color: {
    primary: "#1d9bf0",
    secondary: "#8ecdf8",
    base: "#0f1419",
    baseSecondary: "#536471",
  },
};

const appearance = createSlice({
  name: "appearance",
  initialState,
});

export const useAppearance = () => useSelector((state) => state.appearance);
export default appearance.reducer;
