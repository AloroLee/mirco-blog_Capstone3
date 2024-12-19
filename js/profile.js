document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const profileImage = document.getElementById("profileImage");
    const uploadBtn = document.getElementById("uploadBtn");
    const saveProfileBtn = document.getElementById("saveProfile");
    const nameInput = document.getElementById("name");
    const bioInput = document.getElementById("bio");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password")
    const responseMessage = document.getElementById("responseMessage");

    const savedProfilePic = localStorage.getItem("profilePic");
    const savedName = localStorage.getItem("profileName");
    const savedBio = localStorage.getItem("profileBio");
    const savedEmail = localStorage.getItem("profileEmail");
    const savedPassword = localStorage.getItem("profilePassword")

    if (savedProfilePic) profileImage.src = savedProfilePic;
    if (savedName) nameInput.value = savedName;
    if (savedBio) bioInput.value = savedBio;
    if (savedEmail) emailInput.value = savedEmail;
    if (savedPassword) passwordInput.value = savedPassword;

    uploadBtn.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                profileImage.src = imageUrl;
                localStorage.setItem("profilePic", imageUrl); // Save to LocalStorage
            };
            reader.readAsDataURL(file);
        }
    });

    saveProfileBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const bio = bioInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        localStorage.setItem("profileName", name);
        localStorage.setItem("profileBio", bio);
        localStorage.setItem("profileEmail", email);
        localStorage.setItem("profilePassword", password);

        responseMessage.textContent = "Profile saved successfully!";
        setTimeout(() => responseMessage.textContent = "", 3000);
    });
    const logOutButton = document.getElementById("logout");
    logOutButton.addEventListener("click", async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        alert("You have been logged out.");
        window.location.href = "login.html";
    });
});
