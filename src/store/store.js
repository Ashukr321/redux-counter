import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from './counterSlice'
const store = configureStore({
    reducer:{
      counter :counterReducer,
    }
})
// we have to export  default 
export default store;
