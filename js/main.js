// MENU BUTTON FUNCTIONS
function toggleMenu() {
  whole.classList.toggle("active");
  menuButton.classList.toggle("close");
  menu.classList.toggle("show");
  header.classList.toggle("active");
}

// MENU NAV FUNCTIONS
function removeActive() {
  menuButtons.forEach((button) => button.classList.remove("active"));
}

function toggleActive(e) {
  toggleMenu();
  removeActive();
  removeActiveCategory();
  this.classList.add("active");
  resetSkillItem();
}

// SKILLS FUNCTIONS
function toogleBadges(type) {
  badges.forEach((badge) => {
    if (type === 0) {
      badge.classList.add("active");
    } else {
      badge.classList.remove("active");
    }
  });
}
function removeActiveCategory() {
  categoryButton.forEach((button) => button.classList.remove("active"));
}

function removeAnimation() {
  document.querySelector(".animation").classList.remove("show");
  setTimeout(() => {
    document.querySelector(".circle").style.animationName = "";
  }, 1000);
}

function resetSkillItem() {
  skillItem.forEach((skill) => (skill.style.width = "0"));
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
    skill.style.width = "35vw";
  } else if (type === "ad") {
    skill.style.width = "45vw";
  } else if (type === "ex") {
    skill.style.width = "60vw";
  } else skill.style.width = "25vw";
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
  }, 3000);
}

//SECTION OBSERVER FUNCTIONS
const options = {
  // rootMargin: "-1000px 0px 0px 0px",
  threshold: 0.35,
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      if (entry.target.id === "skills") {
        toogleBadges(0);
      } else {
        toogleBadges(1);
      }
    }
  });
}, options);

// SECTIONS OBSERVER
const sections = document.querySelectorAll("section");
console.log(sections);
sections.forEach((section) => {
  observer.observe(section);
});
const whole = document.querySelector(".whole");
const menuButton = document.querySelector(".menu-btn");
const header = document.querySelector(".header");
menuButton.addEventListener("click", toggleMenu);
const menu = document.querySelector(".menu");
const title = document.querySelector(".title");
const about = document.querySelector(".about-me");
const content = document.querySelector(".content");
const subContent = document.querySelector(".sub-content");

// ACTIVE BUTTON
const menuButtons = document.querySelectorAll(".btn-menu");
menuButtons.forEach((button) => button.addEventListener("click", toggleActive));

// SKILLS CATEGORY
const categoryButton = document.querySelectorAll(".category-item");
const skillItem = document.querySelectorAll(".skill-item");
const badges = document.querySelectorAll(".badge");

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

$(".logo a").on("click", function (e) {
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
