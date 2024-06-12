import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import * as productAction from "./product-action";

const product = createReducer([], {
  [productAction.getProduct]: (__, action) => action.payload,
});

export default combineReducers({
  product,
});
