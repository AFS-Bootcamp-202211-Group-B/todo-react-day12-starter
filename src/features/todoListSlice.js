import {createSlice} from "@reduxjs/toolkit";


const todoListSlice = createSlice({

    name: "todoList",
    initialState:[{
            id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
            text: "todo example",
            done: false 
        }],

    reducers: {
        addToDo2:() =>{
            console.log("123")
        }
    },
});

export const {addToDo2} = todoListSlice.actions;



export default todoListSlice.reducer;

//size change
// increase and decrease
