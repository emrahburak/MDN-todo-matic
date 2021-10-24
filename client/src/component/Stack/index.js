import React from "react";
import Filter from "../Filter";
import WrapIt from "../InputTodo";


function Stack() {
  return (
    <div className="todoapp stack-large">
      <h1>Todo Magic</h1>
      <WrapIt/>
      <Filter />
    </div>
  );
}

export default Stack;
