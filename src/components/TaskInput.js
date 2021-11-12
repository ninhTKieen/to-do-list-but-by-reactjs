import React, {useState, useEffect, useRef} from "react";

const TaskInput = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.id : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const handleAddTask = (e) => {
    e.preventDefault(); //prevent refresh the page after click add button

    props.onChange({
      id : input,
      text : input
    })

    setInput('');
  }
  return (
    <form className = 'task_form' onSubmit = {handleAddTask}>
        {
          !props.edit ? (
          <>
            <input
                type = 'text' 
                placeholder = 'Add a task'
                value = {input}
                name = 'text'
                className = "task_input"
                onChange = {handleChange}
                ref = {inputRef}
            />
            <button className = "task_button" onClick = {handleAddTask}>Add Task</button>
          </> ) : (
          <>
            <input
                type = 'text' 
                placeholder = "Update your item"
                value = {input}
                name = 'text'
                className = "task_input_edit"
                onChange = {handleChange}
                ref = {inputRef}
            />
            <button className = "task_button_edit" onClick = {handleAddTask}>Update task</button>
          </> )
        }
        
    </form>
  );
};

export default TaskInput;