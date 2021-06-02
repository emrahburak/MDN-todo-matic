import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import AddItem from '../AddItem'
import Filter from '../Filter'
import Todo from '../Todo'

const mapState = (state) => ({
    todos: state.todos.stack
})


function Stack() {
    const { todos } = useSelector(mapState);

    useEffect(() => {
        // 

    }, [todos])

    return (
        <div className="todoapp stack-large">
            <h1>Todo Matic</h1>
            <AddItem />
            <Filter />
            <h2 id="list-heading">
                {todos.length} tasks remaining
            </h2>
            <ul>
                {
                    todos.map((todo, pos) => (
                        <Todo key={pos} name={todo} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Stack
