import { createSlice } from '@reduxjs/toolkit'
import { counterIncrement } from './../'

const initialState = {
    count: 0,
}

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: counterIncrement,
        decrement: (state) => { state.count -= 1 },
        incrementByAmount: (state, action) => { state.count += action.payload },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counter.actions
export const counterReducer = counter.reducer