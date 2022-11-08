import { createSlice } from '@reduxjs/toolkit'
import { counterIncrement, counterDecrement, counterIncrementByAmount } from './../'

const initialState = {
    count: 0,
    timer: 0
}

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: counterIncrement,
        decrement: counterDecrement,
        incrementByAmount: counterIncrementByAmount,
    },
})

export const { increment, decrement, incrementByAmount } = counter.actions
export const counterReducer = counter.reducer