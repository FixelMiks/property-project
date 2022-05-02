const widgets = document.querySelectorAll(".widget");

widgets.forEach(widget => {
  widget.children[0].addEventListener("click", () => {
    widget.classList.toggle('hidden');
  });
});
