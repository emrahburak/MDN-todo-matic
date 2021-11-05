import React, { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import {deleteTodo,updateTodo,setModeAction,editTodoAction} from '../../redux/Todo/todo.actions';



function Todo({ todo }) {
  const dispatch = useDispatch();


  // useEffect(() => {
  //   console.log(todo.isActive);
  // }, [todo.isActive])


  const handleEditTodo = todo => {
    console.log(todo);
    dispatch(setModeAction(true));
    dispatch(editTodoAction(todo));
  }

  const handleDeleteTodo = (e) => {
    e.preventDefault();
    dispatch(
      deleteTodo(todo)
    );
  };

  const handleCheckBox = (e) => {
    const newTodo = {...todo,[e.target.name]:!todo.isActive}
    dispatch(updateTodo(newTodo));
  }

  return (
    <div>

      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" name="isActive" type="checkbox" checked={todo.isActive} 
              onChange={ handleCheckBox} />
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
