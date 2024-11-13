// TaskCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TaskCard = ({ task, onDelete, onToggleComplete, onChangePriority }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`task-card ${task.completed ? 'completed' : ''}`}
    >
      <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
      <div className="flex justify-center items-center mt-4 space-x-4">
        <select
          value={task.priority}
          onChange={(e) => onChangePriority(task.id, e.target.value)}
          className="p-2 rounded-lg border-2 border-gray-300 bg-white text-gray-800 transition duration-300"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-6 py-2 rounded-lg text-white ${task.completed ? 'bg-green-500' : 'bg-yellow-500'} transition duration-300`}
        >
          {task.completed ? 'Completed' : 'Mark as Completed'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="ml-2 px-6 py-2 rounded-lg text-white bg-red-500 transition duration-300"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TaskCard;
