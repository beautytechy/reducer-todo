import React from "react";
import "../../src/App.css"



const Todo = ({ item, id, completed, toggleTodo }) => {

// const[state, dispatch] = useReducer(reducer, initialState);
//const [data, setData] = useState(initial state)
   

    return (
        <div className={`item${completed ? ' completed' : ''}`} onClick={() => toggleTodo(id)}>
            <p>{item}</p>
        </div>
    );
};

export default Todo;
