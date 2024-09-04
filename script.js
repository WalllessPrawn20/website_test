
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('teleportButton');
    var showGifButton = document.getElementById('showGifButton');
    var displayedGif = document.getElementById('displayedGif');

    function moveButton() {
        // Get the dimensions of the viewport
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;

        // Calculate a random position within the viewport
        var randomX = Math.floor(Math.random() * (viewportWidth - 150)); // Adjust button width if needed
        var randomY = Math.floor(Math.random() * (viewportHeight - 50)); // Adjust button height if needed

        // Move the button to the new position
        button.style.position = 'absolute'; // Ensure the button is absolutely positioned
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }

    function showGif() {
        // Set the src attribute to your GIF file path
        displayedGif.src = "lyt.gif"; // Replace with your GIF file path
        displayedGif.style.display = 'block'; // Make the GIF visible
    }

    // Move the button when hovered over (for desktops) and when touched (for mobiles)
    button.addEventListener('mouseover', moveButton);
    button.addEventListener('click', moveButton);
    button.addEventListener('touchstart', moveButton);

    // Show the GIF when the second button is clicked
    showGifButton.addEventListener('click', showGif);
});