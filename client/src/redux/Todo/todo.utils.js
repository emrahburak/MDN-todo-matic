const existingTodo = ({prevTodos, nextTodo}) => {
    return prevTodos.find(
        todo => todo.id === nextTodo.id
    );
};

export const handleRemoveTodo = ({
    prevTodos,
    todoToRemove
}) => {
    return prevTodos.filter( todo => todo.id !== todoToRemove.id);
};

 export const handleUpdateTodo =({
     prevTodos,
     newItem
 }) => {
     const todoExist = existingTodo(prevTodos,newItem);
     if(todoExist){
         return prevTodos.reduce((acc,item) => {
             if(item.id === newItem.id ){
                 item = newItem;
             }
             return [...acc,item];
         },[])
     }
     return;
 }