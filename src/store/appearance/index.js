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
  boxShadow:
    "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
};

const appearance = createSlice({
  name: "appearance",
  initialState,
});

export const useAppearance = () => useSelector((state) => state.appearance);
export default appearance.reducer;
