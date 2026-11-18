
// ================= MOBILE NAVIGATION =================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Open and close the mobile navigation
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close the menu after clicking a navigation link
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ================= THEME SWITCHER =================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check whether a theme was previously saved
const savedTheme = localStorage.getItem("raffydex-theme");

// Apply the saved theme
if (savedTheme === "light") {

    document.body.classList.add("light-theme");
    themeIcon.textContent = "☾";

}

// Switch between dark and light themes
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {

        themeIcon.textContent = "☾";

        localStorage.setItem("raffydex-theme", "light");

    } else {

        themeIcon.textContent = "☀";

        localStorage.setItem("raffydex-theme", "dark");

    }

});


// ================= FOOTER YEAR =================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
