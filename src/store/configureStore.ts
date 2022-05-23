import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./Reducer";

export default function(){

    return configureStore({
        reducer
    })
}


