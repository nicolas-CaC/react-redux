import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, criptoReducer } from '../'
// import { criptoReducer } from '../reducers/criptoReducer'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        criptos: criptoReducer
    },
})