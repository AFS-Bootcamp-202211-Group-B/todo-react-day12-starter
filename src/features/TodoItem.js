import React from "react";
import { useDispatch } from "react-redux";
import { changeDone } from "./todoListSlice";
import {deleteToDo} from "./todoListSlice";
import "./TodoItem.css"
export default function TodoItem(props) {
const dispatch = useDispatch();
const classes = ` cursorchange ${props.todo.done?"line":""}`;
  return <div onClick={() => {dispatch(changeDone(props.todo.id))}} 
  className={classes}>
    {props.todo.text}<button className="close-button" aria-label="Close alert" type="button"><span className="clickcursor" aria-hidden="true" onClick={() => dispatch(deleteToDo(props.todo.id))}>&times;</span></button>

  </div>;
}
