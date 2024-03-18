document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const userName = params.get("name") || "User";
    const color = params.get("color") || "#000000";

    const greetingCard = document.getElementById("greetingCard");
    const greetingMessage = document.getElementById("greetingMessage");
    const currentDate = document.getElementById("currentDate");

    const timeOfDay = getTimeOfDay();
    const date = getCurrentDate();

    greetingMessage.textContent = `Good ${timeOfDay}, ${userName}!`;
    greetingMessage.style.color = color;
    currentDate.textContent = date;

    function getTimeOfDay() {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Morning";
        } else if (currentHour < 18) {
            return "Afternoon";
        } else {
            return "Evening";
        }
    }

    function getCurrentDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString('en-US', options);
    }
});
