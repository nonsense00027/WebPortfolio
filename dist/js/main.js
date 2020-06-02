//ACTIVE BUTTON
const menuButtons = document.querySelectorAll(".btn-menu");

function toggleActive(e) {
  removeActive();
  this.classList.add("active");
}

function removeActive() {
  menuButtons.forEach((button) => button.classList.remove("active"));
}
menuButtons.forEach((button) => button.addEventListener("click", toggleActive));

//MENU BUTTON
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuButton.classList.toggle("close");
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  navItems.forEach((item) => item.classList.toggle("show"));
}

// CATEGORY BUTTON
const categoryButton = document.querySelectorAll(".btn");

function toggleActiveCategory(e) {
  removeActiveCategory();
  this.classList.add("active");
}

function removeActiveCategory() {
  categoryButton.forEach((button) => button.classList.remove("active"));
}
categoryButton.forEach((button) =>
  button.addEventListener("click", toggleActiveCategory)
);

// Smooth Scrolling
$(".menu-nav a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
