import React,{useEffect} from "react";
import { useDispatch } from 'react-redux'
import { toggleTodo } from "./todoSlice";

export default function TodoItem(props) {
  const dispatch = useDispatch()
  return <div 
            onClick={() => {
              dispatch(toggleTodo(props.todo.id))
            }}
            className={props.todo.done?"done":"notDone"}
          >
            {props.todo.text}
          </div>
}
