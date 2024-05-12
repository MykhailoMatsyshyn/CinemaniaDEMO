import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectLoading = (state) => state.movies.loading;
export const selectError = (state) => state.movies.error;

export const selectMovies = (state) => state.movies.items;

// export const selectFilteredMovies = createSelector(
//   [selectMovies, selectNameFilter],
//   (items, filters) => {
//     return items.filter((item) => item.name.toLowerCase().includes(filters));
//   }
// );
