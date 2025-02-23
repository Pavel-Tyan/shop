import { configureStore } from "@reduxjs/toolkit";
import { searchParamsReducer } from "./slices/searchParamSlice";
import { categoryApi } from "./api/categoryApi";
import { productApi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    searchParams: searchParamsReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
