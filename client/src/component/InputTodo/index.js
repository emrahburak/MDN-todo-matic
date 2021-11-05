import React, { useState, useRef, useEffect } from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addTodo, editTodoAction } from "../../redux/Todo/todo.actions";

const initialState = {
  title: "",
};


function InputTodo({ editMode }) {
  const [item, setItem] = useState(initialState);
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  // const { editMode, handleEditMode, handleNormalMode } = props;

  useEffect(() => {
    searchInput.current.focus();
  }, []);


  const handleClick = e => {
    e.preventDefault();
    if(item !== ''){
      !editMode ? console.log(item) : console.log(item);
    }

  }
 

  const confiButton = {
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
          value={todo.title}
          onChange={(e) => setTodo({ title: e.target.value })}
          required
        />
        <Button appearance={editMode} {...confiButton} onClick={handleClick}>
          {!editMode? (<p>Add</p>): (<p>Edit</p>)}
        </Button>
      </form>
    </div>
  );
}

export default InputTodo;

