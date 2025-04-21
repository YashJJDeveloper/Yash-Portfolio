// Select Elements
var themeSwitch = document.getElementById("theme-switch");
var body = document.body;
var menuToggle = document.getElementById("menu-toggle");
var navMenu = document.getElementById("nav-menu");
var navLinks = document.getElementsByClassName("nav-link");
var filterBtns = document.getElementsByClassName("filter-btn");
var projectCards = document.getElementsByClassName("project-card");
var contactForm = document.getElementById("contact-form");
var copyEmailBtn = document.getElementById("copy-email");
var toast = document.getElementById("toast");

// Theme Toggle Function
themeSwitch.onchange = function () {
    if (themeSwitch.checked) {
        body.className = "dark-theme";
    } else {
        body.className = "light-theme";
    }
};

// Mobile Menu Toggle
menuToggle.onclick = function () {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
};

// Close mobile menu when a nav link is clicked
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function () {
        navMenu.style.display = "none";
    };
}

// Navbar Scroll Effect
window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.padding = "15px 0";
        navbar.style.boxShadow = "0 1px 10px rgba(0, 0, 0, 0.05)";
    }
};

// Project Filtering
for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].onclick = function () {
        var filter = this.getAttribute("data-filter");

        for (var j = 0; j < projectCards.length; j++) {
            var category = projectCards[j].getAttribute("data-category");
            if (filter === "all" || filter === category) {
                projectCards[j].style.display = "block";
            } else {
                projectCards[j].style.display = "none";
            }
        }
    };
}

// Copy Email to Clipboard
copyEmailBtn.onclick = function (e) {
    e.preventDefault();
    var email = copyEmailBtn.textContent;
    var tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast("Email copied to clipboard!");
};

// Contact Form Submission
contactForm.onsubmit = function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset();
};

// Toast Notification Function
function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(function () {
        toast.style.display = "none";
    }, 3000);
}

// Image Loading Animation
window.onload = function () {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].className += " loaded";
    }
};
