import { Category, CategoryDto } from "@/api/@types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_PREFIX } from "./constants";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_PREFIX + "/categories" }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "",
      providesTags: ["Category"],
    }),
    getCategoryById: builder.query<Category, number>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Category", id }],
    }),
    postCategory: builder.mutation<Category, CategoryDto>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<Category, { id: number; body: Category }>({
      query: ({ id, body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  usePostCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
