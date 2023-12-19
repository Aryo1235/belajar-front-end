document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header.navbar-container");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("bg-scroll");
    } else {
      header.classList.remove("bg-scroll");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  
});
