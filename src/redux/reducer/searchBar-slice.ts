import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialStateModel = {
  suggestionList: any[];
  activeOverlay: boolean;
  breadCrumb: string[];
};

const initialState = {
  suggestionList: [],
  activeOverlay: false,
  breadCrumb: []
};

const setSuggestionListMethod = (state: InitialStateModel, action: PayloadAction<any[]>) => {
  state.suggestionList = action.payload;
};

const setActiveOverlayMethod = (state: InitialStateModel, action: PayloadAction<boolean>) => {
  state.activeOverlay = action.payload;
};

const setBreadCrumbListMethod = (state: InitialStateModel, action: PayloadAction<string[]>) => {
  state.breadCrumb = action.payload
}

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setSuggestionList: setSuggestionListMethod,
    setActiveOverlay: setActiveOverlayMethod,
    setBreadCrumbList: setBreadCrumbListMethod,
  },
});

export const { setSuggestionList, setActiveOverlay,setBreadCrumbList } = searchBarSlice.actions;

export default searchBarSlice.reducer;
