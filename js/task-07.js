// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const inputEvent = document.getElementById('font-size-control');
console.log(inputEvent);
const fontSizeEl = document.getElementById('text');
fontSizeEl.style.fontSize = "56px";
console.log(fontSizeEl);

inputEvent.addEventListener('input', (event) => {
  const rangeValue = event.currentTarget.value;
  fontSizeEl.setAttribute('style', `font-size: ${rangeValue}px;`);  
  console.log(fontSizeEl);  
});