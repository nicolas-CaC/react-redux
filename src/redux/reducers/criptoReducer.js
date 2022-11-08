import { createSlice } from '@reduxjs/toolkit'
import { criptoStartLoading, criptoGetPrice, criptoGetService, criptoSetCrypto } from '../'

const initialState = {
    crypt: 'bitcoin',
    loading: false,
    state: null,
    price: 0
}

export const cripto = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        startLoading: criptoStartLoading,
        stateService: criptoGetService,
        setCrypto: criptoSetCrypto,
        getPrice: criptoGetPrice,
    },
})

export const { startLoading, stateService, setCrypto, getPrice } = cripto.actions
export const criptoReducer = cripto.reducer
