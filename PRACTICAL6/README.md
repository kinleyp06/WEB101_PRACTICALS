# Todo Application with Zustand State Management

A modern todo list application built with React and Zustand for state management. This project demonstrates how to build a functional task management system with persistent state handling.

## Project Overview

This project showcases the implementation of a todo application using React and Zustand, a lightweight state management library. Users can create, read, update, and delete todo items while maintaining application state efficiently. The application provides a clean and intuitive interface for managing daily tasks.

## Files

The application consists of the following key files and folders:

`index.html` - The main HTML entry point for the application.

`package.json` - Contains project dependencies and scripts for running the application.

`vite.config.js` - Configuration file for Vite, the build tool used for this project.

`src/main.jsx` - The main JavaScript entry point that renders the React application.

`src/App.jsx` - The root React component that orchestrates the application layout.

`src/index.css` - Global styles and CSS utilities for the application.

`src/components/TodoInput.jsx` - Component for inputting and creating new todo items.

`src/components/TodoItem.jsx` - Component that displays individual todo items.

`src/components/TodoList.jsx` - Component that renders the list of all todo items.

`src/store/todoStore.js` - Zustand store containing the todo state and actions.

## Setup Instructions

### Step 1 – Navigate to Project Directory

Open your terminal and navigate to the project folder.

```bash
cd todo-zustand
```

### Step 2 – Install Dependencies

Install the required npm packages using the following command:

```bash
npm install
```

This will install React, Zustand, Vite, and other dependencies specified in package.json.

### Step 3 – Start Development Server

Run the development server with the following command:

```bash
npm run dev
```

The application should now be accessible in your web browser at http://localhost:5173.

### Step 4 – Build for Production

When ready to deploy, build the application using:

```bash
npm run build
```

This creates an optimized production build in the dist folder.

## How to Use the Application

### Add a Todo Item

Enter a task description in the input field at the top of the application. Click the "Add" button or press Enter to create a new todo item. The item will appear in the todo list below.

### Mark Todo as Complete

Click on a todo item to toggle its completion status. Completed items will display with a visual indicator such as a strikethrough or checkbox mark.

### Edit a Todo Item

Click the edit button next to a todo item to modify its description. Enter the new text and confirm the changes to update the item.

### Delete a Todo Item

Click the delete button next to a todo item to remove it from the list. The item will be permanently deleted from the application.

### Filter Todos

Use the filter options to view all todos, only completed todos, or only active todos based on your preference.

## Important Notes

The application uses Zustand for state management, which keeps the todo list in memory. Todos will reset when the page is refreshed unless you implement local storage persistence. For production use, consider adding localStorage integration to persist todos between sessions. The application works best on modern browsers that support ES6 JavaScript and React 18.

## Zustand State Management

The application uses Zustand to manage todo state. The todoStore.js file contains actions for adding, updating, deleting, and filtering todos. Zustand provides a simple and efficient way to manage application state without the complexity of Redux or Context API.

The store includes the following actions:

addTodo - Creates a new todo item with a unique ID and timestamp.

toggleTodo - Marks a todo as complete or incomplete.

updateTodo - Modifies the text content of an existing todo.

deleteTodo - Removes a todo from the list.

setFilter - Changes the current filter status for displaying todos.

## Project Structure

The src folder contains all React components organized as follows:

The components folder holds reusable UI components including TodoInput for user input, TodoItem for individual todo display, and TodoList for rendering the complete list.

The store folder contains the Zustand store configuration and state management logic.

The App.jsx file serves as the main component that coordinates all other components.

The index.css file provides global styling for the entire application.

## Features

Component-Based Architecture - The application is built using reusable React components for better organization and maintainability.

Zustand State Management - Lightweight and efficient state management without the overhead of larger libraries.

Real-Time Updates - Changes to todos are reflected immediately in the user interface.

Filter Functionality - Users can view all, completed, or active todos based on their needs.

Responsive Design - The application adapts to different screen sizes and devices.

Clean User Interface - Simple and intuitive design for easy task management.

## Technologies Used

React is used for building the user interface with components.

Zustand provides lightweight state management for the application.

Vite is the build tool used for fast development and optimized production builds.

JavaScript ES6 provides modern language features and syntax.

CSS3 handles styling and responsive design.

## Learning Outcomes

By completing this project, I have learned:

How to set up a React project using Vite for faster development.

How to create and manage reusable React components.

How to implement Zustand for efficient state management.

How to perform CRUD operations on todo items.

How to handle user input and form submissions in React.

How to implement filtering and sorting functionality.

How to structure a project for scalability and maintainability.

How to work with hooks and functional components in React.

## Troubleshooting

If the development server fails to start, verify that Node.js and npm are installed correctly. Check that all dependencies are installed by running npm install again. Clear the node_modules folder and reinstall if issues persist.

If components are not rendering, check the browser console for error messages. Verify that all component imports are correct and file paths are accurate. Ensure that the Zustand store is properly exported and imported.

If styling appears broken, verify that index.css is imported in main.jsx. Check that CSS class names match between components and the stylesheet. Clear browser cache and refresh the page.

If todos are not persisting after refresh, note that the current implementation stores todos in memory only. To persist todos, implement localStorage integration in the todoStore.js file to save and load todos from browser storage.

---

**Created:** May 2026

**Course:** WEB101 - Web Development Practicals

**Practical Number:** Practical 6
