import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
