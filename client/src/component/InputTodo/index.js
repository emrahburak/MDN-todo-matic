import React,{useState,useRef,useEffect} from 'react'
import  {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/Todo/todo.actions'
import {UpdatedComponent,WithMode}  from "../WithMode"

const initialState = {
    title:''
};

function InputTodo({editMode}) {

    const [todo, setTodo] = useState(initialState);
    const searchInput = useRef(null);
    const dispatch = useDispatch();
    const [butttonName, setButtonName] = useState("");


    useEffect(() => {
        searchInput.current.focus();
        if(!editMode){
            setButtonName("Add");
        }else{
            setButtonName("Edit");
        }
    }, [editMode])


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
                    ref={searchInput}
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
                      {butttonName}
                </button>
            </form>

        </div>
    )
}

const WrapIt = WithMode(InputTodo);

export default WrapIt;
