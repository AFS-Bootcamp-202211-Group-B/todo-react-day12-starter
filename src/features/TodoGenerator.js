import React, { useState } from "react";

export default function TodoGenerator(props) {
  const [todo, setTodo] = useState("");
  const onInputChange = (event) => {
    setTodo(event.target.value);
  };
  const onAdd = () => {
    props.addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={onInputChange} />
      <button onClick={onAdd}>add</button>
    </div>
  );
}
