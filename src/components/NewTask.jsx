import Button from "./Button"
import { useState } from "react"

export default function NewTask({ onAdd}) {

    const [task, setTask] = useState('');

    function handleTaskChange(event) {
        setTask(event.target.value);
    }

    function handleClick(){
        if(task.trim() === ''){
            return;
        }
        onAdd(task);
        setTask(''); 
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-2 rounded-md bg-stone-200" onChange={handleTaskChange} value={task}/>
            <Button onClick={handleClick}>Add Task</Button>
        </div>
    )}