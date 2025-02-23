import { configureStore } from "@reduxjs/toolkit";
import { searchParamsReducer } from "./slices/searchParamSlice";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    searchParams: searchParamsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
