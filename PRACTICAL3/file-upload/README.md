# File Upload Application

A web application that allows users to upload, manage, and organize files with real-time validation and progress tracking.

## Project Overview

This project demonstrates file handling in web applications. Users can upload files, view upload progress, validate file types and sizes, and manage their uploaded files through a simple and intuitive interface.

## Files

The application consists of the following key files:

`index.html` - The main webpage containing the user interface for file uploads.

`style.css` - Stylesheet defining the visual appearance and layout of the application.

`script.js` - JavaScript code handling file uploads, validation, and DOM manipulation.

## Setup Instructions

### Step 1 – Extract Project Files

Extract all project files to your desired location on your computer.

### Step 2 – Prepare Upload Directory

Create a folder named `uploads` in the project directory. This folder will store all uploaded files.

### Step 3 – Launch the Application

Open `index.html` in your web browser. The application should load and be ready to use.

## How to Use the Application

### Upload a File

Click on the file upload area or drag and drop a file onto the designated drop zone. Select a file from your computer to upload. The application will display upload progress as a percentage. Once complete, the file will appear in the uploaded files list.

### View File Details

After uploading, each file displays its name, size, upload date, and time. File size is automatically converted to the appropriate unit (bytes, KB, MB).

### Delete Files

Click the delete button next to any uploaded file to remove it from the list and the server.

### Filter Files

Use the filter options to view files by type (documents, images, videos, audio) or sort by upload date or file size.

### Download Files

Click on any file in the list to download it to your computer.

## Important Notes

New API keys may take up to one hour to activate. If requests fail initially, wait and try again. Uploaded files are stored on the server and will persist between sessions. The maximum file size for uploads is 5 MB by default. For best results, use common file formats such as PDF, JPG, PNG, MP4, and MP3.

The application requires an active internet connection if using cloud storage integration. File names are automatically sanitized to prevent security issues. Duplicate file names are handled by appending timestamps to ensure uniqueness.

## File Validation

The application validates files based on the following criteria:

File Type Validation - Only approved file types are accepted. Supported types include documents (PDF, DOCX, TXT), images (JPG, PNG, GIF), videos (MP4, AVI), and audio (MP3, WAV).

File Size Validation - Files must not exceed the maximum size limit of 5 MB. If a file is too large, an error message will display.

File Name Validation - File names are checked for invalid characters and automatically cleaned. Special characters are removed or replaced with underscores.

## Features

Real-time Progress Tracking - Upload progress is displayed as a percentage bar and numeric indicator.

Drag and Drop Support - Users can drag files directly onto the upload area for convenience.

File Type Detection - The application automatically detects file types and displays appropriate icons.

Error Handling - Clear error messages are displayed for invalid files or failed uploads.

Responsive Design - The application works on desktop and mobile devices.

## Technologies Used

HTML5 provides the page structure and file input elements.

CSS3 handles styling, layout, and responsive design.

JavaScript manages file uploads, validation, and DOM manipulation.

## Learning Outcomes

By completing this project, I have learned:

How to handle file inputs and validate files before upload.

How to implement drag-and-drop functionality for file uploads.

How to display upload progress and handle asynchronous operations.

How to manage file data on the server and implement CRUD operations.

How to validate file types and sizes on both client and server side.

How to handle errors gracefully and provide user feedback.

How to organize and display file information dynamically.

## Troubleshooting

If the upload fails, verify that the uploads folder exists and has write permissions. Check the file size to ensure it does not exceed 5 MB. Verify that the file type is supported by the application. Clear your browser cache and try again if issues persist.

If files do not appear after upload, ensure the server is running and the uploads folder path is correct in the configuration. Check the browser console for error messages.

If the drag-and-drop feature does not work, verify that your browser supports the Drag and Drop API. Test with a supported browser such as Chrome, Firefox, or Edge.

---