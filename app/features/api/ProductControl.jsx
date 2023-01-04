import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'http://localhost:3000/';
export const ProductControl = createApi({
    reducerPath: "Product",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ['productData'],
    endpoints: (builder) => ({
        productGet: builder.query({
            query: (data) => ({
                url: `api/v1/product/?type=${data}`,
            }),
            invalidatesTags: ['productData'],
        })
    })
})
export const { useProductGetQuery } = ProductControl;