document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const queryString = `?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

        window.location.href = `welcome.html${queryString}`;
    });
});
