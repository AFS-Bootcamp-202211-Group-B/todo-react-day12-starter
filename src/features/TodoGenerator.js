import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTodo } from "./todoSlice";

export default function TodoGenerator(props) {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState("");
  const onInputChange = (event) => {
    setTodo(event.target.value);
  };
  const onAdd = () => {
    dispatch(addTodo(todo))
    setTodo("");
  };
  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} />
      <button onClick={onAdd}>add</button>
    </div>
  );
}
