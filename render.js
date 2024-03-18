// Get the current URL
const url = new URL(window.location.href);

// Extract the color and name parameters from the URL
const color = url.searchParams.get("color");
const userName = url.searchParams.get("user");

// Check if both color and name parameters are present
if (color && userName) {
    // Update greeting card content
    const greeting = getGreeting(new Date().getHours()) + ', ' + userName + '!';
    const dateInfo = getDateInfo(new Date());
    document.getElementById('greeting').textContent = greeting;
    document.getElementById('date').textContent = dateInfo;

    // Update greeting card styles
    document.getElementById('greeting-card').style.color = color; // Update text color
    document.getElementById('greeting-card').style.borderColor = color; // Update border color
} else {
    // Handle the case where one or both parameters are missing
    console.log("Both color and name parameters are required in the URL.");
}

// Function to get the current greeting
function getGreeting(hour) {
    if (hour >= 5 && hour < 12) {
        return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        return 'Good afternoon';
    } else {
        return 'Good evening';
    }
}

// Function to get the current date information
function getDateInfo(date) {
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return dayOfWeek[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}

// Listen for messages from the custom page
window.addEventListener('message', function(event) {
    if (event.data.type === 'updateCard') {
        // Update greeting card with new user name and color
        const userName = event.data.userName;
        const color = event.data.color;
        const greeting = getGreeting(new Date().getHours()) + ', ' + userName + '!';
        document.getElementById('greeting').textContent = greeting;
        document.getElementById('greeting-card').style.color = color;
        document.getElementById('greeting-card').style.borderColor = color;
    }
});
