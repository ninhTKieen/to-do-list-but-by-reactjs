import React, {useState} from 'react';
import TaskInput from './TaskInput';
import MyTask from './MyTask';
const TaskList = () => {
    const [taskItems, setTaskItems] = useState([]);
    const handleAddTask = (task) => {
        if(!task.text) {
            return;
        }
        let count = 0;
        while(taskItems.filter(item => item.id === task.id).length) {
            task.id += count;
            count++;
        }
        const newTasks = [...taskItems, task];
        setTaskItems(newTasks);
        console.log(...taskItems);
    }
    const completeTask = (id) => {
        let updateTasks = taskItems.map(task => {
            if(task.id === id) {
                task.isComplete = !task.isComplete;                
            }
            return task;
        })
        setTaskItems(updateTasks);
    }
    const removeTask = (id) => {
        let updateTasks = taskItems.filter(task => {
            if(task.id !== id) {
                return true;
            }
        })
        setTaskItems(updateTasks);
    }
    const updateTask = (id, newTask) => {
        if(!newTask.text) {
            return;
        }
        let updateTasks = taskItems.map(item => (item.id === id ? newTask : item));
        setTaskItems(updateTasks);
    }
    return (
        <div>
            <h1 className = "title">Today't Tasks</h1>
            <TaskInput onChange = {handleAddTask}/>
            <MyTask 
                tasks = {taskItems} 
                completeTask = {completeTask} 
                removeTask = {removeTask} 
                updateTask = {updateTask}    
            />
        </div>
    )
}

export default TaskList;