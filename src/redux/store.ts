import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./reducer/searchBar-slice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});
