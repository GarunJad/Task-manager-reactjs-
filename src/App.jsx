// App.jsx
import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Priority mapping
  const priorityMap = {
    high: 1,
    medium: 2,
    low: 3,
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Sort tasks by priority
  const sortedTasks = [...tasks].sort((a, b) => priorityMap[a.priority] - priorityMap[b.priority]);

  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
      priority: 'low', // Default to 'low' priority
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const setPriority = (taskId, priority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, priority } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={sortedTasks} // Pass sorted tasks
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        setPriority={setPriority}
      />
    </div>
  );
}

export default App;
