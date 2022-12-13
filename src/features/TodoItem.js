import React,{useEffect} from "react";
import { useDispatch } from 'react-redux'
import { toggleTodo,deleteTodo} from "./todoSlice";

export default function TodoItem(props) {
  const dispatch = useDispatch()
  return <div 
            onClick={() => {
              dispatch(toggleTodo(props.todo.id))
            }}
            className={props.todo.done?"done":"notDone"}
          >
            {props.todo.text}
            <span onClick={()=>dispatch(deleteTodo(props.todo.id))}>&times;</span>
          </div>
}
