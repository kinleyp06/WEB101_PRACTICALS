# TikTok Frontend Application

A frontend web application built with Next.js that replicates core TikTok features including video streaming, user authentication, profile management, and social interactions.

## Project Overview

This project demonstrates the development of a modern social media frontend application. Users can browse videos, create accounts, log in, upload content, follow other users, and interact with the community through a responsive and intuitive interface.

## Files and Folder Structure

The project is organized as follows:

`index.html` - The main entry point for the application.

`style.css` - Global stylesheet for application styling and layout.

`script.js` - Main JavaScript file handling application logic and interactivity.

The `src/` directory contains the source code organized by functionality. The `app/` folder includes all pages accessible through routing. The `components/` folder contains reusable UI components. The `contexts/` folder manages global state. The `services/` folder handles API communication.

## Setup Instructions

### Step 1 – Install Dependencies

Open the terminal and navigate to the project directory. Run the following command to install all required packages:

```bash
npm install
```

### Step 2 – Configure Environment Variables

Create a `.env.local` file in the project root directory. Add the necessary API configuration and backend URLs to this file. Contact your instructor or refer to the project documentation for the required environment variables.

### Step 3 – Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The application should now be accessible at `http://localhost:3000` in your web browser.

## How to Use the Application

### Create an Account

Navigate to the signup page. Fill in your username, email, and password. Click the signup button to create a new account. You will be redirected to the login page upon successful registration.

### Log In

Enter your email and password on the login page. Click the login button to access your account. Upon successful login, you will be directed to the home feed.

### Browse Videos

On the home page, scroll through the video feed to watch content from other users. Each video displays the creator's profile information, caption, and interaction options.

### Upload a Video

Navigate to the upload page. Select a video file from your computer or drag and drop it into the upload area. Add a caption and any additional details. Click the upload button to share your video with the community.

### View User Profiles

Click on any creator's profile from the video feed to view their profile page. This displays their uploaded videos, follower count, following count, and bio information.

### Follow Users

Click the follow button on any user's profile to add them to your following list. You will see updates from followed creators in your feed.

### Explore Users

Navigate to the explore users page to discover new creators. Browse through suggested accounts and follow those that interest you.

### View Following Feed

Access the following page to see videos exclusively from users you follow. This provides a personalized feed based on your followed accounts.

## Important Notes

The application requires a backend server to be running to fetch and store data. Ensure the backend API is properly configured and accessible. User authentication tokens are stored in the browser's local storage. Clear your cache if you experience authentication issues. Video uploads require sufficient server storage space. Large files may take longer to process and upload.

The application is optimized for modern browsers including Chrome, Firefox, Safari, and Edge. Some features may not work correctly in older browsers. An active internet connection is required for all features to function properly.

## Project Features

Authentication System - Users can create accounts, log in, and manage their sessions securely.

Video Feed - A dynamic feed displaying videos from all users with real-time updates.

Profile Management - Users can view and edit their profile information including bio and profile picture.

Video Upload - Users can upload videos with captions and share them with the community.

User Discovery - Explore page allows users to find and follow new creators.

Following System - Users can follow creators and view content from their followed accounts exclusively.

Video Details - Individual video pages display full video information and allow user interaction.

Responsive Design - The application works seamlessly on desktop and mobile devices.

## Technologies Used

Next.js provides the frontend framework and handles routing and server-side rendering.

React enables component-based UI development and state management.

Tailwind CSS handles styling and responsive design.

JavaScript manages application logic and API interactions.

Context API manages global authentication state across the application.

## Learning Outcomes

By completing this project, I have learned:

How to build a multi-page application using Next.js file-based routing.

How to implement user authentication and session management.

How to fetch and display data from backend APIs.

How to build reusable components and manage component state.

How to handle file uploads and media processing.

How to implement social features such as following and user discovery.

How to create responsive layouts that work on various devices.

How to manage global state using React Context API.

## Troubleshooting

If the application fails to load, ensure the development server is running and accessible at the correct URL. Check that all dependencies are installed by running `npm install`.

If login or signup fails, verify that the backend API is running and the environment variables are correctly configured. Check the browser console for error messages.

If videos do not appear in the feed, ensure the backend server is connected and the API endpoints are correct. Verify that video data exists in the database.

If file uploads fail, check the file size and format. Ensure the uploads folder exists and has appropriate permissions on the server.

If styling appears broken, clear your browser cache and restart the development server. Verify that Tailwind CSS is properly configured.

---
