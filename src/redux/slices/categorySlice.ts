import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  name: string;
}

interface CategoryListState {
  categoryList: Category[];
}

const initialState: CategoryListState = {
  categoryList: [
    { name: "Еда" },
    { name: "Канцелярия" },
    { name: "Еда1" },
    { name: "Еда2" },
    { name: "Еда3" },
    { name: "Еда4" },
    { name: "Еда5" },
  ],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    deleteCategory: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      const index = state.categoryList.findIndex(
        (category) => category.name === name
      );

      if (index === -1) {
        return;
      }

      state.categoryList.splice(index, 1);
    },

    addCategory: (state, action: PayloadAction<string>) => {
      for (const category of state.categoryList) {
        if (category.name === action.payload) {
          return;
        }
      }

      state.categoryList.push({ name: action.payload });
    },

    updateCategory: (
      state,
      action: PayloadAction<{ category: Category; newName: string }>
    ) => {
      const { category, newName } = action.payload;

      const index = state.categoryList.findIndex(
        (current) => current.name === category.name
      );

      state.categoryList[index].name = newName;
    },
  },
});

export const { reducer: categoryReducer, actions: categoryActions } =
  categorySlice;
