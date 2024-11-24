// Select all slider items in the main list
let items = document.querySelectorAll('.slider .list .item');

// Get the "Next" and "Previous" navigation buttons
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Select all thumbnail items
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Count the total number of slider items
let countItem = items.length;

// Variable to track the currently active slider item
let itemActive = 0;

// Function for "Next" button click
next.onclick = function() {
    // Increment the active item index
    itemActive = itemActive + 1;

    // If the index exceeds the last item, loop back to the first item
    if (itemActive >= countItem) {
        itemActive = 0;
    }

    // Update the slider to show the new active item
    showSlider();
}

// Function for "Previous" button click
prev.onclick = function() {
    // Decrement the active item index
    itemActive = itemActive - 1;

    // If the index goes below zero, loop back to the last item
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }

    // Update the slider to show the new active item
    showSlider();
}

// Automatically move to the next slide every 5 seconds
let refreshInterval = setInterval(() => {
    next.click(); // Simulate a "Next" button click
}, 5000);

// Function to update the active slider and thumbnail
function showSlider() {
    // Get the currently active slider item and thumbnail
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

    // Remove the "active" class from the old slider item and thumbnail
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Add the "active" class to the new active slider item and thumbnail
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Adjust the thumbnail position if it is out of view
    setPositionThumbnail();

    // Clear the existing interval and restart the automatic sliding
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click(); // Simulate a "Next" button click
    }, 5000);
}

// Function to adjust the position of the active thumbnail
function setPositionThumbnail() {
    // Get the active thumbnail
    let thumbnailActive = document.querySelector('.thumbnail .item.active');

    // Get its position relative to the viewport
    let rect = thumbnailActive.getBoundingClientRect();

    // If the active thumbnail is partially out of view, scroll it into view
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// Add click event listeners to all thumbnails
thumbnails.forEach((thumbnail, index) => {
    // When a thumbnail is clicked, update the active item index and show the slider
    thumbnail.addEventListener('click', () => {
        itemActive = index; // Set the active item index to the clicked thumbnail
        showSlider(); // Update the slider
    });
});
