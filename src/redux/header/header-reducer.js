import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import * as headerAction from "./header-action";

const value = createReducer(false, {
  [headerAction.getValue]: (__, action) => action.payload,
});

export default combineReducers({
  value,
});
