// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const controlsEl = document.querySelector('div[id="controls"]');
const numberEl = controlsEl.children[0];
const createEl = controlsEl.children[1];
const destroyEl = controlsEl.children[2];
const divBoxesEl = document.querySelector('div[id="boxes"]');

const fragment = document.createDocumentFragment();

createEl.addEventListener('click', createBoxes);

destroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = numberEl.value;
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.classList.add('added')
    const divSize = 30 + (i * 10);
    console.log(divSize);
    divEl.style = `width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()}`; 
    console.log(divEl);
    fragment.append(divEl);  
    console.log(divEl, amount);
  }
  divBoxesEl.append(fragment);
};

function destroyBoxes() {
  numberEl.value = 0;
  divBoxesEl.innerHTML = '';  
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
