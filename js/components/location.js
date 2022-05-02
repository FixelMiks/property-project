const checkboxes = document.querySelectorAll('.location-checkbox__input');
const checkboxAny = document.querySelector('.location-checkbox__input[name=location5]');

checkboxAny.addEventListener('change', () => {
  if (checkboxAny.checked) {
    checkboxes.forEach(item => {
      if (item.name !== 'location5') {
        item.checked = false;
      }
    });
  }
});

checkboxes.forEach(item => {
  item.addEventListener('change', () => {
    if (item.name !== 'location5' && checkboxAny.checked) {
      checkboxAny.checked = false;
    }
  });
});
