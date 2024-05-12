// // actionTypes.js
// export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
// export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
// export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";
// export const SET_PAGE = "SET_PAGE";
// export const UPDATE_FILTERS = "UPDATE_FILTERS";

// import { getPopularMovies, getMovieSearch, getSearchForm } from "../API";

// import axios from "axios";
// // import {
// //   FETCH_MOVIES_REQUEST,
// //   FETCH_MOVIES_SUCCESS,
// //   FETCH_MOVIES_FAILURE,
// //   SET_PAGE,
// //   UPDATE_FILTERS,
// // } from "./actionTypes";

// export const fetchMovies = (filters = {}) => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_MOVIES_REQUEST });

//     try {
//       let response;

//       if (filters.query && !filters.genre) {
//         response = await getMovieSearch(filters.query);
//       } else if (filters.genre || filters.year || filters.sort) {
//         response = await getSearchForm(
//           filters.query,
//           filters.genre,
//           filters.year,
//           filters.sort
//         );
//       } else {
//         response = await getPopularMovies();
//       }

//       dispatch({
//         type: FETCH_MOVIES_SUCCESS,
//         payload: {
//           movies: response.data.results,
//           currentPage: response.data.page,
//           totalPages: response.data.total_pages,
//         },
//       });
//     } catch (error) {
//       dispatch({
//         type: FETCH_MOVIES_FAILURE,
//         payload: error.message,
//       });
//     }
//   };
// };