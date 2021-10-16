import {todoTypes} from './todo.types'
import {uri} from './todo.helper'
const axios = require('axios');


export const fetchTodosRequest = () => ({
    type: todoTypes.FETCH_TODOS_REQUEST
})


export const fetchTodosSuccess = todos => ({
    type: todoTypes.FETCH_TODOS_SUCCESS,
    payload: todos
})

export const fetchTodosFailure = error => ({
    type: todoTypes.FETCH_TODOS_FAILURE,
    payload: error
})

export const addTodoSuccess = todo => ({
    type: todoTypes.ADD_TODO_SUCCESS,
    payload: todo
})

export const updateTodoSuccess = todo => ({
    type: todoTypes.UPDATE_TODO_SUCCES,
    payload: todo
})

export const deleteTodoSuccess = todo => ({
    type: todoTypes.DELETE_TODO_SUCCESS,
    payload: todo
})


export const fetchTodos = () => async dispatch => {
    dispatch(fetchTodosRequest)
        await axios.get(uri)
        .then( res => {
            const todos = res.data;
            dispatch(fetchTodosSuccess(todos))
        })
        .catch( err =>{
            dispatch(fetchTodosFailure(err.message))
        } )
}


export const addTodo = (todo) => async dispatch => {
        await axios.post(uri, {
            title:todo.title,
            isActive: false
        })
        .then(res => {
            const todo = res.data;
            dispatch(addTodoSuccess(todo));
        } )
        .catch(err => {
            dispatch(fetchTodosFailure(err.message))
        })
}

export const deleteTodo = (todo) => async dispatch => {
    await axios.delete(uri+`/${todo.id}`,todo)
    .then(res => {
        dispatch(deleteTodoSuccess(todo));
    } )
    .catch(err => {
        dispatch(fetchTodosFailure(err.message))
    })
}

export const updateTodo = (todo) => async dispatch => {
    await axios.put(uri+`/${todo.id}`,todo)
    .then(res => {
        dispatch(updateTodoSuccess(todo))
    })
    .catch(err => {
        dispatch(fetchTodosFailure(err.message))
    })
}