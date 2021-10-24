const existingTodo = (prevTodos, newTodo) => {
  return prevTodos.find((todo) => todo.id === newTodo.id) ? true : null;
};

export const handleAddTodo = ({ prevTodos, newTodo }) => {
  const exist = existingTodo(prevTodos, newTodo);
  if (exist === null) {
    return [...prevTodos, newTodo];
  }
};

export const handleFilterTodo = ({ todos, display }) => {
  if (display != null) {
    return todos.filter((todo) => todo.isActive === display);
  }
  return [...todos];
};

export const handleRemoveTodo = ({ prevTodos, todoToRemove }) => {
  const exist = existingTodo(prevTodos, todoToRemove);
  return exist
    ? prevTodos.filter((todo) => todo.id !== todoToRemove.id)
    : [...prevTodos];
};

export const handleUpdateTodo = ({ prevTodos, newTodo }) => {
  return prevTodos.reduce((acc, item) => {
    if (item.id === newTodo.id) {
      item = newTodo;
    }
    return [...acc, item];
  }, []);
};
