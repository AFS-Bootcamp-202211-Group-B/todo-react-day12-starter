import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { addToDo } from "./todoListSlice";


export default function TodoList() {
  // const [todos, setTodos] = useState([]);
  // const todos = useSelector((state) => state.todoList);

  const addTodo = (todo) => {
    // setTodos([...todos, todo]);
    
    // dispatch(addToDo());
  };

  return (
    <div>
      <TodoGroup />
      <TodoGenerator addTodo={addToDo} />
    </div>
  );
}
