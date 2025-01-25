import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Category {
  name: string;
}

interface CategoryListState {
  categoryList: Category[];
}

const initialState: CategoryListState = {
  categoryList: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    deleteCategoryByName: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      const index = state.categoryList.findIndex(
        (category) => category.name === name
      );

      if (index === -1) {
        return;
      }

      state.categoryList.splice(index, 1);
    },

    addCategoryByName: (state, action: PayloadAction<string>) => {
      for (const category of state.categoryList) {
        if (category.name === action.payload) {
          return;
        }
      }

      state.categoryList.push({ name: action.payload });
    },
  },
});

export const { reducer: categoryReducer, actions: categoryActions } =
  categorySlice;
