import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'https://e-commerce-rangpur.vercel.app/';
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
            query: (modal) => ({
                url: `api/v1/product/?model=${modal}`,
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