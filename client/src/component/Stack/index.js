import React, {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "../AddTodo";
import Filter from "../Filter";
import Todo from "../Todo";
import { fetchTodos } from "../../redux/Todo/todo.actions";

const mapState = (state) => ({
  todosData: state.todosData,
});

function Stack() {
  //todos
  const { todosData } = useSelector(mapState);
  const dispatch = useDispatch();
  const { loading, todos } = todosData;


  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return loading ? (
    <h2>Loading</h2>
  ) : todosData.error ? (
    <h2>{todosData.error}</h2>
  ) : (
    <div className="todoapp stack-large">
      <h1>Todo Matic</h1>
      <AddTodo />
      <Filter />
      <h2 id="list-heading">{todos.length} tasks remaining</h2>
      <ul>
        {todos.map((todo, pos) => (
          <Todo key={pos} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Stack;
