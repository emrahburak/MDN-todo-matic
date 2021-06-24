import {todoTypes} from './todo.types'
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

export const addTodo = todo => ({
    type:todoTypes.ADD_TODO,
    payload: todo
})





export const fetchTodos = () => async dispatch => {
    dispatch(fetchTodosRequest)
        await axios.get('http://localhost:3000/todos')
        .then( res => {
            const todos = res.data;
            dispatch(fetchTodosSuccess(todos))
        })
        .catch( e =>{
            dispatch(fetchTodosFailure(e.message))
        } )
}