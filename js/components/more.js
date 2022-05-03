const more = document.querySelector(".widget__more");
const category = document.querySelector(".category");
const categoryItems = category.children;
const widgetBody = category.parentElement;


const categoryItemsHide = () => {
  for (let i = 5; i < categoryItems.length; i++) {
    categoryItems[i].style.display = "none";
  }
}

const categoryItemsShow = () => {
  for (let i = 5; i < categoryItems.length; i++) {
    categoryItems[i].removeAttribute('style');
  }
}

categoryItemsHide();

more.addEventListener('click', (e) => {
  e.preventDefault();

  if (more.classList.contains("hide")) {
    more.classList.remove("hide");
    more.textContent = "Показать ещё";

    categoryItemsHide();
    widgetBody.removeAttribute('style');
  } else {
    more.classList.add("hide");
    more.textContent = "Скрыть дополнительные опции";

    categoryItemsShow();
    widgetBody.style.height = widgetBody.scrollHeight + 'px';
  }
});

