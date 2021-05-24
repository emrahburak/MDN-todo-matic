import React from 'react'
import AddItem from '../AddItem'
import Filter from '../Filter'
import Todo from '../Todo'


function Stack() {
    return (
        <div className="todoapp stack-large">
            <h1>Todo Matic</h1>
            <AddItem/>
            <Filter />
            <Todo name={"Eat"}/>
            <Todo name={"Sytem Clean"}/>
        </div>
    )
}

export default Stack
