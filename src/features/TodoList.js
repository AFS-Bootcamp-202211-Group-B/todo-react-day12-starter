import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { addToDo2 } from "./todoListSlice";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    
    dispatch(addToDo2());
  };

  return (
    <div>
      <TodoGroup todos={todos} />
      <TodoGenerator addTodo={addTodo} />
    </div>
  );
}
