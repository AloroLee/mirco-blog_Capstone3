document.addEventListener("DOMContentLoaded", () => {
    // Get the navbar element
    const navbar = document.getElementById("navbar");

    // Check if the user is logged in by looking for a stored token or logged-in flag
    const loggedIn = localStorage.getItem("loggedIn");

    // If the user is not logged in, hide the navbar
    if (!loggedIn) {
        navbar.style.display = "none";  // Hide the navbar if not logged in
    } else {
        navbar.style.display = "block"; // Show the navbar if logged in
    }

    const loginButton = document.getElementById("loginButton");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const output = document.getElementById("output");

    loginButton.addEventListener("click", async () => {
        const result = await login(username.value, password.value);

        // Check for a failed login attempt
        if (!result || !result.hasOwnProperty("statusCode") || result.statusCode !== 200) {
            output.innerText = "Login Failed: Sign-up in account if you have not already.";
            return;
        }

        // SUCCESS - Store logged-in status
        localStorage.setItem("loggedIn", "true");

        // Show the navbar after successful login
        navbar.style.display = "block";

        // Redirect to the messages page
        window.location.href = "messages.html";
    }); // end click
}); // end loaded

// Function to handle login using the existing logic from main.js
async function login(username, password) {
    const BASE_URL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
    const NO_AUTH_HEADERS = { 'accept': 'application/json', 'Content-Type': 'application/json' };

    const payload = JSON.stringify({ "username": username, "password": password });
    const response = await fetch(BASE_URL + "/auth/login", {
        method: "POST",
        headers: NO_AUTH_HEADERS,
        body: payload
    });

    if (response.status !== 200) {
        console.log(response.status, response.statusText);
        return response.statusText;
    }
    const object = await response.json();
    localStorage.token = object.token;
    localStorage.username = object.username;
    return object;
}
