import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./AuthenticationSlice";
import HomePageData from "./HomepageSlice"

export const store = configureStore({
    reducer:{
        user:UserReducer,
        homepageData: HomePageData
    }
})