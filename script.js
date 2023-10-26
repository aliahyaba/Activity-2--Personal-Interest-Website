document.querySelector(".loader-wrapper").style.display = "flex";

setTimeout(function () {
  document.querySelector(".loader-wrapper").style.display = "none";
}, 2000);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
