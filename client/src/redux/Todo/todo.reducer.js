import { todoTypes } from "./todo.types";

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
    case todoTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.stack,action.payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
