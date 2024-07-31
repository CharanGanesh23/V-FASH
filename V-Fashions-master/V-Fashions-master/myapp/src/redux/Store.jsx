import { configureStore } from '@reduxjs/toolkit'
import vReducer from "./vfashSlice"


export const store = configureStore({
  reducer: {vReducer},
})

