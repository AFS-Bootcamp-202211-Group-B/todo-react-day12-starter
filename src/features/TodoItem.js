import React from "react";
import { useDispatch } from "react-redux";
import { changeDone } from "./todoListSlice";
import {deleteToDo} from "./todoListSlice";
import "./TodoItem.css"
export default function TodoItem(props) {
const dispatch = useDispatch();
const classes = ` text ${props.todo.done?"line":""}`;
  return <div className="box">
    <span onClick={() => {dispatch(changeDone(props.todo.id))}} 
  className={classes}>{props.todo.text}</span><span className="close-button" onClick={() => dispatch(deleteToDo(props.todo.id))}>&times;</span>
  </div>;
}
