document.addEventListener("DOMContentLoaded", function () {
    var userName = prompt("Please enter your name:");

    var userNameElement = document.getElementById("user-name");
    userNameElement.textContent = userName;

    var welcomeMessageElement = document.getElementById("welcome-message");
    welcomeMessageElement.innerHTML = "Welcome <span id=\"user-name\">" + userName + "</span> To Psyduck World!";

    var contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");

        if (nameInput.checkValidity()&& emailInput.checkValidity()) {
            alert("🐤 Thank you, " + nameInput.value + " with email address "+emailInput.value+"! 🐤\nYour message has been received. We'll get back to you soon!");
            var submittedValuesElement = document.getElementById("submitted-values");
            submittedValuesElement.innerHTML =
            "<h1><h1>";
        } else {
            alert("Please fill out all required fields with valid information.");
        }
    });
});