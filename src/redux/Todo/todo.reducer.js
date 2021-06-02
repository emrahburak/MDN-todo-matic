import {todoTypes} from './todo.types'



const INITIAL_STATE = {
    stack : ["eat","sport"]
};

const todoReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case todoTypes.ADD_TODO:
            return{
                ...state,
                stack: action.payload
            }

        default:
            return state;
    }
}

export default todoReducer;