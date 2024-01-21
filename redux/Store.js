import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./AuthenticationSlice";

export const store = configureStore({
    reducer:{
        user:UserReducer
    }
})