import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlists: [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    add: (state, action) => {
      state.watchlists.push(action.payload);
    },
    remove: (state, action) => {
      state.watchlists = state.watchlists.filter(
        (movie) => movie.id != action.payload
      );
    },
  },
});

export default watchlistSlice.reducer;
export const { add, remove } = watchlistSlice.actions;
