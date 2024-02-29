import { configureStore } from "@reduxjs/toolkit";
import customReducers from "./reducers";

const store = configureStore({
    reducer : {
        custom: customReducers,
    }
})

export default store;