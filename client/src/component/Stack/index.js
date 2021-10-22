import React, {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "../AddTodo";
import Filter from "../Filter";
import Todo from "../Todo";
import { fetchTodos,setDisplayAction } from "../../redux/Todo/todo.actions";

const mapState = (state) => ({
  todosData: state.todosData,
});

function Stack() {
  //todos
  const { todosData } = useSelector(mapState);
  const [display, setDisplay] = useState(todosData.display);
  const dispatch = useDispatch();
  const {  todos } = todosData;

  const handleSetDisplay = status =>{
    setDisplay(status);
    setDisplayAction(status)
  }


  useEffect(() => {
    dispatch(fetchTodos());
    console.log(display);

  }, [display,todos.length]);

  return (
    <div className="todoapp stack-large">
      <h1>Todo Matic</h1>
      <AddTodo />
      {
        todos.length >= 0 && (<Filter handleSetDisplay={handleSetDisplay}/>)
      }
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
