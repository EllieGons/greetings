(function() {
    // Function to toggle color dropdown
    function toggleDropdown() {
        var colorOptions = document.getElementById("colorOptions");
        colorOptions.style.display = (colorOptions.style.display === "block") ? "none" : "block";
    }

    // Function to select color and update greeting card
    function selectColor(color) {
        var selectedColor = document.querySelector(".selected-color .color-preview");
        var selectedColorName = document.querySelector(".selected-color span");
        selectedColor.style.backgroundColor = color;
        selectedColorName.textContent = getColorName(color); // Set color name
        updateRender(color); // Update greeting card color in render
        toggleDropdown(); // Hide the dropdown after selecting a color
    }

    // Function to get color name based on color code
    function getColorName(color) {
        var colorNames = {
            "#B89F89": "Brown",
            "#B6B498": "Green",
            "#FBA7A9": "Red",
            "#C0BBC0": "Purple"
        };
        return colorNames[color] || "Pick a color";
    }

    // Function to update greeting card in render page
    function updateRender(color) {
        var userName = document.getElementById('user-name').value || 'Muffin'; // Get user name value

        // Update greeting card content
        document.getElementById('greeting').textContent = getGreeting(new Date().getHours()) + ', ' + userName + '!';
        document.getElementById('date').textContent = getDateInfo(new Date());

        // Update greeting card styles
        var renderFrame = document.getElementById('renderFrame');
        if (renderFrame) {
            renderFrame.contentWindow.postMessage({ type: 'updateCard', userName: userName, color: color }, '*');
        }
    }

    // Function to handle messages received from render page
    function handleMessage(event) {
        if (event.data.type === 'renderReady') {
            // Initial update of the render with default values
            updateRender('#B89F89'); // Default color: Brown
        }
    }

    // Add event listener for color dropdown
    document.querySelector(".selected-color").addEventListener('click', toggleDropdown);

    // Add event listeners for color options
    document.querySelectorAll(".color-option").forEach(function(option) {
        option.addEventListener('click', function() {
            var color = option.style.backgroundColor;
            selectColor(color);
        });
    });

    // Add event listener for input change to update render
    document.getElementById('user-name').addEventListener('input', function() {
        var color = document.querySelector(".selected-color .color-preview").style.backgroundColor;
        updateRender(color);
    });

    // Add event listener to listen for messages from render page
    window.addEventListener('message', handleMessage);
})();
