import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: 'inputs',
    initialState: {inputs: {}},
    reducers: {
      setInput: (state, action) => {
        state.inputs = action.payload
      },
    }
})


export const {setInput} = inputSlice.actions
export default inputSlice.reducer