/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },

  reducers: {
    setBooksData(state, action) {
      state.books = action.payload;
    },
    clearBooksData(state) {
      state.books = [];
    },
    getMoreBooks(state, action) {
      state.books = [...state.books, ...action.payload];
    },
  },
});

export const { setBooksData, clearBooksData, getMoreBooks } =
  booksSlice.actions;
export default booksSlice.reducer;
