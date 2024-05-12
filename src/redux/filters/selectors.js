export const selectNameFilter = (state) => {
  // console.log("state:");
  // console.log(state);
  // console.log(state.filters);
  // console.log(state.filters.name);
  // console.log("==============");
  return state.filters.name;
};

export const selectGenreFilter = (state) => {
  return state.filters.genre;
};

export const selectYearFilter = (state) => {
  return state.filters.year;
};

export const selectSortingFilter = (state) => {
  return state.filters.sorting;
};