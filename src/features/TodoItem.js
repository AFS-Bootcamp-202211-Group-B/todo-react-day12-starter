import React from "react";
import { useDispatch } from "react-redux";
import { toggleItem,deleteItem } from './itemSlice';
import { useState } from 'react';
import './Todoitem.css';

export default function TodoItem(props) {

  const dispatch = useDispatch();
  const {todo} = props;

  const [btnState, setBtnState] = useState("");

  const toggleItemClick =  () =>{

    if(btnState === ""){
      setBtnState("toggle");
    }
    else{
      setBtnState("");
    }

    //console.log(todo);
    dispatch(toggleItem(todo));


  };

  const crossItemClick =  () =>{

    dispatch(deleteItem(todo));

  };

  return ( 
      <div className={btnState} onClick={ toggleItemClick } id="css" > 
          {todo.text} 
          <span onClick={crossItemClick} className="cross">
          </span>
      </div>
  );
}
