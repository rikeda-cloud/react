"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  selected: "ja" | "en";
}

const initialState: LanguageState = {
  selected: "ja",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"ja" | "en">) => {
      state.selected = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
