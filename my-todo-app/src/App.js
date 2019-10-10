import React, { useReducer } from 'react';
import { initialState, reducer } from "./reducers/Reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App () {
  const [state, dispatch] = useReducer(reducer, initialState);

 const addTodo = todoName => {
    dispatch({ type: 'ADD_NEW_TODO', payload: todoName })
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1>My To Do App</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList {...state} />
    </div>
  );
}

export default App;
