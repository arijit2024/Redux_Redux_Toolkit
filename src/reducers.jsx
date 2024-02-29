import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : 0,
}

export const containerSlice = createSlice({
  name : "counter",
  initialState,
  reducers:{
    add: (state) => {
      state.value +=1
    },
    sub: (state) => {
      state.value -=1
    },
    add50 : (state,action) => {
      state.value +=action.payload;
    }
  }
})

export const {add, sub, add50} = containerSlice.actions ;
export default containerSlice.reducer;