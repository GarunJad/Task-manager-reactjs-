// TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleComplete, setPriority }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setPriority={setPriority}
        />
      ))}
    </div>
  );
}

export default TaskList;
