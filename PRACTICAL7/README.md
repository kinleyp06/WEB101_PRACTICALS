# Dashboard Analytics Application

A modern web-based analytics dashboard that displays business metrics through interactive charts and visualizations.

## Project Overview

This project demonstrates the creation of a data visualization dashboard using React and modern web technologies. The application displays key business metrics including sales data, customer acquisition trends, product category performance, and weekly visitor statistics through interactive and responsive charts.

## Files

The application consists of the following key files:

`index.html` - The main HTML file that serves as the entry point for the application.

`App.jsx` - The main React component that orchestrates the dashboard layout and integrates all chart components.

`App.css` - Stylesheet defining the visual appearance and layout of the dashboard.

`main.jsx` - The JavaScript entry point that renders the React application to the DOM.

`index.css` - Global styles applied across the entire application.

`vite.config.js` - Configuration file for the Vite build tool.

`package.json` - File containing project dependencies and scripts.

The components folder contains four specialized chart components:

`MonthlySalesChart.jsx` - Displays monthly sales revenue trends over time.

`customerAcquisitionChart.jsx` - Shows customer acquisition metrics and growth patterns.

`ProductCategoryChart.jsx` - Visualizes sales performance across different product categories.

`WeeklyVisitorsChart.jsx` - Presents weekly visitor statistics and traffic trends.

The data folder contains:

`salesData.js` - Sample data used to populate all charts and visualizations.

## Setup Instructions

### Step 1 – Extract Project Files

Extract all project files to your desired location on your computer.

### Step 2 – Install Dependencies

Open your terminal and navigate to the project directory. Run the following command to install all required packages:

```bash
npm install
```

### Step 3 – Start the Development Server

Run the development server using the following command:

```bash
npm run dev
```

The application will start and typically be accessible at http://localhost:5173.

### Step 4 – Open in Browser

Open your web browser and navigate to the local address provided by the development server to view the dashboard.

## How to Use the Application

### View Dashboard

Upon loading, the dashboard displays all four charts showing different business metrics. Each chart updates in real-time as you interact with the application.

### Interactive Charts

Click on chart elements to view detailed information. Hover over data points to see tooltips with specific values. Use zoom and pan features if available on individual charts.

### Filter Data

Some charts allow filtering by date range or category. Use the available filter options to customize the data displayed.

### Export Data

Certain charts provide options to export data in various formats such as CSV or PDF for further analysis.

## Project Structure

The project is organized using Vite as the build tool and React as the UI framework. The src folder contains all source code organized into logical sections. Components are separated into individual files for maintainability. Sample data is stored separately in the data folder for easy updates and modifications.

## Technologies Used

React provides the component-based user interface framework.

Vite serves as the modern build tool and development server.

JavaScript handles all application logic and interactivity.

CSS provides styling and responsive design capabilities.

Chart library is used for creating interactive data visualizations.

Node.js and npm manage dependencies and project scripts.

## Features

Interactive Charts - All visualizations are interactive and respond to user input.

Responsive Design - The dashboard adapts to different screen sizes and devices.

Real-time Updates - Charts can be updated with new data dynamically.

Clean Interface - Simple and intuitive user interface for easy navigation.

Performance Optimized - Efficient rendering and data handling for smooth performance.

Modular Architecture - Component-based structure allows easy maintenance and scalability.

## Learning Outcomes

By completing this project, I have learned:

How to create reusable React components for different chart types.

How to structure data and pass it between components using props.

How to implement responsive design in dashboard applications.

How to integrate charting libraries with React applications.

How to organize project files and maintain clean code structure.

How to use Vite for faster development and optimized builds.

How to handle state management in component hierarchies.

## Important Notes

Ensure that Node.js version 14 or higher is installed on your computer. The application requires an active development server to run properly. Sample data can be modified in the salesData.js file to test different visualizations. The dashboard is designed to work with modern browsers that support ES6 JavaScript.

## Troubleshooting

If dependencies fail to install, delete the node_modules folder and package-lock.json file, then run npm install again.

If the development server fails to start, verify that port 5173 is not in use by another application. Check that all files are extracted correctly and no files are missing.

If charts do not display correctly, ensure that the charting library is properly installed as a dependency. Check the browser console for error messages.

If data does not appear in the charts, verify that the salesData.js file contains valid data in the correct format. Check that data is properly imported in the chart components.

---
