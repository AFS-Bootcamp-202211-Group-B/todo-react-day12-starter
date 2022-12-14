import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux';


export default function TodoGroup(props) {

    const item = useSelector((state) => {
      console.log("state" + state);
      return state.item;
    });

    console.log(item);

  return item.map((todo, index) => {
    return <TodoItem key={index} todo={todo}  />;
  });
}
