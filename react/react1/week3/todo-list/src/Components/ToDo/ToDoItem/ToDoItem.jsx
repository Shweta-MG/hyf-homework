import React, { useState } from "react";

const ToDoItem = (props) => {

    const { todos, setTodos } = props;
    
    const [isChecked, setIsChecked] = useState(false);

    const onDeleteHandler = (id) => {
        const newToDos = todos.filter(todo => todo.id !== id);
        setTodos(newToDos);
    }

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return ( <div className="todo-preview" key={props.id}>
    <div className="todo-description">
      <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckbox}
      />

      <span style={{textDecoration: isChecked ? "line-through" : "none"}}>
        {props.description}
      </span>
    </div>

    <div className="todo-details">
    <p> {props.deadline}</p>
    
      <button onClick={() => {onDeleteHandler(props.id)}}>
        Delete
      </button>
    </div>
  </div> );
}
 
export default ToDoItem;