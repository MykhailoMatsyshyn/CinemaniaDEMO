import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    genre: "",
    year: "",
    sorting: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    changeGenre(state, action) {
      state.genre = action.payload !== "start" ? action.payload : "";
    },
    changeYear(state, action) {
      state.year = action.payload !== "start" ? action.payload : "";
    },
    changeSorting(state, action) {
      state.sorting = action.payload !== "start" ? action.payload : "";
    },
  },
});

export const { changeFilter, changeGenre, changeYear, changeSorting } =
  filtersSlice.actions;
export default filtersSlice.reducer;
