const widgets = document.querySelectorAll(".widget");

widgets.forEach(widget => {
  widget.addEventListener("click", () => {
    widget.classList.toggle('hidden');
  });
});
