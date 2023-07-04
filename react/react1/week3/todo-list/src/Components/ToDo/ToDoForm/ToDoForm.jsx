import { useState } from 'react';
import './ToDoForm.css';

const ToDoForm = (props) => {
    const {addToDo} = props;
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    

    const submitHandler = (e) => {
        e.preventDefault();        
        addToDo(desc, date)
        //console.log(newToDo);

        setDate('');
        setDesc('');
    }



    return (  
        <form className="form" onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                <div>
                    <label> Target Date </label>
                    <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </div>
            <button> Add </button>
        </form>
    );
}

export default ToDoForm;
