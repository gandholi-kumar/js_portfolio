/* ************** Menu show/hide ************** */
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

/* ************** Menu hide on section click ************** */
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((nav) => nav.addEventListener("click", linkAction));

/* ************** ACCORDION SKILLS ************** */
const skillsHeader = document.querySelectorAll(".skills__header"),
  skillsContent = document.getElementsByClassName("skills__content");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }

  // if (itemClass === "skills__content skills__open") {
  //   this.parentNode.className = "skills__content skills__close";
  // } else if (itemClass === "skills__content skills__close") {
  //   this.parentNode.className = "skills__content skills__open";
  // }
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

/* ************** QUALIFICATION TABS ************** */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tabVal) => {
      tabVal.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/* ************** Services Modal ************** */
const modalView = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".servies__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

const showModal = function(modalClick) {
  modalView[modalClick].classList.add("active-modal");
};

modalBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    showModal(i);
  });
});

const closeModal = function(modalClick) {
  modalView[modalClick].classList.remove("active-modal");
};

modalClose.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    closeModal(i);
  });
});


