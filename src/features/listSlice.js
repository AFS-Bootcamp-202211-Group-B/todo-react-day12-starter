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
            state.push ({
                id: Date.now(),                
                text: action.payload,
                done: false,

            });
        },
    
        changeToggle: (state, action) => {
            for ( let index = 0; index < state.length; index++){
                if(state[index].id == action.payload){
                    state[index].done = !state[index].done;
                }
            }
        },
        deleteItem: (state, action) => {
            return state.filter((todo) => todo.id != action.payload);
        }
    },
});
export const { addTodo,changeToggle,deleteItem } = listSlice.actions;


export default listSlice.reducer;