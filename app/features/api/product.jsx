import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'http://localhost:3000/';
export const product = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getProduct: builder.mutation({
            query: ({ pathName, brand, page, limit }) => ({
                url: `api/v1/product/${pathName}/${pathName}/?brand=${brand}&page=${page}&limit=${limit}`,
                method: 'GET',
            }),
            providesTags: ['product'],
        })
    })
})
export const { useGetProductMutation } = product