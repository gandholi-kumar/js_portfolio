/* Menu show/hide */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
showMenu("nav-close", "nav-menu");

/* Menu hide on section click */
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((nav) => nav.addEventListener("click", linkAction));

/* ACCORDION SKILLS */
const skillsHeader = document.querySelectorAll(".skills__header"),
 skillsContent = document.getElementsByClassName("skills__content");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  console.log("itemClass: ", itemClass);

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*
// working code using call method

const skillsHeader = document.querySelectorAll(".skills__header");
function toggleSkills() {
  const skillsContent = document.getElementsByClassName("skills__content");
  return () => {
    let itemClass = this.parentNode.className;
    console.log("itemClass: ", itemClass);

    for (i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills__content skills__close";
    }

    if (itemClass === "skills__content skills__close") {
      this.parentNode.className = "skills__content skills__open";
    }
  };
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills.call(el));
});
*/