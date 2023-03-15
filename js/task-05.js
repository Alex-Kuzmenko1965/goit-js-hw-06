// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const inputEvent = document.querySelector('input#name-input');
console.log(inputEvent);
const outputEvent = document.querySelector('span#name-output');
console.log(outputEvent.textContent);

// inputEvent.addEventListener('focus', () => {
//   console.log('+');  
// });

// inputEvent.addEventListener('blur', () => {
//   console.log('-');  
// });

inputEvent.addEventListener('input', (event) => {
  if (event.currentTarget.value === '')
    {
      outputEvent.textContent = 'Anonymous';
      console.log(event.currentTarget.value);
    } else {
      outputEvent.textContent = event.currentTarget.value;
      console.log(event.currentTarget.value);
    }  
});
