import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { HomeReducers } from "../reducers/HomeReducers";
import { LoadingReducers } from "../reducers/LoadingReducers";
const reducer = combineReducers({
  LoadingReducers,
  HomeReducers,
});
const store = configureStore({
  reducer,
});
export default store;
