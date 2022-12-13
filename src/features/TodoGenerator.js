import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./todoListSlice";

export default function TodoGenerator(props) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const onInputChange = (event) => {
    setTodo(event.target.value);
  };
  const onAdd = () => {
    // props.addTodo(todo);
    dispatch(addToDo(todo));
    setTodo("");
  };
  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} />
      <button onClick={onAdd}>add</button>
    </div>
  );
}
