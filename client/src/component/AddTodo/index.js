import React,{useState} from 'react'
import  {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../../redux/Todo/todo.actions'

const mapState = (state) => ({
    todosData: state.todosData
})
const initialState = {
    title:''
};

function AddItem() {

    const {todosData} = useSelector(mapState);
    const [todo, setTodo] = useState(initialState);
    const { todos} = todosData;

    const dispatch = useDispatch();


    const handleAdded = (e)=> {
        e.preventDefault()
        dispatch(
            addTodo(todo)
        );
        setTodo(initialState);
    }

    return (
        <div>
             <form>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done ?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={todo.title}
                    onChange={e => setTodo({ title:e.target.value})}
                />
                <button
                 type="submit"
                  className="btn btn__primary btn__lg"
                  onClick={handleAdded}
                  >
                    Add
                </button>
            </form>

        </div>
    )
}

export default AddItem
