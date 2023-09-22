import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import booksSlice from "./slices/booksSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
    books: booksSlice,
  },
});
