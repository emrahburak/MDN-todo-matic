import { todoTypes } from "./todo.types";

const INITIAL_STATE = {
  stack: [
    { id: 1, title: "eat" },
    { id: 2, title: "winter" },
    { id: 3, title: "toraman" },
  ],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return {
        ...state,
        stack: [...state.stack,action.payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
