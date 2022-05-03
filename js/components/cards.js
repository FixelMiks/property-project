const cards = document.querySelector(".cards__list");
const cardsItems = cards.children;
const more = document.querySelector(".btn-more");

const cardsItemsHide = () => {
  for (let i = 9; i < cardsItems.length; i++) {
    cardsItems[i].style.display = "none";
  }
}

const cardsItemsShow = () => {
  for (let i = 9; i < cardsItems.length; i++) {
    cardsItems[i].removeAttribute('style');
  }
}

cardsItemsHide();

more.addEventListener('click', () => {
  cardsItemsShow();
  more.style.display = "none";
});
