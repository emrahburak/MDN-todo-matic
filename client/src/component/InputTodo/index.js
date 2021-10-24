import React, { useState, useRef, useEffect } from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/Todo/todo.actions";

const initialState = {
  title: "",
};

const INITIAL_STATE = {
  button: "",
};

function InputTodo({ editMode }) {
  const [todo, setTodo] = useState(initialState);
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  // const { editMode, handleEditMode, handleNormalMode } = props;

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const handleAdded = (e) => {
    e.preventDefault();
    if(todo.title != ''){
        dispatch(addTodo(todo));
         setTodo(initialState);
    }
  };

  const confiButton = {
    type: "submit",
    className: "btn btn__primary btn__lg",
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
        <Button status={editMode} {...confiButton} onClick={handleAdded}>
            Add
        </Button>
      </form>
    </div>
  );
}

export default InputTodo;

// const WrapIt = WithMode(InputTodo);

// export default WrapIt;

//  <button
//                  type="submit"
//                   className="btn btn__primary btn__lg"
//                   onClick={handleAdded}
//                   >
//                       Add
//                 </button>
