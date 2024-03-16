// Function to update the current time
function updateCurrentTime() {
    var currentTimeElement = document.getElementById("current-time");
    if (currentTimeElement) {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var ampm = hours >= 12 ? 'pm' : 'am';

        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours)

        // Ensure two digits for minutes
        minutes = (minutes < 10 ? "0" : "") + minutes;

        // Format time as HH:MM AM/PM
        var timeString = hours + ":" + minutes + " " + ampm;

        // Blink the colon with seconds
        if (seconds % 2 === 0) {
            timeString = timeString.replace(":", " ");
        }

        // Update the content of the current time element
        currentTimeElement.textContent = timeString;
    }
}

// Call the function initially to display the current time
updateCurrentTime();

// Update the current time every second
setInterval(updateCurrentTime, 1000);
