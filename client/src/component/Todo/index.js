import React, { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import {deleteTodo,updateTodo} from '../../redux/Todo/todo.actions';
import Modal from "../Modal";



function Todo({ todo }) {
  const dispatch = useDispatch();
  const [todoState, setTodoState] = useState(todo.isActive);

    useEffect(() =>{
      console.log("Hello");
      return () => {

      }
    },[todoState])

  const handleEditTodo = todo => {
    console.log(todo);
  }
  const handleDeleteTodo = (e) => {
    e.preventDefault();
    console.log("Delete todu Running",todo)
    dispatch(
      deleteTodo(todo)
    );
  };

  const handleCheckBox = () => {
    console.log(todoState)
    setTodoState(!todoState);
    console.log(todoState)
    const newTodo = {...todo,isActive:todoState}
    console.log(newTodo);
  }

  return (
    <div>

      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={todoState} 
              onClick={ handleCheckBox} />
            <label className="todo-label" htmlFor="todo-0">
              {todo.title}
            </label>
          </div>
          <div className="btn-group">
            <button type="button"
             className="btn"
             onClick={() => handleEditTodo(todo)}
             >
              Edit
            </button>
            <button
              type="button"
              className="btn btn__danger"
              onClick={handleDeleteTodo}
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Todo;
