import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import menuReducer from "./menu-reducer";
import headerReducer from "./header/header-reducer";
import productReducer from "./product/product-reducer";

const reducer = combineReducers({
  // service: menuReducer,
  header: headerReducer,
  product: productReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
