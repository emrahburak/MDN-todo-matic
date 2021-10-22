import { todoTypes } from "./todo.types";
import {handleRemoveTodo, handleUpdateTodo,handleFilterTodo} from './todo.utils'

const INITIAL_STATE = {
  display:false,
  todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoTypes.FETCH_TODOS:
      return {
        ...state,
        todos:handleFilterTodo({
          todos: action.payload,
          display: state.display
        })
      };
    case todoTypes.ADD_TODO:
      return {
        ...state,
        loading: false,
        todos: [...state.todos,action.payload], //handle filter if not exists
        error: ''
      }
    case todoTypes.UPDATE_TODO:
      return {
        ...state,
        loading: false,
        todos: handleUpdateTodo({
          prevTodo:state.todos,
          newTodo:action.payload
        }),
        error:''

      }
    case todoTypes.DELETE_TODO:
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
