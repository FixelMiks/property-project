const widgets = document.querySelectorAll(".widget");

widgets.forEach(widget => {
  const title = widget.children[0];
  const body = widget.children[1];

  title.addEventListener("click", () => {
    if (widget.classList.contains('hidden')) {
      body.style.height = body.scrollHeight + 'px';
      widget.classList.remove('hidden');
    } else {
      body.removeAttribute('style');
      widget.classList.add('hidden');
    }
  });
});
