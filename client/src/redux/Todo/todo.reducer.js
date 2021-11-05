import { todoTypes } from "./todo.types";
import {handleRemoveTodo,handleFilterTodo, handleUpdateTodo, handleAddTodo} from './todo.utils'

const INITIAL_STATE = {
  display:null,
  todos: [],
  editMode:false,
  todo:{title:""}
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
        todos: handleAddTodo({
          prevTodos:state.todos,
          newTodo:action.payload
        }), //handle filter if not exists
      }
    case todoTypes.EDIT_TODO:
      return {
        ...state,
        todo:{...action.payload}
      }
    case todoTypes.UPDATE_TODO:
      return {
        ...state,
        todos: handleUpdateTodo({
          prevTodos:state.todos,
          newTodo:action.payload
        }),
        error:''

      }
    case todoTypes.DELETE_TODO:
      return {
        ...state,
        todos: handleRemoveTodo({
          prevTodos:state.todos,
          todoToRemove: action.payload
        }),
        error: ''
      }
    case todoTypes.SET_DISPLAY:
      return{
        ...state,
        display: action.payload
      }
    case todoTypes.SET_MODE:
      return{
        ...state,
        editMode:action.payload
      }
    default:
      return state;
  }
};

export default todoReducer;
