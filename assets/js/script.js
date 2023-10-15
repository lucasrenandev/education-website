/* ===== Strict mode ===== */
"use strict";

/* ===== Header ===== */
const loginIcon = document.getElementById("login-icon");
const formContent = document.querySelector(".header .form");

loginIcon.addEventListener("click", () => {
    formContent.classList.toggle("active");
    navBar.classList.remove("active");
    menuIcon.classList.remove("fa-times");
});

/* ===== Responsive menu ===== */
const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active");
    this.classList.toggle("fa-times");
    formContent.classList.remove("active");
});

window.addEventListener("scroll", () => {
    formContent.classList.remove("active");
    navBar.classList.remove("active");
    menuIcon.classList.remove("fa-times");
});

/* ===== Review section ===== */
const reviewSlide = new Swiper(".review-container", {
    grabCursor: true,
    spaceBetween: 10,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
});