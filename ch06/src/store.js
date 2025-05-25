import { configureStore } from "@reduxjs/toolkit";
import counterReducer form "./slices/counterSlice";

export default configureStore({
    reducer:{
        counter:counterReducer,
    }
})
