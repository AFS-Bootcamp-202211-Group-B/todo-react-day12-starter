import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/itemSlice";

const store = configureStore({
    reducer: {
        item: itemReducer,
    },
});

export default store;
