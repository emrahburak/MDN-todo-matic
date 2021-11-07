import React, { useState, useRef, useEffect } from "react";
import {useSelector} from 'react-redux'
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addTodo, editTodoAction,updateTodo,setModeAction } from "../../redux/Todo/todo.actions";

const initialState = {
  title: "",
};

const mapState = (state) => ({
  todo: state.todosData.todo
});


function InputTodo({ editMode }) {
  const {todo} = useSelector(mapState);
  const [item, setItem] = useState(initialState);
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    searchInput.current.focus();
    setItem(todo);
  }, [todo]);

  const afterEdit = () => {
    dispatch(updateTodo(item));
    dispatch(setModeAction(!editMode));
  }

  const handleClick = e => {
    e.preventDefault();
    if(item !== ''){
      !editMode ? dispatch(addTodo(item)) : afterEdit();
    }
    dispatch(editTodoAction(initialState));
  }
 

  const configButton = {
    type: "submit",
  };

  return (
    <div>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done ?
          </label>
        </h2>
        <input
          type="text"
          ref={searchInput}
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={item.title}
          onChange={(e) => setItem({ ...todo,title: e.target.value })}
          required
        />
        <Button appearance={!editMode?"add":"edit"} {...configButton} onClick={handleClick}>
          {!editMode? (<p>Add</p>): (<p>Edit</p>)}
        </Button>
      </form>
    </div>
  );
}

export default InputTodo;

