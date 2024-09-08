import { createSlice } from "@reduxjs/toolkit";

const appLanguageSlice = createSlice({
  name: "lang",
  initialState: {
    appLang: "en",
  },
  reducers: {
    updateLanguage: (state, action) => {
      state.appLang = action.payload;
    },
  },
});

export const { updateLanguage } = appLanguageSlice.actions;
export default appLanguageSlice.reducer;
