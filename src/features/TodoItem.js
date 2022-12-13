import React from "react";
import { useDispatch } from 'react-redux'
import { toggleTodo } from "./todoSlice";

export default function TodoItem(props) {
  const dispatch = useDispatch()
  return <div 
          onClick={() => {
            dispatch(toggleTodo(props.todo.id))
          }}
          style={{"textDecorationLine":props.todo.done?"line-through":"null"}}
          >
    {props.todo.text}
  </div>;
}
