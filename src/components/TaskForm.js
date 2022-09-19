import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TaskForm = ({ onSubmit }) => {
    const [input, setInput] = useState("");

    console.log("Este es el value del input", input);

    const handleChange = (e) => {
        console.log("Event in form", e);
        console.log("Target in form", e.target)
        console.log("Value in form", e.target.value)
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Event on submit", e);

        const newTask = {
            id: uuidv4(),
            title: input,
            completed: false,
        };
        onSubmit(newTask);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Write your task"
            name="text"
            onChange={handleChange}
            />
            <button>Add task</button>
            </form>
    );
};
export default TaskForm;