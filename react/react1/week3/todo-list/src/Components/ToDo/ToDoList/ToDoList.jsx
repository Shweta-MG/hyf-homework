import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.css";

const ToDoList = (props) => {
  {
    /**
    declaring props as variable for clear code and better understading.

    const todos = props.todos;
    const title = props.title;
    
    **/
  }
  
  const { todos, title, setTodos } = props;
  console.log({ todos });
  

  return (
    <div className="todo-list">
      <h2>{title}</h2>
      {todos.length === 0
        ? "No To-Dos to display"
        : todos.map(item => {
          return <ToDoItem
            key={item.id}
            description={item.description}
            deadline={item.deadline}
            todos={todos}
            setTodos={setTodos}
            id={item.id}/>
          })}
    </div>
  );
};

export default ToDoList;
