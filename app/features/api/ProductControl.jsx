import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'http://localhost:3000/';
export const ProductControl = createApi({
    reducerPath: "Product",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ['productData', "productID", "brand", "categories"],
    endpoints: (builder) => ({
        productGet: builder.query({
            query: (data) => ({
                url: `api/v1/product/?type=${data}`,
            }),
            invalidatesTags: ['productData'],
        }),
        productID: builder.query({
            query: (id) => ({
                url: `api/v1/product/?id=${id}`,
            }),
            invalidatesTags: ['productID'],
        }),
        brand: builder.query({
            query: () => ({
                url: `api/v1/product/barnd`,
            }),
            invalidatesTags: ['brand'],
        }),

        cateGor: builder.query({
            query: () => ({
                url: "api/v1/product/categories"
            })
        })




    })
})
export const { useProductGetQuery, useProductIDQuery, useBrandQuery, useCateGorQuery } = ProductControl;