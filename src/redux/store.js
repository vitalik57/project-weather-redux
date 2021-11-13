import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./weather/weahterReducsr";
export const store = configureStore({
  reducer: productsReducer
});
