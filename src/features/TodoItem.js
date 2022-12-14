import React, { useState } from "react";
import { toggleTodo, removeTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

export default function TodoItem(props) {
    const dispatch = useDispatch();
    const [itemClass, setItemClass] = useState("");
    const onClickItem = () => {
        if (itemClass === "") {
            setItemClass("done");
        } else {
            setItemClass("");
        }
        dispatch(toggleTodo(props.id));
    };
    const onClickCross = () => {
        dispatch(removeTodo(props.id));
    };
    return (
        <div className="todoList">
            <span className={itemClass} onClick={onClickItem}>
                {props.todo}
            </span>
            <span onClick={onClickCross} className="cross">
                &#10006;
            </span>
        </div>
    );
}
