import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMovies: (state, action) => {
      const { movieResults, movieNames } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptSearchMovies } = gptSlice.actions;
export const getGptSearchMode = (state) => state.gpt?.showGptSearch;
export const getGptSearchMovies = (state) => ({
  movieResults: state.gpt?.movieResults,
  movieNames: state.gpt?.movieNames,
});

export default gptSlice.reducer;
