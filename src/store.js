import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "./reducers";

const store = configureStore({
    reducer : {
        counter: containerSlice,
    }
})

export default store;