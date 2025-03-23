document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting

        let user = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;
        let check = document.getElementById("remember");

        // Error message elements
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");
        let termsError = document.getElementById("checkboxError");

        // Reset error messages
        emailError.textContent = "";
        passwordError.textContent = "";
        termsError.textContent = "";

        let isValid = true;

        // Correct Email Validation using Regex
        let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (user === "") {
            emailError.textContent = "Username is required.";
            isValid = false;
        } else if (!emailPattern.test(user)) {
            emailError.textContent = "Enter a valid Gmail address (e.g., example@gmail.com).";
            isValid = false;
        }

        // Password Validation
        if (password === "") {
            passwordError.textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters.";
            isValid = false;
        }

        // Checkbox Validation
        if (!check.checked) {
            termsError.textContent = "You must agree to the terms and conditions.";
            isValid = false;
        }

        // Debugging: Log validation status
        console.log("Validation Status:", isValid);

        // If validation fails, stop form submission
        if (!isValid) {
            return false;
        }

        // If validation passes, allow form submission
        this.submit();
    });
});
