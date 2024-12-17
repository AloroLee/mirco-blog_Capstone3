document.addEventListener("DOMContentLoaded", () => {
    loginButton.addEventListener("click", async () => {
        const result = await login(
            username.value,
            password.value
        );

        // Check for a failed login attempt
        if (!result || !result.hasOwnProperty("statusCode") || result.statusCode != 200) {
            output.innerText = "Login Failed";
            return;
        }

        // SUCCESS - Store logged-in status
        localStorage.setItem("loggedIn", "true");

        // Redirect to the messages page
        window.location.href = "messages.html";
    }); // end click
}); // end loaded
