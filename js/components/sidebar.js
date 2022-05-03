const sidebar = document.querySelector(".sidebar");
const btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", () => {
  sidebar.classList.toggle("is-open");
  btnMenu.classList.toggle("is-active");
});
