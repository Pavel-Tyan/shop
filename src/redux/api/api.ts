import { Category, CategoryDto, Product, ProductDto } from "@/api/@types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BASE_URL_PREFIX,
  CATEGORY_URL_PREFIX,
  PRODUCT_URL_PREFIX,
} from "./constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_PREFIX }),
  tagTypes: ["Category", "Product"],
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => CATEGORY_URL_PREFIX,
      providesTags: ["Category"],
    }),
    getCategoryById: builder.query<Category, number>({
      query: (id) => `${CATEGORY_URL_PREFIX}/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Category", id }],
    }),
    postCategory: builder.mutation<Category, CategoryDto>({
      query: (body) => ({
        url: CATEGORY_URL_PREFIX,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<Category, { id: number; body: Category }>({
      query: ({ id, body }) => ({
        url: `${CATEGORY_URL_PREFIX}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Category", "Product"],
    }),
    deleteCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `${CATEGORY_URL_PREFIX}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category", "Product"],
    }),

    getProducts: builder.query<Product[], { limit: number; offset: number }>({
      query: ({ limit, offset }) =>
        `${PRODUCT_URL_PREFIX}?limit=${limit}&offset=${offset}`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `${PRODUCT_URL_PREFIX}/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
    postProduct: builder.mutation<ProductDto, ProductDto>({
      query: (body) => ({
        url: PRODUCT_URL_PREFIX,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<
      ProductDto,
      { id: number; body: ProductDto }
    >({
      query: ({ id, body }) => ({
        url: `${PRODUCT_URL_PREFIX}/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `${PRODUCT_URL_PREFIX}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  usePostCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,

  useGetProductsQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = api;
