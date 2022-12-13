import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoGroup(props) {
  console.log(props.todos);
  const todos = useSelector((state) => state.TodoList);
  return todos.map((todo, index) => {
  
    return <TodoItem key={index} todo={todo.text} />;
  });
}