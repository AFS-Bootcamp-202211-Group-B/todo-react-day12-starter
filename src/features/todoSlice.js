import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState: [
        {
            id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
            text: "todo example",
            done: false
        },
        {
            id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
            text: "first todo item",
            done: false
        }
    ]
    ,
    reducers: {

    }

})

export default todoSlice.reducer;
// export const { updateSize, updateSum, resetSum } = counterSlice.actions