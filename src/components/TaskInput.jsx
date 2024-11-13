// TaskInput.jsx
import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = (e) => setTaskTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        type="text"
        value={taskTitle}
        onChange={handleChange}
        placeholder="Enter a new task"
        className="task-input"
      />
      <button type="submit" className="add-task">
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
