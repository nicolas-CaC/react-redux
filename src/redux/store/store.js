import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, criptoReducer, apiJPHolder } from '../'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        criptos: criptoReducer,

        [apiJPHolder.reducerPath]: apiJPHolder.reducer
    },

    middleware: middleware => middleware().concat(apiJPHolder.middleware)
})