# Practical 1: Building a TikTok-Style Web App with Next.js

## Aim

The goal of this practical is to build a web application that resembles TikTok using the Next.js framework.

By the end of this practical, I will be able to:

- Create a Next.js project from scratch
- Build pages that users can navigate between (Home, Profile, Upload)
- Style the application using Tailwind CSS
- Implement forms with validation

---

## Objectives

The specific objectives are:

- Open the terminal and create a new Next.js project
- Choose the appropriate options during setup (ESLint, Tailwind CSS, src folder, App Router)
- Organise the project into a clear folder structure
- Build a sidebar and header that appear on every page
- Create a video feed that displays posts (similar to TikTok's "For You" page)
- Implement a Like button that toggles state
- Build Profile, Upload, Explore, Live, and Following pages
- Create Login and Signup forms with validation
- Connect all pages with working navigation links

---

## Theory – Key Concepts Explained

Before building, it is useful to understand the tools and concepts used.

### What is Next.js?

Next.js is a framework built on top of React. A key feature is file-based routing — creating a folder inside the `app` directory automatically provides a route for that folder (for example, a folder named `profile` becomes the `/profile` page), removing the need for manual route configuration.

### What are React Components?

A component is a reusable piece of UI. For example, instead of replicating the video card layout multiple times, I implement it once as `VideoCard.jsx` and reuse it for each video. This improves code organisation and maintainability.

### What is useState?

`useState` is a React hook that allows a component to store state. For example, when a user clicks the Like button, the component needs to remember whether the item is liked. `useState` stores that value and triggers updates to the UI.

```jsx
// Example: tracking if a video is liked
const [liked, setLiked] = useState(false);

// When the button is clicked, flip the value
const handleLikeClick = () => {
  setLiked(!liked);
};
```

### What is Tailwind CSS?

Tailwind CSS provides utility class names that I apply directly in JSX to style elements, reducing the need for separate CSS files.

```jsx
<button className="bg-red-500 text-white px-4 py-2 rounded">Log in</button>
```

### What is React Hook Form?

React Hook Form is a library that simplifies form handling. It manages:

- Form input state
- Validation rules
- Error messages
- Conditional submission when inputs are valid

Example usage:

```jsx
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

### What is Navigation in Next.js?

Next.js uses the `<Link>` component instead of a plain `<a>`, which provides client-side navigation and a faster, smoother experience.

### What is Event Handling?

Event handling allows the application to respond to user actions such as clicks, typing, and form submissions. In React, event handlers are attached directly to elements:

```jsx
<button onClick={handleLikeClick}>Like</button>
```

---

## Tools Used

| Tool            | Purpose in this project                           |
| --------------- | ------------------------------------------------- |
| Next.js         | Main framework — builds pages and handles routing |
| React           | Library for building UI components                |
| Tailwind CSS    | Utility-first CSS framework for styling           |
| react-icons     | Provides icon components used in the UI           |
| react-hook-form | Manages form state and validation                 |
| Node.js + npm   | Runs JavaScript and installs packages             |
| VS Code         | Editor used to write the code                     |
| Terminal        | Used to run commands such as starting the server  |

---

## Functional Dependencies

The additional packages installed on top of the base Next.js project.

### Install them by running these commands in the terminal:

```bash
npm install react-icons
npm install react-hook-form
```

### What these packages provide:

`react-icons` — access to a wide set of icon components. Example import:

```jsx
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
```

`react-hook-form` — simplifies form handling and validation:

```jsx
import { useForm } from "react-hook-form";
```

### Summary of dependencies in `package.json`:

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-icons": "^5.x",
    "react-hook-form": "^7.x"
  },
  "devDependencies": {
    "tailwindcss": "^4.x",
    "eslint": "latest",
    "eslint-config-next": "latest"
  }
}
```

> Note: `next`, `react`, `react-dom`, and `tailwindcss` are included when running `npx create-next-app`. Only `react-icons` and `react-hook-form` need manual installation.

---

## Project Structure

The project layout and the role of each folder and file:

```
tiktokweb/                          ← main project folder
│
├── public/                         ← static assets (images, files)
│
├── src/                            ← source code
│   │
│   ├── app/                        ← every folder here maps to a page
│   │   │
│   │   ├── explore/
│   │   │   └── page.jsx            ← the /explore page (trending hashtags)
│   │   │
│   │   ├── following/
│   │   │   └── page.jsx            ← the /following page (accounts to follow)
│   │   │
│   │   ├── live/
│   │   │   └── page.jsx            ← the /live page (live stream grid)
│   │   │
│   │   ├── login/
│   │   │   └── page.jsx            ← the /login page (login form)
│   │   │
│   │   ├── profile/
│   │   │   └── page.jsx            ← the /profile page (user info + videos)
│   │   │
│   │   ├── signup/
│   │   │   └── page.jsx            ← the /signup page (registration form)
│   │   │
│   │   ├── upload/
│   │   │   └── page.jsx            ← the /upload page (video upload form)
│   │   │
│   │   ├── globals.css             ← global styles (Tailwind setup)
│   │   ├── layout.js               ← wraps every page with MainLayout
│   │   └── page.js                 ← the home page "/" (video feed)
│   │
│   ├── components/                 ← reusable UI components
│   │   │
│   │   ├── layout/
│   │   │   └── MainLayout.jsx      ← sidebar + header (global)
│   │   │
│   │   └── ui/
│   │       ├── VideoCard.jsx       ← single video post component
│   │       └── VideoFeed.jsx       ← list of VideoCards (the feed)
│   │
│   └── lib/                        ← helper functions (for later)
│
├── package.json                    ← dependency list and scripts
└── next.config.mjs                 ← Next.js configuration
```

### Quick explanation of key files:

| File                               | Explanation                                               |
| ---------------------------------- | --------------------------------------------------------- |
| `app/layout.js`                    | Wraps every page with the sidebar and header              |
| `app/page.js`                      | Homepage that displays the VideoFeed component            |
| `components/layout/MainLayout.jsx` | Sidebar and top bar visible across pages                  |
| `components/ui/VideoCard.jsx`      | Represents a single video post (avatar, caption, buttons) |
| `components/ui/VideoFeed.jsx`      | Renders a list of VideoCard components to form the feed   |

---

## Project Setup – How I Run This Project

Follow these steps to run the project locally.

### Prerequisites

- Node.js (version 18 or newer)
- A terminal (Command Prompt, PowerShell, or VS Code integrated terminal)

### Step 1 — Open the terminal and navigate to the project folder

```bash
cd WEB101 PRACTICALS
```

### Step 2 — Create the Next.js project

```bash
npx create-next-app@latest
```

### Step 3 — Enter the project folder

```bash
cd tiktokweb
```

### Step 4 — Install additional packages

```bash
npm install react-icons
npm install react-hook-form
```

### Step 5 — Start the development server

```bash
npm run dev
```

You should see output indicating the development server is running and the local address, typically http://localhost:3000.

### Step 6 — Open the application in a browser

Navigate to: http://localhost:3000

---

## Steps – What I Built and Why

The practical was completed in three parts. The summary of each part follows.

---

### Part A – Project Initialization (Steps 1–6)

Step 1: Create the application by running `npx create-next-app@latest` with the options listed above.

Step 2: Remove default demo content and clean `globals.css` so only Tailwind is imported:

```css
@import "tailwindcss";
```

Step 3: Create the folder structure:

```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
```

Step 4: Implement `MainLayout.jsx` to provide:

- A left sidebar with navigation links (Home, Following, Explore, LIVE, Profile)
- A top header with a search input and login button

Step 5: Create basic Profile and Upload pages as placeholders.

Step 6: Test navigation with `npm run dev` and verify pages at `http://localhost:3000`.

---

### Part B – Main Interface Implementation (Steps 7–16)

Step 7: Install `react-icons` for icon components:

```bash
npm install react-icons
```

Step 8: Refine `MainLayout.jsx`:

- Sidebar width set to a fixed value
- Suggested accounts section in the sidebar
- Login prompt in the sidebar
- Search input in the header

Step 9: Implement `VideoCard.jsx` to display:

- Avatar placeholder
- Username and caption
- Video placeholder
- Like button that toggles state using `useState`
- Comment and share buttons

Step 10: Implement `VideoFeed.jsx` that renders multiple `VideoCard` components from an array of sample posts.

Step 11: Display `VideoFeed` on the home page (`app/page.js`).

Step 12: Implement the Following page with a grid of accounts and follow buttons.

Step 13: Implement the Explore page with a grid of trending hashtags and popular videos.

Step 14: Implement the Live page with a grid of live stream placeholders, showing titles and viewer counts.

Step 15: Enhance the Upload page with a drag-and-drop area and an adjacent form for caption, cover image, visibility, and post controls.

Step 16: Enhance the Profile page with:

- Profile photo placeholder and username
- Edit profile control
- Stats for Following, Followers, and Likes
- Bio section
- Tabs for Videos and Liked content
- Upload prompt when no videos exist

---

### Part C – Authentication Forms (Steps 17–20)

Step 17: Install `react-hook-form`:

```bash
npm install react-hook-form
```

Step 18: Implement the Login page with:

- Email and password fields (required)
- A submit button that shows a loading state
- Links for password recovery and signup
- Validation that displays error messages under empty inputs

Step 19: Implement the Signup page with validation rules:

| Field            | Validation requirements                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| Username         | Required. Minimum 3 characters. Letters, numbers, and underscores allowed.                        |
| Email            | Required. Must be a valid email format.                                                           |
| Password         | Required. Minimum 8 characters; must include uppercase, lowercase, number, and special character. |
| Confirm Password | Must match the Password field exactly.                                                            |
| Terms checkbox   | Must be checked to submit.                                                                        |

The submit button displays a loading state and is disabled while the request is in progress.

Step 20: Wire navigation to authentication pages:

- Sidebar and header login buttons link to `/login`
- Signup links navigate to `/signup`

---

## Output – Expected Application Behaviour

After completing the steps, the application includes the following pages:

| URL                               | Description                                        |
| --------------------------------- | -------------------------------------------------- |
| `http://localhost:3000/`          | Home — video feed with like/comment/share controls |
| `http://localhost:3000/following` | Following — grid of accounts to follow             |
| `http://localhost:3000/explore`   | Explore — trending hashtags and popular videos     |
| `http://localhost:3000/live`      | LIVE — grid of live streams with viewer counts     |
| `http://localhost:3000/upload`    | Upload — form to submit a new video                |
| `http://localhost:3000/profile`   | Profile — user profile, stats, and video grid      |
| `http://localhost:3000/login`     | Login — email and password form with validation    |
| `http://localhost:3000/signup`    | Signup — registration form with validation         |

Key features present in the final build:

- Sidebar consistently visible on the left
- Top header visible across pages with search and navigation
- Video feed with a working Like button
- Login and Signup forms with validation and error messages
- Connected pages with functioning navigation links

---

## Conclusion

This practical guided the construction of a TikTok-style web application using Next.js, React, Tailwind CSS, `react-icons`, and `react-hook-form`.

Primary lessons learned include:

- How Next.js file-based routing maps folders to routes
- How React components promote reuse
- How `useState` manages UI state (e.g., Like button)
- How Tailwind CSS expedites styling through utility classes
- How `react-hook-form` simplifies form validation and management

Challenges included understanding the interaction between folder structure and routing, and ensuring correct imports. These were resolved by validating file paths and testing incrementally.

Overall, the practical offered practical experience with modern web development tools and demonstrated how to assemble a functional single-page style application.

---
