import {todoTypes} from './todo.types'


export const addTodo = todo => ({
    type:todoTypes.ADD_TODO,
    payload: todo
})
