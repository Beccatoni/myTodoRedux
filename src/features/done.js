import { createSlice } from "@reduxjs/toolkit"

const doneSlice = createSlice({
    name: 'isDone',
    initialState: {isDone:false},
    reducers: {
      checkIsDone:(state)=>  {
           state.isDone = !state.isDone
      }
    }
  })
  
  
  export const {checkIsDone} = doneSlice.actions
  export default  doneSlice.reducer