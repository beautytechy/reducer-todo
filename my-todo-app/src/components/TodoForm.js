import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [todoInput, setTodo] = useState('');


    const handleChanges = (e) => {
        setTodo(e.target.value);
    };
       
// const submitTodo = (e) => {
//     e.preventDefault();
//     dispatch({ type: 'ADD_NEW_TODO', payload: todo })
// };

const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput);
}
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={todoInput}
                name='goal'
                onChange={handleChanges}
            />
            <button type="submit">Add To List</button>
        </form>
    )
}
export default TodoForm