import { createSlice, current } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "item",
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
    ],
    reducers: {
        addItem: (state, action) => {
            state.push({
                "id": Date.now(),
                "text": action.payload,
                "done": false
            });
        },
        toggleItem: (state, action) => {
            const item = action.payload;
            const index = state.findIndex(element => element.id === item.id);
            if(index !== -1){
                state[index].done = !state[index].done;
            }
        },
        deleteItem: (state, action) => {
            const item = action.payload;
            const index = state.findIndex(element => element.id === item.id);
            if(index !== -1){
                state.splice(index, 1);            
            }
        }

    },

});

export const { addItem,toggleItem,deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
