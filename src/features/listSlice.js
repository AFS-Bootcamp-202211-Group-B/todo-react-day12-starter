import {createSlice ,current } from '@reduxjs/toolkit'


const listSlice = createSlice({
    name: "todo",
    initialState: [
            {             
                id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
                
                text: "todo example",
                
                done: false,
                
            },
            {
                id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
                
                text: "first todo item",
                
                done: false,
                
            },           
        ],
    reducers: {     
 
        addTodo: (state , action) => {
            console.log(current(state));
            console.log("sumValue:",action.payload);
            state.push ({
                id: Date.now(),
                
                text: action.payload,
                
                done: false,

            });
        },
    },
});
export const { addTodo } = listSlice.actions;


export default listSlice.reducer;