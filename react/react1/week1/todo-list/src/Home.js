import { useState } from "react";
import ToDoList from "./ToDoList";


const Home = () => {
    const [todos, setTodos] = useState([
        {Description: "Get out of bed" ,
        deadline: "Wed Sep 13 2017" ,
        id: 0 
        },
        {Description: "Brush teeth" ,
        deadline: "Thu Sep 14 2017" ,
        id: 1
        },
        {Description: "Make react App" ,
        deadline: "Fri Sep 15 2017",
        id: 2
        },    
        {Description: "Eat breakfast" ,
        deadline: "Sat Sep 16 2017",
        id: 3
    }]

    )
    return (  
        <div className="home">
            <ToDoList todos={todos} title={ 'All are the To-Dos'} /> 
        </div>
    );
}
 
export default Home;