// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("header .nav");

// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    menu.classList.toggle("open");
});