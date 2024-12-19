const form = document.getElementById("forgetPasswordForm");
        const responseMessage = document.getElementById("responseMessage");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("email").value.trim();

            if (email) {
                responseMessage.textContent = "A reset link has been sent to your email.";
                setTimeout(() => {
                    responseMessage.textContent = "";
                }, 3000);
            }
        });