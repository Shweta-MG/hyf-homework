import './ToDoList.css';

const ToDoList = (props) => {
    const todos = props.todos;
    const title = props.title;
    
    return (  
        <div className="todo-list">
            <h2>{ title }</h2>
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <h2> {todo.Description}</h2>
                    <p> {todo.deadline}</p>                   
               </div>
            ))}
        </div>
    );
}
 
export default ToDoList;