import './ToDoList.css';

const ToDoList = (props) => {
    {/**
    declaring props as variable for clear code and better understading.
    **/}
    const todos = props.todos;
    const title = props.title;
    const deleteHandler = props.deleteHandler;
   
    return (  
        <div className="todo-list">
            <h2>{title}</h2>
            {todos.length === 0 ? 'No To-Dos to display' : todos.map((todo) => (<div className="todo-preview" key={todo.id}>
                <div>
                <h2> {todo.description}</h2>
                </div>
                <div className="todo-details">
                <p> {todo.deadline}</p>  
                <button onClick={() => { deleteHandler(todo.id) }}>
                    Delete
                </button>                    
                </div>
            </div>))
            }
        </div>
    );
}
 
export default ToDoList;