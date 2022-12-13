import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            // console.log(action.payload);
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                done: false,
            });
            // console.log(current(state.todos));
        },
        toggleTodo: (state, action) => {
            // console.log(action.payload);
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload
            );
            if (index !== -1) {
                state.todos[index].done = !state.todos[index].done;
            }
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload
            );
            if (index !== -1) {
                state.todos.splice(index, 1);
            }
        },
    },
});
export default todoSlice.reducer;
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
