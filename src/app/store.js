import {configureStore} from "@reduxjs/toolkit"
import todoListReduceer from "../features/todoSlice"

export const store = configureStore({
    reducer:{
        todoList: todoListReduceer
    }
})
