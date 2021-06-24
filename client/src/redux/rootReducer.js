import {combineReducers} from 'redux'
import todoReducer from './Todo/todo.reducer'



const rootReducer = combineReducers({
    todosData: todoReducer
})

export  default rootReducer;