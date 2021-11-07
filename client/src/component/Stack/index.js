import React from "react";
import {useSelector} from 'react-redux';
import Filter from "../Filter";
import InputTodo from "../InputTodo";
import TodoList from "../TodoList";

const mapState = (state) => ({
  editMode: state.todosData.editMode
})

function Stack() {
  const {editMode} = useSelector(mapState);
  return (
    <div className="todoapp stack-large">
      <h1>Todo Magic</h1>
      <InputTodo editMode={editMode} />
      <Filter />
      <TodoList/>
    </div>
  );
}

export default Stack;
