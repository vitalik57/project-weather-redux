import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addNewCart, delateNewCart, detailCity, weatherChart } from "./weatherActionst";
const weatherReducer = createReducer([], {
  [addNewCart]: (state, { payload }) => [...state, payload],
  [delateNewCart]: (state, action) => state.filter(cartItem => cartItem.city.id !== action.payload)
});
const weatherChartReducer = createReducer(false, {
  [weatherChart]: state => !state
});
const cityReducer = createReducer([], {
  [detailCity]: (_, { payload }) => payload
});
export const productsReducer = combineReducers({
  showModal: weatherChartReducer,
  weather: weatherReducer,
  city: cityReducer
});
