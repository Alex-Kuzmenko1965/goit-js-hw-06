// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
const changeColorBtn = document.querySelector('.change-color');
// console.log(changeColorBtn);

const fonColor = document.querySelector('.widget');
// console.log(fonColor);

const valueColor = document.querySelector('span.color');
// console.log(valueColor);


changeColorBtn.addEventListener('click', event => {  
  document.body.style.backgroundColor = valueColor.textContent = getRandomHexColor();
  // console.log(valueColor.textContent);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
