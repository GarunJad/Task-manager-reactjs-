// components/TaskManager.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskInput from './TaskInput.jsx';
import TaskCard from './TaskCard.jsx';
import SearchBar from './SearchBar.jsx';
import { priorityMap } from '../utils/taskUtils.jsx';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete React Project', completed: false, priority: 'medium' },
    { id: '2', title: 'Read Tailwind Docs', completed: false, priority: 'low' },
    { id: '3', title: 'Plan UI Design', completed: false, priority: 'high' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (taskTitle, priority) => {
    if (!taskTitle.trim()) return;
    const newTask = { id: Date.now().toString(), title: taskTitle, completed: false, priority };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const toggleComplete = (id) => setTasks(
    tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
  );

  const changePriority = (id, newPriority) => setTasks(
    tasks.map(task => task.id === id ? { ...task, priority: newPriority } : task)
  );

  const sortedTasks = [...tasks].sort((a, b) => priorityMap[a.priority] - priorityMap[b.priority]);
  const filteredTasks = sortedTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);
    setTasks(reorderedTasks);
  };

  return (
    <div className="task-manager">
      <h1 className="task-manager-heading">Task Manager</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskInput addTask={addTask} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="task-list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {filteredTasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  deleteTask={deleteTask}
                  toggleComplete={toggleComplete}
                  changePriority={changePriority}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskManager;
