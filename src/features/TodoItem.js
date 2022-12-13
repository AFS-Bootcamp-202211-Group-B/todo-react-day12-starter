import { useDispatch } from "react-redux/es/exports";
import { changeToggle, deleteItem } from "./listSlice";
import "./display.css"

export default function TodoItem(props) {
  const {todo} = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeToggle(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteItem(todo.id));

  }
  return (
    <div className="todoItem" >
      <span className={todo.done ? "line" : ""} onClick={handleClick}> {todo.text}</span>
      <button className="Xbutton" onClick={handleDelete}>X</button>
      
    </div>
  );
}
