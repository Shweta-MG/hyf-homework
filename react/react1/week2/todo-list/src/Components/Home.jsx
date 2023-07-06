import React, { useState } from "react";
import Timer from "./ToDo/Timer/Timer";
import ToDoForm from "./ToDo/ToDoForm/ToDoForm";
import ToDoList from "./ToDo/ToDoList/ToDoList";


const Home = () => {

    const [todos, setTodos] = useState([
        {
            description: "Create To Do app",
            deadline: "2023-04-04",
            id: 1
        },        
        {
            description: "Brush teeth",
            deadline: "2023-04-12",
            id: 2
        },      
        {
            description: "Go to movie",
            deadline: "2023-07-12",
            id: 3
        },   
        {
            description: "Eat breakfast ",
            deadline: "2023-06-12",
            id: 4
        }]);

    
    
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

  
    return (  
        <div className="home">
            <Timer/>
            <ToDoForm addToDo={addToDo} />
            <ToDoList
                todos={todos}
                setTodos={setTodos}
                title={'All are the To-Dos'}/> 
        </div>
    );
}
 
export default Home;