import { configureStore } from '@reduxjs/toolkit'
import { product } from './features/api/product';

const store = configureStore({
    reducer: {
        [product.reducerPath]: product.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(product.middleware)

})
export default store;