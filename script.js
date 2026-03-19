"use strict";

//Title 🟧 Module 8 - Events: Lesson 02. Event Listeners

//# Task 1

//  Step 1 — Select elements

const lessonTwoMessage = document.getElementById('lessonTwoMessage');

const btnAnonymous = document.getElementById('btnAnonymous');
const btnNamed = document.getElementById('btnNamed');
const btnArrow = document.getElementById('btnArrow');

//  Step 2 — Anonymous function

btnAnonymous.addEventListener('click', function () {
    lessonTwoMessage.textContent = 'Handled with anonymous function';
});

//  Step 3 — Named function

function handleNameClick() {
    lessonTwoMessage.textContent = 'Handled with named function';
}

btnNamed.addEventListener('click', handleNameClick);

//  Step 4 — Arrow function

btnArrow.addEventListener('click', () => {
    lessonTwoMessage.textContent = 'Handled with arrow function';
});


//# Task 2

//  Step 1 — Select elements

const toggleMessage = document.getElementById('toggleMessage');
const toggleBtn = document.getElementById('toggleBtn');

//  Step 2 — Track state

let isOn = false;

//  Step 3 — Named function (important)

function toggleState() {
    toggleMessage.classList.toggle('active');

    if (toggleMessage.classList.contains('active')) {
        toggleMessage.textContent = 'ON';
        toggleMessage.style.color = 'green';
    } else {
        toggleMessage.textContent = 'OFF';
        toggleMessage.style.color = 'red'
    }
}

//  Step 4 — Event listener

toggleBtn.addEventListener('click', toggleState);



























