import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'http://localhost:3000/';
// const URL = 'https://e-commerce-rangpur.vercel.app/';
export const ProductControl = createApi({
    reducerPath: "Product",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ['ProductData', "ProductID", "Brand", "Categories", "Admin"],
    endpoints: (builder) => ({
        productGet: builder.query({
            query: (filterInfo) => ({
                url: `api/v1/product/?type=${filterInfo?.pathName}&brand=${filterInfo?.brand ? filterInfo?.brand : ''}&page=${filterInfo?.page}&limit=${filterInfo?.limit}`,
            }),
            providesTags: ['ProductData'],
        }),
        productID: builder.query({
            query: (modal) => ({
                url: `api/v1/product/?model=${modal}`,
            }),
            providesTags: ['ProductID'],
        }),

        brandProduct: builder.query({
            query: (BrandInfo) => ({
                url: `api/v1/product/brandProduct/?brand=${BrandInfo?.brand}`//type=${BrandInfo?.type}&
            })
        }),
        /*  search product  */
        searchProduct: builder.query({
            query: (data) => ({
                url: `api/v1/product/search?filter=${data}`
            })
        }),
        /* ==================== admin Product control =======================*/
        adminProductAdd: builder.mutation({
            query: (data) => ({
                url: `api/v1/product/addProduct`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Admin'],
        }),
        adminGetProduct: builder.query({
            query: (data) => ({
                url: `api/v1/admin/?type=${data}`
            }),
            providesTags: ['Admin'],
        }),
        adminProductUpdate: builder.mutation({
            query: (data) => ({
                url: `api/v1/admin/addProductUpdate`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Admin'],
        }),
        adminDeletePost: builder.mutation({
            query: (id) => ({
                url: `api/v1/admin/adminproductdelete/?type=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Admin'],
        }),
        /* ==================== admin Product categories  =======================*/
        categoriesPost: builder.mutation({
            query: (data) => ({
                url: `api/v1/admin/categories/postCategories`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Categories'],
        }),

        cateGor: builder.query({
            query: () => ({
                url: "api/v1/admin/categories"
            }),
            providesTags: ['Categories'],
        }),
        categoriesUpdate: builder.mutation({
            query: (data) => ({
                url: `api/v1/admin/categories/update`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Categories'],
        }),
        categoriesDelete: builder.mutation({
            query: (data) => ({
                url: `api/v1/admin/categories/delete`,
                method: "DELETE",
                body: data
            }),
            invalidatesTags: ['Categories'],
        }),
        /* ==================== admin Product Bramd  =======================*/
        brand: builder.query({
            query: () => ({
                url: `api/v1/admin/brand`,//get data
            }),
            providesTags: ['Brand'],
        }),
        brandPost:builder.mutation({
            query: (data) => ({
                url: `api/v1/admin/brand/postBrand`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Brand'],
        }),
        brandUpdate: builder.mutation({
            query: (data) => ({
                url: `api/v1/admin/brand/update`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['Brand'],
        }),
        BrandDelete: builder.mutation({
            query: (data) => ({
                url: `api/v1/admin/brand/delete`,
                method: "DELETE",
                body: data
            }),
            invalidatesTags: ['Brand'],
        }),



    })
})
export const { useProductGetQuery, useProductIDQuery, useBrandQuery, useCateGorQuery, useBrandProductQuery, useSearchProductQuery, useAdminGetProductQuery, useAdminDeletePostMutation, useAdminProductAddMutation, useAdminProductUpdateMutation, useCategoriesPostMutation, useCategoriesUpdateMutation, useCategoriesDeleteMutation,useBrandPostMutation,useBrandUpdateMutation,useBrandDeleteMutation} = ProductControl;