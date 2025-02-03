import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "@/redux/slices/categorySlice";
import { productReducer } from "@redux/slices/productSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
