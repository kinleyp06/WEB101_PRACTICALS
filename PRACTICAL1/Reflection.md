## What I Did

### Building Components
I broke everything down into small pieces:
- `MainLayout.jsx` - the sidebar wrapper
- `VideoCard.jsx` - each video post
- `VideoFeed.jsx` - puts multiple videos together

This made it easier to fix things when something broke.

### Pages and Routing
Next.js makes routing simple; just make a folder and put `page.js` in it. So `/profile` is just a folder called profile with a page file inside.

### Forms with Validation
The login and signup forms were probably the trickiest part. Had to make sure:
- Email is actually an email
- Password is strong enough
- "Confirm password" matches
- Terms box is checked

Used React Hook Form's register function to connect inputs to validation rules.

## Challenges I faced

### 1. Broken CSS in the Instructions
The PDF had stuff like `min- h- screen` with random spaces everywhere. Took me a while to figure out why my styling wasn't working. Had to manually fix each className:

What I saw in the PDF:
```jsx
className="min- h- screen flex- col items- center"
```

What actually works:
```jsx
className="min-h-screen flex-col items-center"
```

Ended up using Tailwind's docs to check the correct class names. Also installed the Tailwind extension for VS Code which helps autocomplete.

### 2. JSX Syntax Errors
The code in the PDF was missing closing tags and had messed up JavaScript expressions. The array mapping was especially bad:

What it had:
```jsx
{Array.from({ length: 5 }).map((_, index) => {
  <div>...</div>
}}
```

What it should be:
```jsx
{Array.from({ length: 5 }).map((_, index) => (
  <div key={index}>...</div>
))}
```

The missing keys caused warnings in the console. Had to add those in.

### 3. React Hook Form Setup
The signup page code in the PDF was all over the place. Register functions were incomplete and error messages weren't showing. I watched a YouTube tutorial to understand how it's supposed to work.

This part was confusing at first:
```jsx
{...register('email', { 
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email'
  }
})}
```

The `...register` syntax spreads props into the input. Took me a bit to get that.

### 4. Password Validation Regex
The password regex in the PDF was completely broken. Had to look up how to do it properly:

What I ended up using:
```jsx
pattern: {
  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  message: 'Password must have uppercase, lowercase, number and special character'
}
```

This checks for all the requirements in one regex pattern.

### 5. Active Navigation Highlight
Wanted the sidebar links to light up when you're on that page. Found out about `usePathname` from Next.js:

```jsx
import { usePathname } from 'next/navigation';
const pathname = usePathname();

className={`flex items-center p-3 hover:bg-gray-100 rounded-md mx-2 ${pathname === '/' ? 'bg-gray-100' : ''}`}
```

### 6. Mobile Layout
The sidebar took up the whole screen on mobile. Fixed it with Tailwind's responsive classes:

```jsx
<div className="hidden md:block w-60 fixed h-full">
  {/* Sidebar - hidden on mobile */}
</div>
<main className="md:ml-60">
  {/* Main content - shifts on desktop */}
</main>
```

## What I Learned

**Next.js isn't that scary** - The App Router actually makes sense once you use it. Folders = routes, page.js = what shows up.

**React Hook Form saves time** - Doing form validation manually would've taken forever. The library handles most of it.

**Always check the docs** - The PDF had typos and errors. When something didn't work, looking at the official docs helped more than guessing.

**Console is your friend** - When things broke, the browser console told me exactly what line had the problem. Saved me hours of staring at code.

**Copy-paste isn't reliable** - The code from the PDF looked fine but had hidden spaces and missing characters. Typing it out myself (or carefully fixing it) worked better.

**Small wins add up** - Getting the like button to toggle felt good. Getting the form validation working felt even better. Building something piece by piece is satisfying.

## Would I Do Anything Different?

Next time I'd probably:
- Start with the mobile layout first, then make it bigger
- Test the validation earlier instead of at the end
- Commit to git more often (lost some work when I messed up)
- Ask for help sooner when stuck on regex stuff

Overall this project took me a few days but I actually understand how Next.js works now. The forms part was frustrating but now I get why validation matters.