import React , { useState } from "react";
import ToDoList from "./ToDo/ToDoList";
import ToDoForm from "./ToDo/ToDoForm";


const Home = () => {

    const onDeleteHandler = (id) => {
        const newToDos = todos.filter(todo => todo.id !== id);
        setTodos(newToDos);
    }

    const addToDo = (desc, date) => {
        let id;       
        todos.length !== 0 ? id = todos[todos.length - 1].id + 1 : id = 0;

        const newToDo = {
            description: desc,
            deadline: date,
            id: id,
        }
        console.log(newToDo);
        setTodos([...todos, newToDo])
    }


    const [todos, setTodos] = useState([
        {
            description: "Create To Do app",
            deadline: "2023-04-04",
            id: 0
        },        
        {
            description: "Go out for coffee ",
            deadline: "2023-04-12",
            id: 1
        }]);
    
    


   
    return (  
        <div className="home">
            <ToDoForm addToDo={addToDo} />
            <ToDoList
                todos={todos}
                title={'All are the To-Dos'}
                deleteHandler={onDeleteHandler} /> 
        </div>
    );
}
 
export default Home;