let menuIcon = document.querySelector(".menu__icon-menu");
let menuIconClose = document.querySelector(".menu__icons-close");
let navMenu = document.querySelector(".navbar__menu");
let backgroundMenu = document.querySelector(".background-overlay")

menuIcon.addEventListener("click", openMenu);
menuIconClose.addEventListener("click", closeMenu);

function openMenu() {
    navMenu.style.display = 'block';
    backgroundMenu.style.display = 'block';
}

function closeMenu() {
  navMenu.style.display = 'none';
  backgroundMenu.style.display = 'none';
}


window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    openMenu();
    backgroundMenu.style.display = 'none';
  } else {
    closeMenu();
  }
});