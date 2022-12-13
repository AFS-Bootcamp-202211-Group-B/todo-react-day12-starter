import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { addTodo } from "./listSlice";

export default function TodoGenerator(props) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setTodo(event.target.value);
  };
  
  const onAdd = () => {
    setTodo("");
    dispatch(addTodo(todo));
  };
  
  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} />
      <button onClick={onAdd}>add</button>
    </div>
  );
}
