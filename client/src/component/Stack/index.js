import React  from "react";
import AddTodo from "../AddTodo";
import Filter from "../Filter";


function Stack() {

  return (
    <div className="todoapp stack-large">
      <h1>Todo Magic</h1>
      <AddTodo />
      <Filter/>
          </div>
  );
}

export default Stack;
