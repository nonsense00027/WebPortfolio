// FUNCTIONS
function toggleActive(e) {
  removeActive();
  removeActiveCategory();
  this.classList.add("active");
  skillItem.forEach((skill) => (skill.style.width = "0"));
}

function removeActive() {
  menuButtons.forEach((button) => button.classList.remove("active"));
}

function toggleMenu() {
  menuButton.classList.toggle("close");
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  navItems.forEach((item) => item.classList.toggle("show"));
}

function toggleActiveCategory(e) {
  console.log(e.target.id);
  animate(e.target.id);
  removeActiveCategory();
  this.classList.add("active");
}

function animate(id) {
  if (id === "prog") {
    progSkill.forEach((prog) => (prog.style.width = "100px"));
  }
}

function removeActiveCategory() {
  categoryButton.forEach((button) => button.classList.remove("active"));
}

//ACTIVE BUTTON
const menuButtons = document.querySelectorAll(".btn-menu");
const skillItem = document.querySelectorAll("#skill-item");

menuButtons.forEach((button) => button.addEventListener("click", toggleActive));

//MENU BUTTON
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

// CATEGORY BUTTON
const categoryButton = document.querySelectorAll(".category-item");
const progSkill = document.querySelectorAll(".prog");

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
