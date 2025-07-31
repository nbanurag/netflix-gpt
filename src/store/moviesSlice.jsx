import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = MoviesSlice.actions;
export const getNowPlayingMovies = (state) => state.movies?.nowPlayingMovies;
export const getTrailerVideo = (state) => state.movies?.trailerVideo;
export default MoviesSlice.reducer;
