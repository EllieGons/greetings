// Function to toggle the color options dropdown
    function toggleDropdown() {
        var colorOptions = document.getElementById("colorOptions");
        colorOptions.style.display = (colorOptions.style.display === "block") ? "none" : "block";
    }

    // Function to select a color
    function selectColor(color) {
        var selectedColor = document.querySelector(".selected-color .color-preview");
        var selectedColorName = document.querySelector(".selected-color span");
        selectedColor.style.backgroundColor = color;
        selectedColorName.textContent = getColorName(color); // Set color name
        updateGreetingCardAndLink(); // Update greeting card color instantly
        toggleDropdown(); // Hide the dropdown after selecting a color
    }

document.addEventListener('DOMContentLoaded', function() {
    

    // Function to get the name of the selected color
    function getColorName(color) {
        // Map colors to their corresponding names
        var colorNames = {
            "#B89F89": "Brown",
            "#B6B498": "Green",
            "#FBA7A9": "Red",
            "#C0BBC0": "Purple"
        };
        return colorNames[color] || "Pick a color";
    }

    // Function to generate a unique link with user input
    function generateUniqueLink(userName, color) {
        var url = new URL(window.location.href);
        var defaultLink = url.href.replace("greetings.html", "widget.html"); // Update to point to the widget HTML
        var query = "user=" + encodeURIComponent(userName) + "&color=" + encodeURIComponent(color);
        return defaultLink + '?' + query;
    }

    // Add event listener to copy link button
    document.getElementById('copy-link-btn').addEventListener('click', copyLink);

    // Initial update of greeting card and link
    updateGreetingCardAndLink();

    // Function to update the greeting card and link
    function updateGreetingCardAndLink() {
        var userName = document.getElementById('user-name').value || 'Muffin'; // Get user name value
        var color = document.querySelector(".selected-color .color-preview").style.backgroundColor;
        var link = generateUniqueLink(userName, color);

        // Update greeting, date, and link elements
        document.getElementById('greeting').textContent = getGreeting(new Date().getHours()) + ', ' + userName + '!';
        document.getElementById('date').textContent = getDateInfo(new Date());
        document.getElementById('generated-link').value = link;

        // Update greeting card styles
        document.getElementById('greeting-card').style.color = color; // Update text color
        document.getElementById('greeting-card').style.borderColor = color; // Update border color
    }

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

    // Function to copy the generated link to clipboard
    function copyLink() {
        var linkInput = document.getElementById('generated-link');
        linkInput.select();
        document.execCommand('copy');

        var copyLinkBtn = document.getElementById('copy-link-btn');
        var buttonText = copyLinkBtn.querySelector('.button-text');
        var icon = copyLinkBtn.querySelector('i');

        // Change the text of the button
        buttonText.textContent = 'Copied!';
        
        // Hide the icon
        icon.style.display = 'none';

        setTimeout(function() {
            // Revert back to original text after 2 seconds
            buttonText.textContent = 'Copy Link';
            // Show the icon
            icon.style.display = 'inline-block';
        }, 3000);
    }
});
