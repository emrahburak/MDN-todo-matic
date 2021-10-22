import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import {setDisplayAction} from '../../redux/Todo/todo.actions'

function Filter({handleSetDisplay}) {
    const [status, setStatus] = useState("");


    useEffect(() => {

    },[status])


  const handleOnClick = (e) => {
    e.preventDefault();
    switch(e.target.name){
        case  "all":
            handleSetDisplay(null);
            setStatus(null);
            break;
        case  "complated":
            handleSetDisplay(true);
            setStatus(true);
            break
        default:
            handleSetDisplay(false);
            setStatus(false);
    }
    // console.log(e.target.name);
  };

  return (
    <div>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          name="all"
          className="btn toggle-btn"
          aria-pressed="false"
          onClick={handleOnClick}
        >
          All
        </button>
        <button
          type="button"
          name="active"
          className="btn toggle-btn"
          aria-pressed="false"
          onClick={handleOnClick}
        >
          Active
        </button>
        <button
          type="button"
          name="complated"
          className="btn toggle-btn"
          aria-pressed="false"
          onClick={handleOnClick}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Filter;
