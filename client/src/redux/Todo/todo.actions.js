import {todoTypes} from './todo.types'
import {uri} from './todo.helper'
const axios = require('axios');


export const fetchTodosAction = todos => ({
    type: todoTypes.FETCH_TODOS,
    payload: todos
});



export const addTodoAction = todo => ({
    type: todoTypes.ADD_TODO,
    payload: todo
});

export const editTodoAction = todo => ({
    type:todoTypes.EDIT_TODO,
    payload:todo
});

export const updateTodoAction = todo => ({
    type: todoTypes.UPDATE_TODO,
    payload: todo
});

export const deleteTodoAction = todo => ({
    type:todoTypes.DELETE_TODO,
    payload: todo
});

export const setDisplayAction = display => ({
    type: todoTypes.SET_DISPLAY,
    payload: display
});

export const setModeAction = mode =>  ({
    type: todoTypes.SET_MODE,
    payload: mode
});

export const setMutationAction = (id) => ({
    type: todoTypes.SET_MUTATION,
    payload:id
});



export const fetchTodos = () => async dispatch => {
        await axios.get(uri)
        .then( res => {
            const todos = res.data;
            dispatch(fetchTodosAction(todos))
        })
        .catch( err =>{
            console.log(err.message)
        } )
}


export const addTodo = (todo) => async dispatch => {
        await axios.post(uri, {
            title:todo.title,
            isActive: false
        })
        .then(res => {
            const todo = res.data;
            dispatch(addTodoAction(todo));
        } )
        .catch(err => {
            console.log(err.message)
        })
}

export const deleteTodo = (todo) => async dispatch => {
    await axios.delete(uri+`/${todo.id}`,todo)
    .then(res => {
        dispatch(deleteTodoAction(todo));
    } )
    .catch(err => {
        console.log(err.message);
    })
}

export const updateTodo = (todo) => async dispatch => {
    // debugger;
    await axios.put(uri+`/${todo.id}`,{
        id: todo.id,
        title: todo.title,
        isActive: todo.isActive
    })
    .then(res => {
        dispatch(updateTodoAction(todo),setMutationAction());
    })
    .catch(err => {
        console.log(err.message);
    })
}