import React, { useState, useReducer } from 'react';
import { initialState, reducer } from "./reducers/Reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
      <h1>My Todo App</h1>
      </header>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} />
    </div>
  );
}

export default App;
