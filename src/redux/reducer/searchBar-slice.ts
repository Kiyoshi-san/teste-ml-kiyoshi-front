import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateModel = {
  suggestionList: any[];
  activeOverlay: boolean;
};

const initialState = {
  suggestionList: [],
  activeOverlay: false,
};

const setSuggestionListMethod = (state: InitialStateModel, action: PayloadAction<any[]>) => {
  state.suggestionList = action.payload;
};

const setActiveOverlayMethod = (state: InitialStateModel, action: PayloadAction<boolean>) => {
  state.activeOverlay = action.payload;
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setSuggestionList: setSuggestionListMethod,
    setActiveOverlay: setActiveOverlayMethod,
  },
});

export const { setSuggestionList, setActiveOverlay } = searchBarSlice.actions;

export default searchBarSlice.reducer;
