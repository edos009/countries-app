import { createSlice } from "@reduxjs/toolkit";

import CONSTANTS from "../constants";

const { THEMES } = CONSTANTS;

const themesSlice = createSlice({
  name: "themes",
  initialState: { themes: THEMES.DARK },
  reducers: {
    setTheme(state, action) {
      state.themes = state.themes === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    },
  },
});

export const { setTheme } = themesSlice.actions;
export default themesSlice.reducer;
