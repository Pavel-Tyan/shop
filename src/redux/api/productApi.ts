import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductDto } from "@/api/@types/api";
import { Product } from "@/api/@types/api";
import { BASE_URL_PREFIX } from "./constants";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_PREFIX + "/products" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { limit: number; offset: number }>({
      query: ({ limit, offset }) => `?limit=${limit}&offset=${offset}`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
    postProduct: builder.mutation<ProductDto, ProductDto>({
      query: (body) => ({
        url: "",
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
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
