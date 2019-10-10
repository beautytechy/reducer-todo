import React, { useReducer } from "react";
import {initialState, reducer} from "../reducers/Reducer";

const Todo = ({ item, id, completed, toggleTodo }) => {

// const[state, dispatch] = useReducer(reducer, initialState);
//const [data, setData] = useState(initial state)
   

    return (
        <div
            className={`item${completed ? ' completed' : ''}`}
            // onClick={() => toggleTodo(state.id)}
        >
            <p>{item}</p>
        </div>
    );
};

export default Todo;
