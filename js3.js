// Select all video elements
var video = document.querySelectorAll('video');

// Add event listener to each video for play/pause functionality
video.forEach(play => 
    play.addEventListener('click', () => {
        // Toggle the 'active' class
        play.classList.toggle('active');

        // Play video if paused, otherwise pause and reset
        if (play.paused) {
            play.play();
        } else {
            play.pause();
            play.currentTime = 0;
        }
    })
);
