## Task Manager
A responsive, draggable, and animated task management application built with React, React Beautiful DnD for drag-and-drop, Framer Motion for animations, and Tailwind CSS for styling. This application allows users to add, delete, reorder, mark tasks as completed, change priority levels, and search through tasks in a visually appealing way.

# Features
1. Add, delete, and mark tasks as completed - Effortlessly manage tasks with dedicated buttons.
2. Priority-based task sorting - Tasks are organized based on priority: High, Medium, and Low.
3. Draggable tasks - Reorder tasks with a drag-and-drop interface powered by react-beautiful-dnd.
4. Search functionality - Search for tasks by title.
5. Animations - Smooth fade-in animations with framer-motion on adding and deleting tasks.
6. Responsive Design - Built with Tailwind CSS to look great on all devices.
# Tech Stack
1. React - Component-based UI library for building user interfaces.
2. React Beautiful DnD - Drag-and-drop for reordering tasks.
3. Framer Motion - Adding animations to task cards for better UI experience.
4. Tailwind CSS - Utility-first CSS framework for responsive design.

### Installation:

1. Clone the repository:

```bash
git clone https://github.com/GarunJad/Task-manager-reactjs-.git
```

2. Navigate to the project directory:
```bash
cd task-manager-app
```
3. Install the necessary dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```
Your task manager app should now be running at http://localhost:3000.

# Assumptions Made During Development

1. Task Uniqueness:
Each task has a unique id generated based on the current timestamp to prevent duplicate ids.

2. Priority Levels:
Only three priority levels (High, Medium, and Low) are required for tasks. Additional priority levels can be added, but only these three are implemented initially.

3. Task Completion:
Tasks can be toggled between "completed" and "not completed" states.
The "Mark as Completed" button serves as a toggle, so the task can be reverted to "incomplete" if needed.

4. Task Ordering:
Tasks are sorted by priority by default (High > Medium > Low).
Users can reorder tasks within these priorities using drag-and-drop.

5. Search Functionality:
The search bar filters tasks based on the title attribute only.
The search term is case-insensitive, and it returns any task title containing the input text as a substring.

6. User Input:
Tasks are only added if the input is non-empty and includes a title.
The priority for each task defaults to "medium" if no priority is selected, assuming medium priority is the most commonly needed.

7. Animations and UI:
Simple fade-in and slide animations are assumed to improve the visual appeal of adding, deleting, and reordering tasks. These are not overly complex to maintain a lightweight and responsive UI.

8. Responsiveness:
The application is designed to be mobile-friendly using Tailwind CSS, assuming that users may interact with it on various device sizes.

9. Frameworks and Libraries:
The libraries chosen (e.g., React, Tailwind CSS, Framer Motion, React Beautiful DnD) are assumed to be sufficient for the application's core functionality and provide an adequate balance of performance and interactivity.

## Screenshots
Here are few screenshots of the website:

***
1. Home page with tasks listed in priority:

![alt text](<Screenshot 2024-11-14 033651.png>)

***

2. Marked a task as completed:

![alt text](<Screenshot 2024-11-14 033839.png>)

***

3. One of the task deleted with high priority:

![alt text](<Screenshot 2024-11-14 033935.png>)

***

4. Drop Down menu for changing priority(after being added):

![alt text](<Screenshot 2024-11-13 201056.png>)

***

5. Searching and getting results:

![alt text](<Screenshot 2024-11-14 034222.png>)

***

6. Adding a new task(Running) with a particular priority:

![alt text](<Screenshot 2024-11-14 034343.png>)

***

License
This project is licensed under the MIT License - see the LICENSE file for details.

