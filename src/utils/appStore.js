import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchGPTReducer from "./searchGptSlice";
import appLanguageReducer from "./appLanguageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: searchGPTReducer,
    lang: appLanguageReducer,
  },
});

export default appStore;
