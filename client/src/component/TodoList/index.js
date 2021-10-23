import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchTodos} from '../../redux/Todo/todo.actions'
import Todo from '../Todo'



const mapState = (state) => ({
  todosData: state.todosData,
});


const TodoList = () => {
    const {todosData} = useSelector(mapState);
    const { display, todos } = todosData;
    const len = todos.length;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchTodos());
    }, [display,len])


    return(
        <div>
        { len === 0 ?(
            <p>Lets create some todo.. Again</p>
        ):(
            <div>
            <h2 id="list-heading">{len} tasks remaining</h2>
                <ul>
                    {
                        todos.map((todo,pos) => (
                            <li key={pos}><Todo todo={todo}/></li>
                     ))
                     }
                </ul>
                </div>
                )}
        </div>
    )
}

export default TodoList;