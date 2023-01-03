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
            query: ({ pathName }) => ({
                url: `api/v1/product/${pathName}/${pathName}`,
                method: 'GET',
            }),
            providesTags: ['product'],
        })
    })
})
export const { useGetProductMutation } = product