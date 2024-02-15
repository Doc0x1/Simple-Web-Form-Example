// We use this function to get query parameters from the URL
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

// We create an event listener to wait for the DOM (Document Object Model) to be ready
// This is so that when the page loads, we can get the query parameters from the URL
document.addEventListener("DOMContentLoaded", function () {
    // We store the input from our form by obtaining the query parameters
    // And then we assign each of them to a variable
    const firstName = decodeURIComponent(getQueryVariable('firstName'));
    const lastName = decodeURIComponent(getQueryVariable('lastName'));
    const username = decodeURIComponent(getQueryVariable('username'));
    const password = decodeURIComponent(getQueryVariable('password'));

    // Now we get the HTML elements already in the HTML file by ID
    const firstLastNameEl = document.getElementById("first-last-name");
    const usernamePasswordEl = document.getElementById("username-password");

    // Now we change the text of the elements
    firstLastNameEl.innerText = `Hello ${firstName} ${lastName}!`
    usernamePasswordEl.innerText = `Your username is: ${username} and your password is: ${password}.`
})

