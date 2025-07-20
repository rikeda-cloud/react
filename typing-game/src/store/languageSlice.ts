"use client";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Languages = "ja" | "en";

interface LanguageState {
  selected: Languages;
}

const initialState: LanguageState = {
  selected: "ja",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Languages>) => {
      state.selected = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
