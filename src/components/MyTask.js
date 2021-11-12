import React, {useState} from 'react'
import TaskInput from './TaskInput'
import {CgCloseO} from 'react-icons/cg'
import {BiEdit} from 'react-icons/bi'
const MyTask = ({tasks, completeTask, removeTask, updateTask}) => {
    const [edit, setEdit] = useState({
        id : '',
        text : ''
    })
    const submitUpdate = (value) => {
        updateTask(edit.id, value);
        setEdit({
            id : '',
            text : ''
        });

    }
    if(edit.id) {
        return <TaskInput edit={edit} onChange={submitUpdate} />
    }
    return tasks.map((task, index) => (
        <div
            className = "task"
            key = {index}
        >
            <div
                className = {task.isComplete ? "taskComplete" : "textTask"}
                key = {task.id}
                onClick = {() => completeTask(task.id)}
            >
                {task.text}
            </div>
            
            <div className = "icons">
                <CgCloseO 
                    className = "removeIcon" 
                    onClick = {() => removeTask(task.id)}    
                />
                <BiEdit 
                    className = "editIcon" 
                    onClick = {() => setEdit({id : task.id, text : task.text})} 
                />
            </div>
        </div>
    ))
}

export default MyTask
