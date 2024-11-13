// components/TaskInput.jsx
import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleAddTask = () => {
    addTask(taskTitle, priority);
    setTaskTitle('');
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task..."
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
