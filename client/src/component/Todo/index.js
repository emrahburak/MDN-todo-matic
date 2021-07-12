import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteTodo} from '../../redux/Todo/todo.actions';
import Modal from '../Modal'

function Todo({ todo }) {
  const [hideModal, setHideModal] = useState(true)
  const dispatch = useDispatch();

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  }



  const handleDeleteTodo = (e) => {
    e.preventDefault();
    console.log("Delete todu Running",todo)
    dispatch(
      deleteTodo(todo)
    );
  };

  return (
    <div>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-0">
              {todo.title}
            </label>
          </div>
          <div className="btn-group">
            <button type="button"
             className="btn"
             onClick={() => toggleModal()}
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
            {toggleModal && console.log(toggleModal)}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Todo;
