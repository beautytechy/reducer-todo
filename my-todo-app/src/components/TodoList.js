import React from "react";
import Todo from "./Todo";

const TodoList = ({goals}) => {
  
    return (
      <div className="list">
        {goals.map((item) => {
          return(
              <Todo key={item.id} {...item}/>
             
          )})}
             
       
      </div>
    );
  };
  
  export default TodoList;