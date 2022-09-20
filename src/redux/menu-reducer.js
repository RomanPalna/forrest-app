import { createSlice } from "@reduxjs/toolkit";
import { fetchMenu } from "./menu-operations";

const initialState = {
  menu: [],
};

const slice = createSlice({
  initialState,
  name: "Service",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      const menu = action.payload;

      state.menu = menu;
    });
  },
});

export default slice.reducer;
