import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularMovies } from "../../API";

// console.log("========= operations popular:");

export const fetchMovies = createAsyncThunk(
  "movies/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await getPopularMovies();
      console.log("========= operations popular:");
      console.log(response.data);
      console.log("=========");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// console.log("========= operations popular:");
