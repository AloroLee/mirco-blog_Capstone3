document.addEventListener("DOMContentLoaded", () => {
    const profilePicture = document.getElementById("profilePicture");
    const logoutButton = document.getElementById("logoutButton");
    const saveProfileButton = document.getElementById("saveProfile");

    // Load profile data from localStorage (if any)
    const nameField = document.getElementById("name");
    const bioField = document.getElementById("bio");

    const savedName = localStorage.getItem("profileName");
    const savedBio = localStorage.getItem("profileBio");

    if (savedName) nameField.value = savedName;
    if (savedBio) bioField.value = savedBio;

    // Save profile data to localStorage
    if (saveProfileButton) {
        saveProfileButton.addEventListener("click", () => {
            localStorage.setItem("profileName", nameField.value);
            localStorage.setItem("profileBio", bioField.value);
            alert("Profile updated successfully!");
        });
    }

    // Logout functionality
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("token");
        window.location.href = "login.html";
    });
});
