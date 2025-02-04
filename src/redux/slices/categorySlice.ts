import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CategoryListState {
  categoryList: string[];
}

const initialState: CategoryListState = {
  categoryList: ["Еда", "Канцелярия", "Еда1", "Еда2", "Еда3", "Еда4", "Еда5"],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    deleteCategory: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      const index = state.categoryList.findIndex(
        (category) => category === name
      );

      if (index === -1) {
        return;
      }

      state.categoryList.splice(index, 1);
    },

    addCategory: (state, action: PayloadAction<string>) => {
      for (const category of state.categoryList) {
        if (category === action.payload) {
          return;
        }
      }

      state.categoryList.push(action.payload);
    },

    updateCategory: (
      state,
      action: PayloadAction<{ category: string; newName: string }>
    ) => {
      const { category, newName } = action.payload;

      const index = state.categoryList.findIndex(
        (current) => current === category
      );

      state.categoryList[index] = newName;
    },
  },
});

export const { reducer: categoryReducer, actions: categoryActions } =
  categorySlice;
