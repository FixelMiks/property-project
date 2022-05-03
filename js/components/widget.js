const widgets = document.querySelectorAll(".widget");

widgets.forEach(widget => {
  widget.children[0].addEventListener("click", () => {
    if (widget.classList.contains('hidden')) {
      widget.children[1].style.height = widget.children[1].scrollHeight + 'px';

      widget.classList.remove('hidden');
    } else {
      widget.children[1].removeAttribute('style');

      widget.classList.add('hidden');
    }
  });
});
