import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    onTheAir: null,
    airingToday: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    }
  }
});

export const {
  addNowPlaying,
  addTrailer,
  addPopular,
  addUpcoming,
  addOnTheAir,
  addAiringToday,
  addTopRated
} = movieSlice.actions;

export default movieSlice.reducer;
