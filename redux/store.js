import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movie/movieSlice";
import watchlistReducer from "./features/movie/watchlistSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    watchlist: watchlistReducer,
  },
});
