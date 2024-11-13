// TaskItem.jsx
import React from 'react';

function TaskItem({ task, deleteTask, toggleComplete, setPriority }) {
  const handlePriorityChange = (e) => {
    setPriority(task.id, e.target.value); // Update priority when changed
  };

  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      onClick={() => toggleComplete(task.id)}
      data-priority={task.priority} 
    >
      <span className="task-title">{task.title}</span>

      {/* Priority dropdown to select task priority */}
      <select value={task.priority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Delete button */}
      <button onClick={() => deleteTask(task.id)} className="delete">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
