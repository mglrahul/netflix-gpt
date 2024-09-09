import { createSlice } from "@reduxjs/toolkit";

const searchGptSlice = createSlice({
  name: "searchGPT",
  initialState: {
    enableSearchGPT: false,
    searchMoviesResults: null,
    searchMovieNames: null
  },
  reducers: {
    toggleSearchGPT: (state) => {
      state.enableSearchGPT = !state.enableSearchGPT;
    },
    addSearchMovies: (state, action) => {
      const {movieNames, movieResults} = action.payload
      state.searchMoviesResults = movieResults;
      state.searchMovieNames = movieNames;
    }
  },
});

export const { toggleSearchGPT, addSearchMovies } = searchGptSlice.actions;
export default searchGptSlice.reducer;
