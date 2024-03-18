document.addEventListener("DOMContentLoaded", function () {
    const greetingForm = document.getElementById("greetingForm");
    const embedLink = document.getElementById("embedLink");

    greetingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const color = document.getElementById("colorSelect").value;

        const embedUrl = `render.html?name=${userName}&color=${color}`;
        embedLink.innerHTML = `<p>Embed this greeting card on your Notion page:</p><a href="${embedUrl}" target="_blank">${embedUrl}</a>`;
    });
});
