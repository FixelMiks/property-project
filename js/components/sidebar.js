const sidebar = document.querySelector(".sidebar");
const btnMenu = document.querySelector(".btn-menu");
const body = document.querySelector("body");

btnMenu.addEventListener("click", () => {
  sidebar.classList.toggle("is-open");
  btnMenu.classList.toggle("is-active");
  body.classList.toggle("scroll-hidden");
});
