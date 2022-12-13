import {createSlice} from "@reduxjs/toolkit";


const todoListSlice = createSlice({

    name: "todoList",
    initialState:[{
            id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
            text: "todo example",
            done: false 
        }],

    reducers: {
        addToDo:(state,action) => {
            const todo = {
                id: Date.now(),
                text: action.payload,
                done: false
            }
            state.push(todo);
        }
    },
});

export const {addToDo} = todoListSlice.actions;



export default todoListSlice.reducer;

//size change
// increase and decrease
