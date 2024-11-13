// components/TaskCard.jsx
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ task, index, deleteTask, toggleComplete, changePriority }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`task-card ${task.completed ? 'completed' : ''}`}
      >
        <h2>{task.title}</h2>
        <select
          value={task.priority}
          onChange={(e) => changePriority(task.id, e.target.value)}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Completed' : 'Mark as Completed'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    )}
  </Draggable>
);

export default TaskCard;
