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

    var slideIndex = 0;
    showSlides();

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slide");

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
    }

    document.getElementById("prevBtn").addEventListener("click", function () {
        plusSlides(-1);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        plusSlides(1);
    });
});