"use strict";

// Function to open each modal window with overlay background.
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Function to close modal window when user clicks "x" or clicks overlay.
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Store class in variable to easily access when needed.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Loops through every "show-modal" class to call "openModal" function
// when user clicks on button to open window.
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

// Adding event listener to call "closeModal" function when user
// clicks on "x" or overlay to close modal window.
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
