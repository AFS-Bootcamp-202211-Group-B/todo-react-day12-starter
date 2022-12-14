import React, { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

export default function TodoList() {
  const [todos, setTodos] = useState([]);



  return (
    <div>
      <TodoGroup todos={todos} />
      <TodoGenerator/>
    </div>
  );
}
