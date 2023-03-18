// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const pressBtnDecrement = document.querySelector('button[data-action="decrement"]');
const pressBtnIncrement = document.querySelector('button[data-action="increment"]');
const viewCounterValue = document.getElementById('value');
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
