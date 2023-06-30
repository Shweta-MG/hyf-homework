import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = (props) => {
  {
    /**
    declaring props as variable for clear code and better understading.

    const todos = props.todos;
    const title = props.title;
    const deleteHandler = props.deleteHandler;

    **/
  }

  const { todos, title, deleteHandler } = props;
  console.log({ todos });
  


  const [isChecked, setIsChecked] = useState(false);




  return (
    <div className="todo-list">
      <h2>{title}</h2>
      {todos.length === 0
        ? "No To-Dos to display"
        : todos.map((todo) => (
            <div className="todo-preview" key={todo.id}>
              <div className="todo-description">
                <input
                type="checkbox"
                checked={todo.isChecked || false}
                onChange={() => deleteHandler(todo.id)}
                />

                <span
                  style={{
                    textDecoration: isChecked ? "line-through" : "none",
                  }}
                >
                  {todo.description}
                </span>
              </div>

              <div className="todo-details">
              <p> {todo.deadline}</p>
              
                <button
                  onClick={() => {
                    deleteHandler(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ToDoList;
