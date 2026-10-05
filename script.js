// =====================================================
// THE SOCIAL COLLECTIVE
// Main JavaScript
// =====================================================


// -----------------------------------------------------
// MOBILE NAVIGATION
// -----------------------------------------------------

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu
menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

});


// Close mobile menu when a navigation link is clicked
const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

    });

});