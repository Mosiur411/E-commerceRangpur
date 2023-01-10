import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const URL = 'http://localhost:3000/';
const URL = 'https://e-commerce-rangpur.vercel.app/';
export const ProductControl = createApi({
    reducerPath: "Product",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ['productData', "productID", "brand", "categories"],
    endpoints: (builder) => ({
        productGet: builder.query({
            query: (filterInfo) => ({
                url: `api/v1/product/?type=${filterInfo?.pathName}&brand=${filterInfo?.brand ? filterInfo?.brand : ''}&page=${filterInfo?.page}&limit=${filterInfo?.limit}`,
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
        }),
        brandProduct: builder.query({
            query: (BrandInfo) => ({
                url: `api/v1/product/brandProduct/?type=${BrandInfo?.type}&brand=${BrandInfo?.brand}`
            })
        })




    })
})
export const { useProductGetQuery, useProductIDQuery, useBrandQuery, useCateGorQuery,useBrandProductQuery } = ProductControl;