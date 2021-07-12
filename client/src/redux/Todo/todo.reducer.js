import { todoTypes } from "./todo.types";
import {handleRemoveTodo} from './todo.utils'

const INITIAL_STATE = {
  loading: false,
  todos: [],
  error: ''
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoTypes.FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case todoTypes.FETCH_TODOS_SUCCESS:
      return{
        ...state,
        loading: false,
        todos: action.payload,
        error: ''
      }
    case todoTypes.FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload
      }
    case todoTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos,action.payload],
        error: ''
      }
    case todoTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: handleRemoveTodo({
          prevTodos:state.todos,
          todoToRemove: action.payload
        }),
        error: ''
      }
    default:
      return state;
  }
};

export default todoReducer;
