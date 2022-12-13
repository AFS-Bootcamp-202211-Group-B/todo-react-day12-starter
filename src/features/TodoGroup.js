import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux'


export default function TodoGroup(props) {
  const todoList = useSelector((state) => state.todoList)

  return todoList.map((todo, index) => {
    return <TodoItem 
              key={todo.id} 
              todo={todo} 
            />;
  });
}
