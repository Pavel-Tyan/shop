import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchParamsState {
  categoryFilter: string;
  searchValue: string;
}

const initialState: SearchParamsState = {
  categoryFilter: "",
  searchValue: "",
};

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    updateFilterCategory: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
    },

    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { reducer: searchParamsReducer, actions: searchParamsActions } =
  searchParamsSlice;
