/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    error: false,
    isLoading: false,
    isLoadingButton: false,
  },

  reducers: {
    setBooksPending(state) {
      state.isLoading = true;
    },
    setBooksSuccess(state, action) {
      state.isLoading = false;
      state.books = action.payload;
    },
    setBooksFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
    clearBooksData(state) {
      state.books = [];
    },
    getMoreBooksPending(state) {
      state.isLoadingButton = true;
    },
    getMoreBooksSuccess(state, action) {
      state.isLoadingButton = false;
      state.books = [...state.books, ...action.payload];
    },
  },
});

export const {
  setBooksPending,
  setBooksSuccess,
  setBooksFailure,
  clearBooksData,
  getMoreBooksPending,
  getMoreBooksSuccess,
} = booksSlice.actions;
export default booksSlice.reducer;
