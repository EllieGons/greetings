function toggleDropdown() {
    var colorOptions = document.getElementById("colorOptions");
    colorOptions.style.display = (colorOptions.style.display === "block") ? "none" : "block";
}

function selectColor(color) {
    var selectedColor = document.querySelector(".selected-color .color-preview");
    var selectedColorName = document.querySelector(".selected-color span");
    selectedColor.style.backgroundColor = color;
    selectedColorName.textContent = getColorName(color);
    updateGreetingCardAndLink();
    toggleDropdown();
}

function getColorName(color) {
    var colorNames = {
        "#B89F89": "Brown",
        "#B6B498": "Green",
        "#FBA7A9": "Red",
        "#C0BBC0": "Purple"
    };
    return colorNames[color] || "Pick a color";
}




function updateGreetingCardAndLink() {
    var userName = document.getElementById('user-name').value || 'Muffin'; 
    var color = document.querySelector(".selected-color .color-preview").style.backgroundColor;
    var link = generateUniqueLink(userName, color);

    
    document.getElementById('greeting').textContent = getGreeting(new Date().getHours()) + ', ' + userName + '!';
    document.getElementById('date').textContent = getDateInfo(new Date());
    document.getElementById('generated-link').value = link;

    
    document.getElementById('greeting-card').style.color = color;
    document.getElementById('greeting-card').style.borderColor = color;
}



function getGreeting(hour) {
    if (hour >= 5 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    } else if (hour >= 18 && hour < 22) {
        return 'evening';
    } else {
        return 'night';
    }
}


function getDateInfo(date) {
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return dayOfWeek[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear();
}


function generateUniqueLink(userName, color) {
    var defaultLink = "https://elliegons.github.io/greetings/widget/";
    var query = "user=" + encodeURIComponent(userName) + "&color=" + encodeURIComponent(color);
    return defaultLink + '?' + query;
}




function copyLink() {
    var linkInput = document.getElementById('generated-link');
    linkInput.select();
    document.execCommand('copy');

    var copyLinkBtn = document.getElementById('copy-link-btn');
    var buttonText = copyLinkBtn.querySelector('.button-text');
    var icon = copyLinkBtn.querySelector('i');

    
    buttonText.textContent = 'Copied!';
    
    
    icon.style.display = 'none';

    setTimeout(function() {
        buttonText.textContent = 'Copy Link';
        icon.style.display = 'inline-block';
    }, 3000);
}



document.getElementById('copy-link-btn').addEventListener('click', copyLink);


document.getElementById('user-name').addEventListener('input', updateGreetingCardAndLink);


updateGreetingCardAndLink();
