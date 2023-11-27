import {  createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:"counter",
  initialState:{count:0},
  reducers:{
    increment (state,action){
      return {count:state.count+1};
    },
    decrement(state,action){
       return {count:state.count-1};
    }
  }
})

// we have to return the action 
// this way to export is know as named export 

export const  {increment,decrement} = counterSlice.actions;

// we have to export the our reducer that use in the store 
export default counterSlice.reducer;