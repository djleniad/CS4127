// Get the "Next" and "Previous" buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Get the carousel container and the list of items inside it
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

// Attach a click event listener to the "Next" button
nextButton.onclick = function() {
    showSlider('next'); // Call the showSlider function with "next" as the argument
};

// Attach a click event listener to the "Previous" button
prevButton.onclick = function() {
    showSlider('prev'); // Call the showSlider function with "prev" as the argument
};

// Variable to prevent rapid consecutive clicks
let unAcceppClick;

// Function to handle the sliding logic
const showSlider = (type) => {
    // Temporarily disable pointer events for both buttons to prevent rapid clicking
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    // Remove any existing animation classes ('next' or 'prev') from the carousel
    carousel.classList.remove('next', 'prev');

    // Get all items in the carousel as a NodeList
    let items = document.querySelectorAll('.carousel .list .item');

    // Check the type of sliding action
    if (type === 'next') {
        // If "Next" is clicked, move the first item to the end of the list
        listHTML.appendChild(items[0]);
        // Add the 'next' animation class to the carousel for visual feedback
        carousel.classList.add('next');
    } else {
        // If "Previous" is clicked, move the last item to the beginning of the list
        listHTML.prepend(items[items.length - 1]);
        // Add the 'prev' animation class to the carousel for visual feedback
        carousel.classList.add('prev');
    }

    // Clear any existing timeout and reset it to re-enable buttons after 2 seconds
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        // Re-enable pointer events for both buttons
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000); // Set a delay of 2000ms (2 seconds)
};
