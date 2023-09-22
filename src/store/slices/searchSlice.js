/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
    category: "",
    order: "",
  },

  reducers: {
    setSearchData(state, action) {
      state.search = action.payload.search;
      state.category =
        action.payload.category === "" ? "all" : action.payload.category;
      state.order =
        action.payload.order === "" ? "relevance" : action.payload.order;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;
