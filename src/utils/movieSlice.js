import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    topRatedMovies:null,
    upComingMovies:null,
    trailerVideo: null
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTrailer : (state, action) => {
      state.trailerVideo = action.payload;
    }
  },
});

export const { addMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;
