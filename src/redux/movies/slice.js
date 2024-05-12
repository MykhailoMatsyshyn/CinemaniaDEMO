import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./operations";
import { getUpcomingMovies } from "../../API";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchMoviess = async () => {
  try {
    // setLoading(true);
    const data = await getUpcomingMovies();
    // console.log(data);
    return data;
  } catch (error) {
    // setError(true);
  } finally {
    // setLoading(false);
  }
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: fetchMoviess,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, handlePending)
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, handleRejected);
  },
});

export default moviesSlice.reducer;
