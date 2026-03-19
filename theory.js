"use strict";

//Title 🟧 Module 8 - Events: Lesson 02. Event Listeners

//? 🧱 1️⃣ New HTML Section (Lesson 02)

//  Add this below your existing sections:

//* 🧠 What this section teaches
//  We will demonstrate three ways to handle events:

//  </> Plain text
//  1. Anonymous function
//  2. Named function
//  3. Arrow function

//? 🧩 2️⃣ JavaScript block for Lesson 02

//* 🧠 What you will observe

//  </> Plain text
//  • Click button 1 → anonymous function runs
//  • Click button 2 → named function runs
//  • Click button 3 → arrow function runs
//  Same result, different structure.

//* ⚠️ Why this lesson matters

//  This is not about making things “work”.

//  It is about choosing the right structure:
//  </> Plain text
//  Anonymous → quick and simple
//  Named     → reusable and clean (preferred)
//  Arrow     → flexible when needed

//* 💡 Small improvement (optional)

//  You could reset the message after each click or add styling later — but for now, focus on:
//  </> Plain text
//  understanding structure, not features

//* 🎯 Your next step
//  1. Add this section to your HTML
//  2. Add the JS code
//  3. Test all three buttons

//* 🧠 Reflection question

//  All three buttons do similar things.
//  Why do you think developers still prefer named functions in larger applications?
//  Think about:
//  </> Plain text
//  • debugging
//  • reuse
//  • readability

//  Answer: Named functions are preferred in larger applications because their names can clearly reflect their purpose, remain unique, and help developers easily distinguish between different functions.


//! Feedback

//TODO  That’s a strong answer — you’ve captured the core idea well.
//  Let’s refine it slightly so it matches how developers think in real projects.

//* ✅ What you got right

//  You said:
//  • Names reflect purpose and help distinguish functions.
//  That is absolutely correct. Clear naming is one of the most important skills in programming.

//* 🔍 Let’s deepen it (important additions)

//? 1️⃣ Readability

button.addEventListener('click', handleLogin);

//  VS

button.addEventListener('click', function () { "Declaration or statement expected." }); 

//  The first one tells you immediately:
//  </> Plain text - "This handles login"

//  The second one forces you to read the code inside.

//? 2️⃣ Reusability

//  A named function can be reused:

function handleClick() {
    console.log('Clicked');
}

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);

//  Anonymous functions cannot be reused easily.

//? 3️⃣ Debugging (very important)

//  When an error happens:
//  </> Plain text - Error in handleClick

//  VS

//  </> Plain text - Error in anonymous function

//  Named functions make debugging much easier.

//? 4️⃣ Maintainability (real-world impact)

//  In large apps:
//  </> Plain text
//  100+ event listeners

//  • Without names → chaos
//  • With names → structure

//* 🧠 Improved version of your answer

//  A more complete version would be:
//  • Named functions are preferred because they improve readability, allow reuse, make debugging easier, and help developers understand the purpose of the code quickly.

//# 💡 Developer insight

//  In small scripts:
//  </> Plain text - Anonymous functions → OK

//  In real applications:
//  </> Plain text - Named functions → standard practice


//* 🎯 Where you are now

//  You now understand:
//  • Event listeners ✔
//  • Function references ✔
//  • Clean structure ✔
//  • Code readability ✔
//  That’s exactly the goal of "Lesson 02".

//? Final reflection (one step deeper)

//  If you had "10 buttons doing similar actions", would you:
//  A) Write 10 anonymous functions
//  B) Use 1 named function
//  Think like a developer managing a real project.

//  Answer: B) because the named function allow reuse and helps me to understand the purpose of the code quickly.

//! Feedback

//TODO  Correct — B is the right choice, and your reasoning is solid.

//  Let’s strengthen it slightly so it reflects real-world development thinking.

//* Why B is better (fully explained)

//? 1️⃣ Reusability

function handleClick() {
    console.log('Clicked');
}

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);

//  One function → many uses

//? 2️⃣ Readability

//  </> JavaScript - handleClick

//  Immediately tells you:
//  </> Plain text - "This function handles clicks"

//  No need to read inside the function.

//? 3️⃣ Maintainability

//  Imagine you need to change behavior:
//  </> Plain text
//  • Change logic in 1 place ✔
//  • Instead of 10 places ❌

//? 4️⃣ Debugging

//  Errors become clearer:
//  </> Plain text - Error in handleClick ✔

//  Instead of:
//  </> Plain text - Error in anonymous function ❌

//# 🧠 Real developer mindset

//  </> Plain text
//  • Small code → anything works
//  • Large application → structure matters

//  This is why professionals prefer:
//  </> Plain text
//  • Named functions → scalable code

//! 🔥 One step deeper (important insight)

//  Even better, developers often combine reuse with parameterisation:
//  • Parameterisation is the process of defining a system, curve, surface, or model using independent variables called parameters, rather than direct implicit equations.
//  • In JavaScript, parameterisation is the practice of making functions, tests, or configurations dynamic by replacing hardcoded values with variables (parameters). 

function updateMessage(text) {
    MessageChannel.textContent = text;
}

btn1.addEventListener('click', () => updateMessage('Hello'));
btn2.addEventListener('click', () => updateMessage('Hello'));

//  Now you have:
//  </> Plain text
//  1 function
//  + flexible behavior

//  This is how real applications avoid repetition.

//* 🎯 Where you are now

//  You have built a strong foundation in:
//  • Event listeners
//  • Function references
//  • Code structure
//  • Reusability
//  You are now thinking like a developer, not just writing code.

//? Final reflection

//* If you had to build a menu system with 20 buttons, would you:
//  A) Create 20 different functions
//  B) Use 1–2 reusable functions with parameters
//  Think in terms of scalability and maintainability.

//  Answer: B) because a reusable function can use parameters so that we can pass in different data each time we call it, instead of hard‑coding values inside the function.

//! Feedback

//TODO  Exactly right — that’s the mindset developers use.

//  You have identified the key idea:
//  • Use one reusable function + pass different data (parameters) instead of duplicating logic.

//? Why this scales well

//! ❌ Hard-coded approach (not scalable)

function handleBtn1() {
    MessageChannel.textContent = 'Home';
}

function handleBtn2() {
    MessageChannel.textContent = 'About';
}

//! Problems
//  </> Plain text
//  • Repeated logic
//  • Hard to maintain
//  • More code = more bugs

//? ✅ Reusable + parameters (scalable)

function updateMessage(text) {
    message.textContent = text;
}

btnHome.addEventListener('click', () => updateMessage('Home'));
btnAbout.addEventListener('click', () => updateMessage('About'));

//* Benefits:
//  </> Plain text
//  ✔ One function
//  ✔ Flexible behavior
//  ✔ Easy to update
//  ✔ Cleaner code

//? 🧠 How developers think

//  </> Plain text
//  Avoid repetition (DRY principle)
//          ↓
//  Extract common logic
//          ↓
//  Pass differences as parameters

//* This pattern appears everywhere:
//  • menus
//  • forms
//  • UI updates
//  • API handling
//  • components

//? 🔥 Small upgrade (real-world pattern)

//  Instead of hardcoding values in JS, we often use data attributes in HTML:

``` HTML
<button data-text="Home">Home</button>
<button data-text="About">About</button>
```

function handleClick(event) {
    message.textContent = event.target.dataset.text;
}

buttons.forEach(btn => {
    btn.addEventListener('click', handleClick)
});

//  Now:
//  </> Plain text
//  HTML controls data
//  JS handles behavior

//? Final reflection

//* Why is it better to separate data (HTML) from logic (JavaScript)?
//  Think about:
//  </> Plain text
//  flexibility
//  maintenance
//  team collaboration

//  Answer: Separating HTML data from JavaScript logic makes content easier to read as plain text, more flexible to reuse or redesign, simpler to maintain over time, and clearer for different team members to work on in parallel.


//TODO  Let’s add a new card that reinforces Lesson 02 and connects directly to real UI behavior.

//* 🧱 Goal of the new card

//  We will build a Toggle Card:
//  Click button
//      ↓
//  Text switches between: "ON"    ↔   "OFF"

//  This introduces a key concept:
//  • STATE (very important for future lessons)

//? 🧩 1️⃣ Add new HTML card

//  Place this inside your lessonTwo section (next to your existing card):
//  </> HTML

//* 🧠 What this teaches

//  • We are no longer just reacting…
//  • We are managing state

//? 🧩 2️⃣ JavaScript (add below existing Lesson 02 code)

//  Step 1 — Select elements
//  </> JavaScript

//  Step 2 — Track state
//  </> JavaScript

//  Step 3 — Named function (important)
//  </> JavaScript

//  Step 4 — Event listener
//  </> JavaScript

//? 🔍 How it works

//  Initial → OFF
//  • Click → isOn = true → ON
//  • Click → isOn = false → OFF

//# 💡 Why this card is important

//  You just introduced:
//  • STATE MANAGEMENT

//  This is used in:
//  • modals (open/closed)
//  • menus (open/closed)
//  • dark mode (on/off)
//  • forms (valid/invalid)
//  • apps (React, Vue, etc.)

//? 🔥 Optional upgrade (visual feedback)

//  You could later enhance it:
//  </> JavaScript

//# 🧠 Developer thinking

//  • Event → triggers function
//  • Function → updates state
//  • State → updates UI
//  This is a core architecture pattern.

//? 🎯 Your next step
//  1. Add the new card
//  2. Add the JS
//  3. Test toggle behavior

//* How could you save the theme preference so it stays after refresh?
//  Answer: Saving a theme preference so it persists after a page refresh is best achieved using localStorage in JavaScript, which stores data locally in the browser cookies with no expiration date.

//! Feedback

//TODO  Your answer is correct and well explained.

//  Small refinement:
//  • localStorage stores data in the browser (not exactly cookies, but similar idea)
//  • It has no expiration, so it persists until manually cleared

//  👉 That’s exactly what we use for:
//  • theme preferences
//  • user settings
//  • UI state
