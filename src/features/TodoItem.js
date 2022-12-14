import React from "react";
import { updateTodo, deleteToDo } from './TodoSlice';
import { useDispatch } from 'react-redux';
import "../App.css";

export default function TodoItem(props) {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(updateTodo(props.todo.id))
  };
  const deleteItem = () => {
    dispatch(deleteToDo(props.todo.id))
  };
  return <div>
            <span  className={props.todo.done ? "doneTodo" : ""} onClick={toggle}>{props.todo.text}</span>
            
            <span><button onClick={deleteItem}>&times;</button></span>
      </div>;
}
