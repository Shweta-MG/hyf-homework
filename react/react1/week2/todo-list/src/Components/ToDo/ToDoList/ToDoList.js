import './ToDoList.css';

const ToDoList = (props) => {
    {/**
    declaring props as variable for clear code and better understading.
    **/}
    const todos = props.todos;
    const title = props.title;
    const deleteHandler = props.deleteHandler;

    {/**
    


    const CheckedToDo = () => {
        const [isChecked, setIsChecked] = useState(false);
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    const textStyle = {
        textDecoration: isChecked ? 'line-through' : 'none'
    };

        */

}


   
    return (  
        <div className="todo-list">
            <h2>{title}</h2>
            {todos.length === 0 ? 'No To-Dos to display' : todos.map((todo) => (<div className="todo-preview" key={todo.id}>
                <div className="todo-description">
                    <input type="checkbox"
                        name="checkbox"
                        id="checkbox" />
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