import './components/sidebar.js';
import './components/widget.js';
import './components/location.js';

const btnShowMoreCards = document.querySelector(".btn-more");
const hiddenCards = document.querySelectorAll(".card-link--hidden");

btnShowMoreCards.addEventListener("click", function () {
  hiddenCards.forEach(function (card) {
    card.classList.remove("card-link--hidden");
  });
});





const showMoreOptions = document.querySelector(".widget__btn-hidden-show");
const hiddenCheckBoxes = document.querySelectorAll(".checkbox--hidden");

showMoreOptions.onclick = function (e) {
  e.preventDefault();

  if (showMoreOptions.dataset.options == "hidden") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "block";
    });
    showMoreOptions.innerText = "Скрыть дополнительные опции";
    showMoreOptions.dataset.options = "visible";
  } else if (showMoreOptions.dataset.options == "visible") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "none";
    });
    showMoreOptions.innerText = "Показать ещё";
    showMoreOptions.dataset.options = "hidden";
  }
};
