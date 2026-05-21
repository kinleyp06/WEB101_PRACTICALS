# Practical 1: Building a TikTok-Style Web App with Next.js

## 🎯 Aim

The goal of this practical is to **build a web application that looks and works like TikTok** using a tool called **Next.js**.

By the end of this practical, we'll know how to:

- Create a Next.js project from scratch
- Build pages that users can click between (like Home, Profile, Upload)
- Style everything neatly using Tailwind CSS
- Make forms that check if the user typed correct information

---

## ✅ Objectives

These are the specific things we set out to do:

- Open the terminal and create a new Next.js project
- Choose the right settings during setup (ESLint, Tailwind CSS, src folder, App Router)
- Organise the project into proper folders
- Build a sidebar and header that appear on every page
- Create a video feed that shows posts (like TikTok's "For You" page)
- Make a Like button that actually toggles on and off
- Build a Profile page, Upload page, Explore page, Live page, and Following page
- Create a Login form and Signup form with proper error checking
- Connect all pages together with working links

---

## 📚 Theory – Key Concepts Explained

Before building, it helps to understand what each tool does and why we use it.

### What is Next.js?

Next.js is a framework built on top of React. The special thing about it is **file-based routing** — this means if you create a folder called `profile` inside the `app` folder, it automatically becomes a page at `/profile`. You don't need to set up routes manually.

### What are React Components?

A component is like a **reusable piece of the page**. For example, instead of writing the same video card layout 10 times, you write it once as `VideoCard.jsx` and reuse it for every video. This keeps the code clean and organised.

### What is useState?

`useState` is a React feature that lets a component **remember something**. For example, when a user clicks the Like button, the app needs to remember whether it's liked or not. `useState` stores that yes/no value and updates the screen automatically.

```jsx
// Example: tracking if a video is liked
const [liked, setLiked] = useState(false);

// When the button is clicked, flip the value
const handleLikeClick = () => {
  setLiked(!liked);
};
```

### What is Tailwind CSS?

Tailwind CSS lets you style things **directly inside your HTML/JSX using short class names** instead of writing a separate CSS file.

```jsx
// Instead of writing CSS separately, you write classes like this:
<button className="bg-red-500 text-white px-4 py-2 rounded">Log in</button>
```

The class `bg-red-500` means red background, `text-white` means white text, etc.

### What is React Hook Form?

React Hook Form is a library that makes **forms easier to manage**. It handles:

- Tracking what the user typed
- Checking if the input is valid (e.g., is this a real email?)
- Showing error messages if something is wrong
- Only submitting the form when everything is correct

### What is Navigation in Next.js?

Instead of using a regular `<a>` tag (which reloads the whole page), Next.js uses `<Link>`. This makes page switching **instant and smooth**, just like a real app.

### What is Event Handling?

Event handling means making the app **react when the user does something** — like clicking a button, typing in a box, or submitting a form. In React, you attach functions to events:

```jsx
<button onClick={handleLikeClick}>Like</button>
```

---

## 🛠 Tools Used

| Tool                | What it does in this project                            |
| ------------------- | ------------------------------------------------------- |
| **Next.js**         | The main framework — builds pages, handles routing      |
| **React**           | The base library for building UI components             |
| **Tailwind CSS**    | Styles the app using short class names                  |
| **react-icons**     | Provides ready-made icons (heart, comment, share, etc.) |
| **react-hook-form** | Manages login and signup form validation                |
| **Node.js + npm**   | Runs JavaScript on your computer and installs packages  |
| **VS Code**         | The code editor used to write all the code              |
| **Terminal**        | Used to run commands like starting the server           |

---

## 📦 Functional Dependencies

These are the extra packages we installed on top of what Next.js gives you automatically.

### Install them by running these commands in your terminal:

```bash
npm install react-icons
npm install react-hook-form
```

### What they add to your project:

**react-icons** — gives you access to thousands of icons. We used Font Awesome icons:

```jsx
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
```

**react-hook-form** — makes forms smarter:

```jsx
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

### Summary of all dependencies in `package.json`:

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

> **Note:** `next`, `react`, `react-dom`, and `tailwindcss` are installed automatically when you run `npx create-next-app`. You only need to manually install `react-icons` and `react-hook-form`.

---

## 📁 Project Structure

This shows all the files and folders in the project and what each one does.

```
tiktokweb/                          ← your main project folder
│
├── public/                         ← images or files you want to use directly
│
├── src/                            ← all your actual code lives here
│   │
│   ├── app/                        ← every folder here = a page on the website
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
│   │   ├── globals.css             ← global styles (only Tailwind setup goes here)
│   │   ├── layout.js               ← wraps EVERY page with the MainLayout
│   │   └── page.js                 ← the home page "/" (shows the video feed)
│   │
│   ├── components/                 ← reusable pieces of the UI
│   │   │
│   │   ├── layout/
│   │   │   └── MainLayout.jsx      ← sidebar + top header (shown on every page)
│   │   │
│   │   └── ui/
│   │       ├── VideoCard.jsx       ← one single video post (avatar, caption, buttons)
│   │       └── VideoFeed.jsx       ← list of VideoCards (the full feed)
│   │
│   └── lib/                        ← helper functions (empty for now, used later)
│
├── package.json                    ← lists all dependencies
└── next.config.mjs                 ← Next.js settings
```

### Quick explanation of the most important files:

| File                               | Simple explanation                                                         |
| ---------------------------------- | -------------------------------------------------------------------------- |
| `app/layout.js`                    | Think of this as a frame — it wraps every page with the sidebar and header |
| `app/page.js`                      | The homepage. It just shows the VideoFeed component                        |
| `components/layout/MainLayout.jsx` | The sidebar on the left and the top bar                                    |
| `components/ui/VideoCard.jsx`      | One video post — shows username, caption, like button, etc.                |
| `components/ui/VideoFeed.jsx`      | Loads a list of VideoCards to make the feed                                |

---

## ⚙️ Project Setup – How to Run This Project

Follow these steps **in order** to get the project running on your computer.

### Before you start, make sure you have:

- **Node.js** installed (version 18 or newer) — download from https://nodejs.org
- A **terminal** (Command Prompt, PowerShell, or the terminal in VS Code)

---

### Step 1 — Open your terminal and go to your project folder

```bash
cd your-folder-name
```

---

### Step 2 — Create the Next.js project

```bash
npx create-next-app@latest
```

When it asks you questions, answer like this:

| Question                                            | Your answer | Why                                   |
| --------------------------------------------------- | ----------- | ------------------------------------- |
| What is your project named?                         | `tiktokweb` | Name of the folder                    |
| Would you like to use TypeScript?                   | **No**      | We use plain JavaScript               |
| Would you like to use ESLint?                       | **Yes**     | Catches coding mistakes               |
| Would you like to use Tailwind CSS?                 | **Yes**     | We use this for styling               |
| Would you like your code inside a `src/` directory? | **Yes**     | Keeps things organised                |
| Would you like to use App Router?                   | **Yes**     | The modern way to do pages in Next.js |
| Would you like to customize the import alias?       | **No**      | Default is fine                       |

---

### Step 3 — Go into your new project folder

```bash
cd tiktokweb
```

---

### Step 4 — Install the extra packages we need

```bash
npm install react-icons
npm install react-hook-form
```

---

### Step 5 — Start the app

```bash
npm run dev
```

You should see something like:

```
▲ Next.js ready
- Local: http://localhost:3000
```

---

### Step 6 — Open it in your browser

Go to: **http://localhost:3000**

You should see the TikTok-style homepage. 🎉

---

## 🔨 Steps – What Was Built and Why

The practical was divided into 3 parts. Here is what was done in each part, explained simply.

---

### 📌 Part A – Setting Up the Project (Steps 1–6)

#### Step 1: Create the App

Run `npx create-next-app@latest` and choose the settings shown above. This creates the starting project with all the basic files.

#### Step 2: Clean Up the Default Files

When Next.js is first created, it has demo content we don't need. We:

- Deleted the default content in `page.js` and replaced it with a simple welcome message
- Cleaned `globals.css` so only Tailwind CSS is included:

```css
@import "tailwindcss";
```

This removes all the default styles so we start fresh.

#### Step 3: Create the Folder Structure

Before writing code, we created all the folders we'll need:

```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
```

This is like setting up empty drawers before putting things in them.

#### Step 4: Create the Layout (Sidebar + Header)

We created `MainLayout.jsx` — a component that wraps every page and shows:

- A **sidebar** on the left with navigation links (Home, Following, Explore, LIVE, Profile)
- A **top header** with a search bar and Login button

Then we updated `layout.js` so every page automatically uses this layout.

#### Step 5: Build the First Two Pages

- **Profile page** (`/profile`) — shows a placeholder avatar, username, and follower stats
- **Upload page** (`/upload`) — shows a drag-and-drop area with a "Select File" button

#### Step 6: Test It

Run `npm run dev` and open `http://localhost:3000`. Click the navigation links to check the pages load correctly.

---

### 📌 Part B – Building the Main Interface (Steps 7–16)

#### Step 7: Install react-icons

```bash
npm install react-icons
```

This gives us access to icons like the heart ❤️, comment 💬, and share icons.

#### Step 8: Upgrade the Layout

We redesigned `MainLayout.jsx` to properly look like TikTok's website:

- Fixed sidebar taking up 240px on the left
- Suggested accounts section at the bottom of the sidebar
- A "Log in to follow creators" prompt in the sidebar
- Search bar in the middle of the top header

#### Step 9: Create the VideoCard Component

`VideoCard.jsx` represents **one single video post**. It shows:

- A grey circle for the user's avatar
- The username and caption
- A black rectangle as a video placeholder
- **Like button** — clicking it toggles between an empty heart and a red filled heart (using `useState`)
- Comment button
- Share button

#### Step 10: Create the VideoFeed Component

`VideoFeed.jsx` holds **a list of sample posts** and displays a `VideoCard` for each one:

```js
const DUMMY_POSTS = [
  { id: '1', username: '@user1', caption: 'Check out this cool video!', likes: 1234, ... },
  { id: '2', username: '@user2', caption: 'Learning to dance', likes: 5678, ... },
  ...
]
```

It maps through this list and renders a `<VideoCard>` for each post.

#### Step 11: Show the Feed on the Homepage

Update `page.js` (the home page) to import and display `<VideoFeed />`. Now the home page shows all the sample video posts.

#### Step 12: Create the Following Page

`/following` — shows a grid of placeholder user accounts with a red "Follow" button under each one.

#### Step 13: Create the Explore Page

`/explore` — shows:

- A grid of **trending hashtags** (e.g., #Trending1, #Trending2...)
- A grid of **popular video placeholders**

#### Step 14: Create the Live Page

`/live` — shows a 3-column grid of live stream placeholders. Each one shows the stream title, username, and viewer count.

#### Step 15: Upgrade the Upload Page

The upload page now has two sections side by side:

- **Left side:** drag-and-drop area showing file requirements (MP4/WebM, max 2GB, up to 10 minutes)
- **Right side:** a form with Caption input, Cover image preview, visibility selector (Public/Friends/Private), and Post/Discard buttons

#### Step 16: Upgrade the Profile Page

The profile page now has:

- A profile photo placeholder and username
- An "Edit profile" button
- Stats showing Following, Followers, and Likes counts
- A bio section
- Tabs to switch between "Videos" and "Liked"
- An "Upload your first video" prompt since there are no videos yet

---

### 📌 Part C – Login and Signup Forms (Steps 17–20)

#### Step 17: Install react-hook-form

```bash
npm install react-hook-form
```

This library makes it easy to validate forms (check that inputs are filled in correctly).

#### Step 18: Create the Login Page

`/login` — a clean login form with:

- **Email field** — must not be empty
- **Password field** — must not be empty
- A "Log in" button that shows "Logging in..." while waiting
- A "Forgot password?" link
- A "Don't have an account? Sign up" link at the bottom

If the user submits without filling in the fields, an error message appears under the empty input.

#### Step 19: Create the Signup Page

`/signup` — a registration form with stricter validation:

| Field            | Rules                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| Username         | Required. At least 3 characters. Only letters, numbers, underscores.                            |
| Email            | Required. Must be a valid email format (e.g. name@email.com)                                    |
| Password         | Required. At least 8 characters. Must have uppercase, lowercase, number, and special character. |
| Confirm Password | Must exactly match the Password field                                                           |
| Terms checkbox   | Must be ticked to submit                                                                        |

The submit button shows "Creating account..." while loading and is disabled to prevent double-clicking.

#### Step 20: Connect Login/Signup to the Layout

Updated `MainLayout.jsx` so the buttons actually work:

- The sidebar "Log in" button now goes to `/login`
- The sidebar "Sign up" button now goes to `/signup`
- The header "Log in" button also goes to `/login`

---

## 🖥 Output – What the App Looks Like

After completing all steps, the app has these working pages:

| URL                               | What you see                                      |
| --------------------------------- | ------------------------------------------------- |
| `http://localhost:3000/`          | Home — video feed with like/comment/share buttons |
| `http://localhost:3000/following` | Following — grid of accounts you can follow       |
| `http://localhost:3000/explore`   | Explore — trending hashtags and popular videos    |
| `http://localhost:3000/live`      | LIVE — grid of live streams with viewer counts    |
| `http://localhost:3000/upload`    | Upload — form to upload a video with caption      |
| `http://localhost:3000/profile`   | Profile — your profile, stats, and video grid     |
| `http://localhost:3000/login`     | Login — email + password form with validation     |
| `http://localhost:3000/signup`    | Signup — full registration form with validation   |

### Key features visible in the final output:

- ✅ Sidebar always visible on the left (TikTok-style navigation)
- ✅ Top header always visible with search bar and buttons
- ✅ Video feed with working Like button (heart turns red when clicked)
- ✅ Login and Signup forms show error messages for invalid input
- ✅ All pages are connected — clicking links takes you to the right page

---

## 📝 Conclusion

In this practical, we built a TikTok-style web application step by step using Next.js, React, Tailwind CSS, react-icons, and react-hook-form.

The most important things learned were:

- **How Next.js routing works** — creating a folder creates a new page automatically
- **How React components work** — write once, use many times (e.g., VideoCard)
- **How useState works** — lets buttons remember and update their state (e.g., Like button)
- **How Tailwind CSS works** — style things quickly using class names directly in JSX
- **How form validation works** — react-hook-form checks inputs and shows error messages

Some difficulties faced included understanding how the folder structure affects routing, and making sure components were imported correctly. These were fixed by carefully checking the file paths and testing each step before moving on.

Overall, this practical gave real hands-on experience with modern web development tools and made the idea of building a full web app feel much more achievable.

---

## 📚 References

1. React. (n.d.). _React documentation_. https://react.dev
2. Vercel. (n.d.). _Next.js documentation_. https://nextjs.org/docs
3. Tailwind Labs. (n.d.). _Tailwind CSS documentation_. https://tailwindcss.com/docs
4. npm, Inc. (n.d.). _react-icons package_. https://www.npmjs.com/package/react-icons
5. npm, Inc. (n.d.). _react-hook-form package_. https://www.npmjs.com/package/react-hook-form
6. Mozilla Developer Network. (n.d.). _Web development documentation_. https://developer.mozilla.org
7. freeCodeCamp. (n.d.). _How to create forms in React using React Hook Form_. https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/
