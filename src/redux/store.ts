import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "@/redux/slices/categorySlice";
import { productReducer } from "@redux/slices/productSlice";
import { searchParamsReducer } from "./slices/searchParamSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    searchParams: searchParamsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
