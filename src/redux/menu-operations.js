import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenu = createAsyncThunk(
  "menu/menuFetch",

  async () => {
    const list = axios
      .get("https://forrest-server.herokuapp.com/")
      .then((response) => response.data);

    return list;
  }
);
