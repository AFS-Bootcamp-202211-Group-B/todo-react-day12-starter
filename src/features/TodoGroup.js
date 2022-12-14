import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoGroup() {
    const todos = useSelector((state) => state.todo.todos);
    return todos.map((todo) => {
        return (
            <TodoItem
                key={todo.id}
                id={todo.id}
                todo={todo.text}
                done={todo.done ? "true" : "false"}
            />
        );
    });
}
