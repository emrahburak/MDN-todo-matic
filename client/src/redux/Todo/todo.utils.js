export const handleRemoveTodo = ({
    prevTodos,
    todoToRemove
}) => {
    return prevTodos.filter( todo => todo.id !== todoToRemove.id);
};
