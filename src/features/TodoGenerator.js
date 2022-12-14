import React, { useState } from "react";
import { addTodo } from './TodoSlice';
import { useDispatch } from 'react-redux';

export default function TodoGenerator() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

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
