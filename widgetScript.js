document.addEventListener('DOMContentLoaded', function() {
    // Function to parse URL parameters
    function getQueryParams() {
        var params = {};
        var queryString = window.location.search.substring(1);
        var pairs = queryString.split("&");
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return params;
    }

    // Function to update the widget based on URL parameters
    function updateWidget() {
        var queryParams = getQueryParams();
        var userName = queryParams.user || 'World';
        var color = queryParams.color || '#000000'; // Default color if not provided
        document.getElementById('greeting').textContent = 'Hello, ' + userName + '!';
        document.getElementById('greeting').style.color = color;
    }

    // Update widget on page load
    updateWidget();
});
