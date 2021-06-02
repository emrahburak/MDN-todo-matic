import React from 'react'

function Todo(props) {
    return (
        <div>
            <ul
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                <li className="todo stack-small">
                    <div className="c-cb">
                        <input id="todo-0" type="checkbox" defaultChecked={false} />
                        <label className="todo-label" htmlFor="todo-0">
                            {props.name}
                        </label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">
                            Edit <span className="visually-hidden">Eat</span>
                        </button>
                        <button type="button" className="btn btn__danger">
                            Delete <span className="visually-hidden">Eat</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Todo;
