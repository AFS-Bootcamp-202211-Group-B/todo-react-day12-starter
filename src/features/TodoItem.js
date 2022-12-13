import React from "react";
import { updateTodo } from './TodoSlice';
import { useDispatch } from 'react-redux';

export default function TodoItem(props) {
  const dispatch = useDispatch();
  const toggle = () => {
    // props.addTodo(todo);
    dispatch(updateTodo(props.todo.id))
  };
  return <div onClick={toggle}>{props.todo.text}</div>;
  // return <ToggleSwitch label={props.todo} />;
  
}
