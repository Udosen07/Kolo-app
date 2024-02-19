import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amountIn: 0,
    amountOut: 0
}

const finSlice = createSlice({
    name: "fin",
    initialState,
    reducers:{
        updateAmountIn: (state, action) => {
            state.amountIn += action.payload;
        },
        updateAmountOut: (state, action) => {
            state.amountOut += action.payload;
        },
        clearAll: (state) => {
            state.amountIn = 0;
            state.amountOut = 0;
        }
    }
})


export const { updateAmountIn, updateAmountOut, clearAll } = finSlice.actions;
export default finSlice.reducer;
