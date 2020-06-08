// FUNCTIONS
function toggleActive(e) {
  removeActive();
  removeActiveCategory();
  this.classList.add("active");
  resetSkillItem();
}

function resetSkillItem() {
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
  removeActiveCategory();
  // showAnimation();
  document.querySelector(".circle").style.animationName = "loading";
  document.querySelector(".animation").classList.add("show");
  setTimeout(() => {
    removeAnimation();
    resetSkillItem();
    animate(e.target.id);
    this.classList.add("active");
  }, 5000);
}

function animate(id) {
  if (id === "prog") {
    skillItem.forEach((skill) => {
      const skillId = skill.id.split(" ");
      if (skillId[0] === "prog") {
        animation(skill, skillId[1]);
      }
    });
  } else if (id === "design") {
    skillItem.forEach((skill) => {
      const skillId = skill.id.split(" ");
      if (skillId[0] === "design") {
        animation(skill, skillId[1]);
      }
    });
  } else if (id === "web") {
    skillItem.forEach((skill) => {
      const skillId = skill.id.split(" ");
      if (skillId[0] === "web") {
        animation(skill, skillId[1]);
      }
    });
  }
}

function animation(skill, type) {
  // console.log(skill);
  if (type === "in") {
    skill.style.width = "25vw";
    skill.style.background = "#555";
  } else if (type === "ad") {
    skill.style.width = "35vw";
    skill.style.background = "#222";
  } else if (type === "ex") {
    skill.style.width = "50vw";
    skill.style.background = "#000";
  } else skill.style.width = "15vw";
}

function removeActiveCategory() {
  categoryButton.forEach((button) => button.classList.remove("active"));
}

// function showAnimation() {
//   document.querySelector(".circle").style.animationName = "loading";
//   document.querySelector(".container").classList.add("show");
//   setTimeout(() => {
//     removeAnimation();
//   }, 5000);
// }

function removeAnimation() {
  document.querySelector(".animation").classList.remove("show");
  setTimeout(() => {
    document.querySelector(".circle").style.animationName = "";
  }, 1000);
}

//ACTIVE BUTTON
const menuButtons = document.querySelectorAll(".btn-menu");
const skillItem = document.querySelectorAll(".skill-item");
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
// const progSkill = document.querySelectorAll(".prog");

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
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
