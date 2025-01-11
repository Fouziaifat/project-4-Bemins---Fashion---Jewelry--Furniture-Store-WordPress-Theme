//demo website link
// https://preview.themeforest.net/item/bemins-fashion-store-woocommerce-theme/full_screen_preview/50915491
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Toggle icon between menu and close icons
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
// this is for navbar scroll
window.onscroll = function () {
  let nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
};
// this is for image scroll
const headerBoxes = document.querySelectorAll(".demo-image .img-scroll");
headerBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundPosition = "center bottom";
  });
  box.addEventListener("mouseleave", () => {
    box.style.backgroundPosition = "center top";
  });
});

// btn
let myBtn = document.getElementById("myBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    myBtn.classList.add("show");
  } else {
    myBtn.classList.remove("show");
  }
};
