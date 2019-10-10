import React, { useState } from "react";
import "../../src/App.css"

const TodoForm = ({ addTodo, clearCompleted }) => {
    const [todoInput, setTodo] = useState('');


    const handleChanges = (e) => {
        setTodo(e.target.value);
    };
       
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
            <button className="clear_completed" onClick={clearCompleted}>Clear Completed</button>
        </form>
    )
}
export default TodoForm