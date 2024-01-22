"use client";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../redux/store';

export const ApiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)?.example?.the_token_from_state;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    fetchProducts: builder.query<any, void>({
      query: () => '/products',
    }),

    // New endpoints
    getAllProducts: builder.query<any, void>({
      query: () => '/products/all',
    }),

    getSingleProduct: builder.query<any, any>({
      query: (productId) => `/products/${productId}`,
    }),

    searchProducts: builder.query<any, string>({
      query: (searchTerm) => `/products/search?term=${searchTerm}`,
    }),

    limitAndSkipProducts: builder.query<any, { limit: number; skip: number }>({
      query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
    }),

    getAllCategories: builder.query<any, void>({
      query: () => '/products/categories',
    }),

    getProductsOfCategory: builder.query<any, string>({
      query: (category) => `/products/category/${category}`,
    }),

    addProduct: builder.mutation<any, any>({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation<any, any>({
      query: ({ productId, updatedProduct }) => ({
        url: `/products/${productId}`,
        method: 'PUT',
        body: updatedProduct,
      }),
    }),

    deleteProduct: builder.mutation<any, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useFetchProductsQuery,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useSearchProductsQuery,
  useLimitAndSkipProductsQuery,
  useGetAllCategoriesQuery,
  useGetProductsOfCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = ApiService;
