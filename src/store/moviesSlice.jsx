import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = MoviesSlice.actions;
export const getNowPlayingMovies = (state) => state.movies?.nowPlayingMovies;
export const getPopularMovies = (state) => state.movies?.popularMovies;
export const getUpcomingMovies = (state) => state.movies?.upcomingMovies;
export const getTopRatedMovies = (state) => state.movies?.topRatedMovies;
export const getTrailerVideo = (state) => state.movies?.trailerVideo;
export default MoviesSlice.reducer;
