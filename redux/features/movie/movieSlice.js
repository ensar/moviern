import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../../services/api";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

export const fetchMovies = createAsyncThunk("/movie/getAll", getMovies);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default movieSlice.reducer;
