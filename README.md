# 🟧 Module 8 - Events: Lesson 02. Event Listeners

## 📘 Overview

This lesson builds on event listeners by focusing on **clean code
structure**, **function reuse**, and **real-world UI patterns**.

------------------------------------------------------------------------

## 🎯 Learning Objectives

By the end of this lesson, you should be able to:

-   Understand different ways to write event listeners
-   Use **named functions** effectively
-   Recognize when to use anonymous vs arrow functions
-   Apply event listeners to real UI components (modals, toggles)
-   Manage simple UI **state**

------------------------------------------------------------------------

## 🧠 Key Concepts

### Event Listener Pattern

``` javascript
element.addEventListener("event", handlerFunction);
```

------------------------------------------------------------------------

### Function Types

#### 1. Anonymous Function

``` javascript
button.addEventListener('click', function () {
  console.log('Clicked');
});
```

#### 2. Named Function (Preferred)

``` javascript
function handleClick() {
  console.log('Clicked');
}

button.addEventListener('click', handleClick);
```

#### 3. Arrow Function

``` javascript
button.addEventListener('click', () => {
  console.log('Clicked');
});
```

------------------------------------------------------------------------

## 🧩 Real-World Examples

### Modal (Open / Close)

``` javascript
openBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  if (event) event.preventDefault();
  modal.classList.toggle('hidden');
}
```

------------------------------------------------------------------------

### Toggle State (ON / OFF)

``` javascript
let isOn = false;

function toggleState() {
  isOn = !isOn;
}
```

Better approach:

``` javascript
element.classList.toggle('active');
```

------------------------------------------------------------------------

## 🌗 Dark Mode (Best Practice)

``` javascript
function toggleTheme() {
  document.body.classList.toggle('dark');
}
```

``` css
.dark {
  background: black;
  color: white;
}
```

------------------------------------------------------------------------

## 💾 Persisting State (localStorage)

To save user preferences:

``` javascript
localStorage.setItem('theme', 'dark');
```

To retrieve:

``` javascript
const savedTheme = localStorage.getItem('theme');
```

------------------------------------------------------------------------

## 🧠 Key Takeaways

-   Use **named functions** for clarity and reuse
-   Avoid unnecessary anonymous functions in large codebases
-   Prefer `classList.toggle()` for UI state
-   The **DOM can act as a source of truth**
-   Use `localStorage` to persist state across reloads

------------------------------------------------------------------------

## 💬 Reflection

Why is it better to store UI state in the DOM instead of only using
JavaScript variables?
- Storing UI state in the DOM via persistent storage or data attributes ensures that user preferences survive page refreshes and allows CSS to style the app automatically based on those attributes.

------------------------------------------------------------------------

## ✅ Status

✔ Lesson Completed\
✔ Concepts Understood\
✔ Ready for Next Lesson
