import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplayAction } from "../../redux/Todo/todo.actions";
import TodoList from "../TodoList";



function Filter() {
  const [display, setDisplay] = useState(null);
  const initialButtonAttrs = ["all","active","complated"];
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setDisplayAction(display));
  }, [display]);


  const handleOnClick = (e) => {
    // console.log(display);
    e.preventDefault();
    const elementId = e.target.getAttribute("id");
    initialButtonAttrs.map(item => {
      if(item === elementId){
        document.getElementById(elementId).setAttribute("aria-pressed","true")
      }else{
        document.getElementById(item).setAttribute("aria-pressed","false")
      }
    })
    };

  return (
    <div>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          id="all"
          name="all"
          className="btn toggle-btn"
          onClick={e=> {setDisplay(prev => null) ;handleOnClick(e)}}
        >
          All
        </button>
        <button
          type="button"
          name="active"
          id="active"
          className="btn toggle-btn"
          onClick={(e)=>{setDisplay(prev => false);handleOnClick(e)}}
        >
          Active
        </button>
        <button
          type="button"
          name="complated"
          id="complated"
          className="btn toggle-btn"
          onClick={(e)=>{setDisplay(prev => true);handleOnClick(e)}}
        >
          Completed
        </button>
      </div>
      <TodoList/>
    </div>
  );
}

export default Filter;
