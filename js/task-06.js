// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const inputEvent = document.getElementById('validation-input');
// console.log(inputEvent);
const validEl = document.querySelector('style');
// console.log(validEl);

// inputEvent.addEventListener('focus', () => {
//   console.log('focus');  
// });

inputEvent.addEventListener('blur', (event) => {
  event.preventDefault()
  // console.log(event.currentTarget.value.length, Number(inputEvent.dataset.length));
  if (event.currentTarget.value.length > inputEvent.dataset.length)
    {
      inputEvent.classList.remove('invalid');
      inputEvent.classList.add('valid');      
    } else {
      inputEvent.classList.remove('valid');
      inputEvent.classList.add('invalid');      
    }
    console.log(inputEvent);  
});
