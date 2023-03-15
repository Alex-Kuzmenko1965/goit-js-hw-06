// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const pressBtnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(pressBtnDecrement);
const pressBtnIncrement = document.querySelector('button[data-action="increment"]');
console.log(pressBtnIncrement);
const viewCounterValue = document.querySelector('span#value');
let counterValue = 0;

pressBtnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  viewCounterValue.textContent = counterValue;
  console.log(viewCounterValue);  
});

pressBtnIncrement.addEventListener('click', () => {
  counterValue += 1;
  viewCounterValue.textContent = counterValue;
  console.log(viewCounterValue);  
})
