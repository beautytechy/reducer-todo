import React, { useReducer } from 'react';
import { initialState, reducer } from "./reducers/Reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "../src/App.css"


function App () {
  const [state, dispatch] = useReducer(reducer, initialState);

 const addTodo = todoName => {
    dispatch({ type: 'ADD_NEW_TODO', payload: todoName })
  };

  const toggleTodo = id => {
    dispatch({type: 'TOGGLE_TODO', payload: id});
  };

  const clearCompleted = id =>{
    dispatch({type: 'CLEAR_COMPLETED'})
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>My To Do App</h1>
      </header>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
      <TodoList {...state} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
