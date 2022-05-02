// const checkBoxAny = document.querySelector("#location-05");
// const topLocationCheckboxes = document.querySelectorAll("[data-location-param]");

// checkBoxAny.addEventListener("change", function () {
//   if (checkBoxAny.checked) {
//     topLocationCheckboxes.forEach(function (item) {
//       item.checked = false;
//     });
//   }
// });

// topLocationCheckboxes.forEach(function (item) {
//   item.addEventListener("change", function () {
//     if (checkBoxAny.checked) {
//       checkBoxAny.checked = false;
//     }
//   });
// });

// const checkboxes = document.querySelectorAll(".location-checkbox__input");
// const checkboxAll = document.querySelector('.location-checkbox__input[name=location5]');

// checkboxAll.addEventListener('change', () => {
//   if (checkboxAll.checked) {
//     checkboxes.forEach(item => item.checked = false);
//     checkboxAll.checked = true;
//     console.log('f1');
//   }
// });

// checkboxes.forEach(item => {
//   item.addEventListener('change', () => {
//     if (checkboxAll.checked) {
//       checkboxAll.checked = false;
//       console.log('f2');
//     }
//   });
// });

// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', (e) => {
//     if (e.target.getAttribute('data-location') === '5') {
//       checkboxes.forEach(item => {
//         item.checked = false;
//         e.target.checked = true;
//       });
//     }
//   });
// });
