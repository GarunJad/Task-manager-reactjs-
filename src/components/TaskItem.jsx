import React from 'react';

const TaskItem = ({ task, deleteTask, toggleComplete, setPriority }) => {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border shadow-sm ${task.completed ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-50 transition duration-300`}>
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <select
          value={task.priority}
          onChange={(e) => setPriority(task.id, e.target.value)}
          className="p-1 border border-gray-300 rounded-md"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
