document.addEventListener("DOMContentLoaded", function () {

    // MOBILE MENU
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

    // SCROLL TO TOP
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // PORTFOLIO
    const portfolioButtons =
        document.querySelectorAll(".portfolio-buttons button");

    portfolioButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            portfolioButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });

    // CONTACT FORM
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you! Your message has been received.");

            contactForm.reset();
        });
    }

    console.log("JBTC is working!");
});