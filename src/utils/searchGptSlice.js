import { createSlice } from "@reduxjs/toolkit";

const searchGptSlice = createSlice({
  name: "searchGPT",
  initialState: {
    enableSearchGPT: false,
  },
  reducers: {
    toggleSearchGPT: (state) => {
      state.enableSearchGPT = !state.enableSearchGPT;
    },
  },
});

export const { toggleSearchGPT } = searchGptSlice.actions;
export default searchGptSlice.reducer;
