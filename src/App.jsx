import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './index.css'; // Ensure your CSS file is properly imported

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Complete React Project', completed: false, priority: 'medium' },
    { id: '2', title: 'Read Tailwind Docs', completed: false, priority: 'low' },
    { id: '3', title: 'Plan UI Design', completed: false, priority: 'high' },
  ]);
  
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  // Priority map for sorting tasks based on priority
  const priorityMap = {
    high: 1,
    medium: 2,
    low: 3,
  };

  // Add task handler
  const addTask = () => {
    if (taskTitle.trim() === '') return;
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      completed: false,
      priority: priority,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskTitle('');
  };

  // Delete task handler
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle task completion handler
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Change task priority handler
  const changePriority = (id, newPriority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, priority: newPriority } : task
      )
    );
  };

  // Sort tasks by priority
  const sortedTasks = [...tasks].sort((a, b) => priorityMap[a.priority] - priorityMap[b.priority]);

  // Handle the drag end event for reordering tasks
  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If there's no destination (dropped outside the list), do nothing
    if (!destination) return;

    // Reorder tasks based on drag result
    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="main-container p-6 rounded-3xl bg-white shadow-xl text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-400 to-orange-500 mb-10">
          Task Manager
        </h1>

        {/* Input form for adding tasks */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="p-4 w-full max-w-3xl rounded-lg border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300"
            placeholder="Enter task..."
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="p-4 ml-4 rounded-lg border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button
            onClick={addTask}
            className="ml-4 px-8 py-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300 shadow-lg"
          >
            Add Task
          </button>
        </div>

        {/* Drag and Drop context */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="task-list">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex flex-col space-y-4"
              >
                {sortedTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`task-card ${task.completed ? 'completed' : ''}`}
                        style={{
                          backgroundColor: task.completed ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                          ...provided.draggableProps.style,
                        }}
                      >
                        <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
                        <div className="flex justify-center items-center mt-4 space-x-4">
                          {/* Priority Dropdown */}
                          <select
                            value={task.priority}
                            onChange={(e) => changePriority(task.id, e.target.value)}
                            className="p-2 rounded-lg border-2 border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300"
                          >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                          </select>

                          <button
                            onClick={() => toggleComplete(task.id)}
                            className={`px-6 py-2 rounded-lg text-white ${task.completed ? 'bg-green-500' : 'bg-yellow-500'} hover:bg-opacity-80 transition duration-300`}
                          >
                            {task.completed ? 'Completed' : 'Mark as Completed'}
                          </button>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="ml-2 px-6 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 transition duration-300"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TaskManager;
