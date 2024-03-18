document.addEventListener("DOMContentLoaded", function() {
    // Parse query parameters to get user name and color
    var urlParams = new URLSearchParams(window.location.search);
    var userName = urlParams.get('user') || 'Muffin'; // Default to 'Muffin' if user name not provided
    var color = urlParams.get('color') || '#B89F89'; // Default color to Brown if not provided

    // Update greeting, date, and link elements
    document.getElementById('greeting').textContent = getGreeting(new Date().getHours()) + ', ' + userName + '!';
    document.getElementById('date').textContent = getDateInfo(new Date());

    // Update greeting card styles
    var greetingCard = document.getElementById('greeting-card');
    greetingCard.style.color = color; // Update text color
    greetingCard.style.borderColor = color; // Update border color
});

// Function to get the current greeting
function getGreeting(hour) {
    if (hour >= 5 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    } else {
        return 'evening';
    }
}

// Function to get the current date information
function getDateInfo(date) {
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return dayOfWeek[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}
