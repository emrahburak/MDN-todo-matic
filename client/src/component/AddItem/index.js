import React,{useState} from 'react'

function AddItem() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [id, setId] = useState(0);


    const handleChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const handleAdded = ()=> {
        setTodos(todos => [...todos,{text:input, id:id}]);
        setInput('');
        setId(id + 1);
        console.log(todos);
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
                    onChange={handleChange}
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
