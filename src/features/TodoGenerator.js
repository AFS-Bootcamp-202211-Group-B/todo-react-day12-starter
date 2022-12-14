import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from './itemSlice';
import './TodoGenerator.css';

export default function TodoGenerator(props) {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setTodo(event.target.value);
  };

  const onAdd = () => {
    //props.addTodo(todo);
    dispatch(addItem(todo));
    setTodo("");
  };

  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} placeholder="input a new todo here..."/>
      <button onClick={onAdd}>add</button>
    </div>
  );
}
