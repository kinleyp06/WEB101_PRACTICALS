
# Reflection.md

```markdown
# Reflection: Building the Weather API App

## What I Was Trying to Do

We had to build something that showed we understood REST APIs - GET, POST, PUT, DELETE. Not just reading about them but actually using them. The weather app made sense because everyone knows what checking the weather is like, so adding the save/edit/delete stuff would show the other methods.

## How It Went

### The Easy Parts

The HTML was straightforward - just boxes and buttons. I've made forms before. The GET request for weather worked pretty fast once I had the API key figured out. Just plug in the city name and the weather comes back.

The tabs were simple too. Just show/hide different divs when someone clicks.

### Where I Got Stuck

#### The API Key Thing

So I put the API key in and nothing worked. Just errors. I checked like ten times - the key was right there. Turns out when you sign up for OpenWeatherMap, the key takes like an hour or two to start working. Wish they'd mention that.

**Fix:** Waited an hour. Came back, worked fine. Next time I'll know.

#### That Weird JSONPlaceholder Format

This was annoying. The fake API we used for saving locations wants data in a specific way - title field, body field, userId. But I wanted to save city, country, and notes separately. So I had to stuff all my stuff into the body field as a JSON string, then unpack it later.

**Fix:** 
```javascript
// Putting data in
body: JSON.stringify({ 
  city: city, 
  country: country, 
  notes: notes 
})

// Getting data out
let bodyData = JSON.parse(item.body);
city = bodyData.city;