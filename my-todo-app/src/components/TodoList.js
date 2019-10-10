import React from "react";
import Todo from "./Todo";

const TodoList = ({goals, toggleTodo}) => {
  
    return (
      <div className="list">
        {goals.map((item) => {
          return(
              <Todo key={item.id} {...item} toggleTodo={toggleTodo} />
             
          )})}
             
       
      </div>
    );
  };
  
  export default TodoList;