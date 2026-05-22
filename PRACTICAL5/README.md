# TikTok Full Stack Application

A complete full-stack social media application that replicates TikTok functionality with a React-based frontend and Node.js backend, featuring video streaming, user authentication, profile management, and real-time interactions.

## Project Overview

This project demonstrates the development of a modern full-stack web application using contemporary technologies. The application consists of two main components: a Next.js frontend that provides an intuitive user interface and a Node.js backend that handles data management, authentication, and API operations. Users can create accounts, upload videos, follow creators, and interact with content through a responsive and engaging platform.

## Project Structure

The project is organized into two main directories:

`tiktok-frontend/` - Contains the Next.js frontend application with all user interface components, pages, and client-side logic.

`tiktok-server/` - Contains the Node.js backend server with API routes, database models, and business logic.

## Frontend Structure

The frontend application is organized as follows:

`src/app/` - Contains all pages accessible through routing including the home page, profile pages, upload page, login and signup pages, and individual video pages.

`src/components/` - Contains reusable UI components organized by feature including authentication forms, layouts, modals, and video display components.

`src/contexts/` - Manages global state using React Context API for authentication and user sessions.

`src/hooks/` - Contains custom React hooks for reusable logic such as intersection observers for lazy loading.

`src/lib/` - Contains utility functions for API configuration, media handling, and data normalization.

`src/services/` - Handles API communication with the backend including user and video service functions.

## Backend Structure

The backend application is organized as follows:

`src/app.js` - Main application file that configures Express middleware and routes.

`src/index.js` - Entry point that starts the server.

`src/controllers/` - Contains business logic for handling user, video, and comment operations.

`src/routes/` - Defines API endpoints for user authentication, video management, and comments.

`src/middleware/` - Contains authentication middleware and file upload handling.

`src/lib/` - Contains database configuration and utilities.

`prisma/` - Contains database schema and migrations for PostgreSQL.

`uploads/` - Directory where uploaded video files are stored on the server.

## Setup Instructions

### Step 1 – Install Frontend Dependencies

Open the terminal and navigate to the frontend directory:

```bash
cd tiktok-frontend
npm install
```

### Step 2 – Install Backend Dependencies

In a new terminal window, navigate to the backend directory:

```bash
cd tiktok-server
npm install
```

### Step 3 – Configure Environment Variables

In the `tiktok-server/` directory, create or update the `.env` file with the following variables:

```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

In the `tiktok-frontend/` directory, create or update the `.env.local` file with the backend URL:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 4 – Initialize the Database

Run the following command in the `tiktok-server/` directory to set up the database:

```bash
npm run migrate
```

Optionally, seed the database with sample data:

```bash
npm run seed
```

### Step 5 – Start the Backend Server

In the `tiktok-server/` directory, run:

```bash
npm start
```

The backend server should now be running at `http://localhost:5000`.

### Step 6 – Start the Frontend Development Server

In the `tiktok-frontend/` directory, run:

```bash
npm run dev
```

The frontend application should now be accessible at `http://localhost:3000`.

## How to Use the Application

### Create an Account

Navigate to the signup page. Enter your desired username, email address, and password. Click the signup button to create your account. Upon successful registration, you will be redirected to the login page.

### Log In

Enter your email and password on the login page. Click the login button to access your account. Upon successful authentication, you will be directed to the home feed.

### Browse Videos

On the home page, scroll through the video feed to discover content from all creators. Each video displays the creator's profile information, caption, like count, and comment count.

### Upload a Video

Navigate to the upload page. Select a video file from your computer or drag and drop it into the upload area. Add a caption and any relevant details. Click the upload button to share your video with the community.

### View User Profiles

Click on any creator's profile from the video feed to view their profile page. This displays their uploaded videos, follower count, following count, and bio information.

### Follow Users

Click the follow button on any user's profile to add them to your following list. You will see updates from followed creators prioritized in your feed.

### Explore Creators

Navigate to the explore users page to discover new creators. Browse through suggested accounts based on popularity and interests.

### View Following Feed

Access the following page to see videos exclusively from creators you follow. This provides a personalized feed based on your followed accounts.

### Like Videos

Click the like button on any video to add it to your liked content. You can view all liked videos on your profile.

### Comment on Videos

Navigate to a specific video page to view and leave comments. Engage with other users through comment discussions.

## Important Notes

The application requires both the frontend and backend servers to be running for full functionality. Ensure the backend API is properly configured and accessible at the URL specified in the frontend environment variables. User authentication tokens are stored in browser local storage. Clear your browser cache if you experience authentication issues.

Video uploads require sufficient server storage space. Large files may take longer to process and upload. The application is optimized for modern browsers including Chrome, Firefox, Safari, and Edge. Some features may not work correctly in older browsers. An active internet connection is required for all features to function properly.

The PostgreSQL database must be set up and running before starting the backend server. Verify the database connection string in the environment variables. API requests may be rate limited depending on server configuration.

## Key Features

User Authentication - Secure registration and login with JWT token-based authentication.

Video Management - Users can upload, view, and manage their videos with metadata and descriptions.

Social Features - Follow system allows users to build communities and personalize their feeds.

Video Discovery - Explore page helps users discover new creators and content.

User Profiles - Detailed profile pages display user information, follower statistics, and video collections.

Responsive Design - The application works seamlessly on desktop, tablet, and mobile devices.

Real-time Updates - Feed updates reflect new uploads and interactions in real-time.

Comment System - Users can engage in discussions through comments on videos.

## Technologies Used

Frontend Technologies:

Next.js provides server-side rendering and file-based routing for the frontend application.

React enables component-based UI development and state management.

Tailwind CSS handles styling and responsive design.

JavaScript manages application logic and API interactions.

React Context API manages global authentication state across the application.

Backend Technologies:

Node.js provides the JavaScript runtime for server-side execution.

Express.js handles HTTP routing and middleware management.

PostgreSQL provides a robust relational database for storing user and video data.

Prisma ORM simplifies database operations and migrations.

JWT tokens handle secure user authentication.

## Database Schema

The application uses PostgreSQL with Prisma ORM to manage the following entities:

Users - Stores user account information including username, email, password hash, and profile data.

Videos - Stores video metadata including title, description, uploader information, and engagement metrics.

Comments - Stores user comments on videos with timestamps and user references.

Follows - Stores follower relationships between users.

Likes - Stores user interactions with videos indicating liked content.

## Learning Outcomes

By completing this project, I have learned:

How to build a complete full-stack application with separate frontend and backend components.

How to implement secure user authentication using JWT tokens.

How to design and manage database schemas using Prisma ORM.

How to build RESTful APIs using Express.js.

How to handle file uploads on the server and manage uploaded files.

How to fetch and display data from backend APIs in the frontend.

How to implement social features such as following and liking.

How to manage complex application state across multiple components.

How to deploy and configure full-stack applications in a development environment.

## Troubleshooting

If the application fails to load, ensure both the frontend and backend servers are running and accessible. Check that all dependencies are installed by running `npm install` in both directories.

If login or signup fails, verify that the backend API is running and the environment variables are correctly configured in both frontend and backend. Check the browser console and server logs for error messages.

If videos do not appear in the feed, ensure the backend server is connected to the database and the API endpoints are functioning correctly. Verify that video data exists in the database.

If file uploads fail, check the file size and format. Ensure the uploads folder exists on the server and has appropriate permissions. Verify that the backend server has sufficient storage space.

If styling appears broken, clear your browser cache and restart the frontend development server. Verify that Tailwind CSS is properly configured.

If database operations fail, verify the PostgreSQL connection string in the `.env` file. Check that the database exists and migrations have been run successfully.

---