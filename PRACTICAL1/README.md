# TikTok Clone Project

## What I Built
A TikTok style web app using Next.js. Followed the lab instructions step by step to create something that looks and works like the real TikTok web interface.

## Step-by-Step Setup

### Getting Started
First, I opened my terminal and went to my GitHub folder:
```
cd my-github-repo
```

Then created the project:
```
npx create-next-app@latest
```

**My settings:**
- TypeScript? → No (stuck with JSX)
- ESLint? → Yes
- Tailwind CSS? → Yes (made styling way easier)
- src/ directory? → Yes (keeps things organized)
- App Router? → Yes (new way Next.js does routing)
- Custom import alias? → No

### Cleaning Up
Deleted the default stuff in `src/app/page.js` and put in my own basic component. Also cleaned up `globals.css` so it only had the Tailwind stuff.

### Folder Structure
I made these folders to keep things organized:
```
src/
├── components/
│   ├── layout/     (for header/sidebar stuff)
│   └── ui/         (for buttons, cards)
├── app/
│   ├── profile/
│   ├── upload/
│   ├── following/
│   ├── explore/
│   ├── live/
│   ├── login/
│   └── signup/
└── lib/            (for helper functions)
```

### Installing Stuff
```
npm install react-icons react-hook-form
```

## What's in the Project

### Sidebar Navigation
Made a sidebar that stays on the left with links to:
- For You page (home)
- Following
- Explore
- LIVE
- Profile
- Upload

Also added a "Suggested accounts" section and a login button for people who aren't signed in.

### Video Feed
Created a video feed that shows posts. Each video card has:
- Username and caption
- Audio info
- Like button (changes color when clicked)
- Comment button
- Share button

Used fake data for testing since we don't have a real backend.

### Other Pages
- **Explore page** - shows trending hashtags and popular videos in a grid
- **LIVE page** - displays live streams with viewer counts
- **Upload page** - form for uploading videos with caption, cover image, privacy settings
- **Profile page** - user profile info
- **Following page** - videos from people you follow

### Login and Signup Forms
Added proper forms with validation:
- Email format checking
- Password requirements (8 chars, uppercase, number, special char)
- Password confirmation
- Terms checkbox
- Loading states when submitting

Used React Hook Form for this because it's simpler than doing it manually.

## Running It
```
npm run dev
```
Then go to `http://localhost:3000`