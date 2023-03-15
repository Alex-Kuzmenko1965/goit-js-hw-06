// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const linkElement = document.querySelector('ul#ingredients');
const allLiEl = [];

ingredients.forEach((name, index) => {
  const liEl = document.createElement('li');

  liEl.classList.add('item')
  liEl.insertAdjacentHTML('afterbegin', name);
  console.log(liEl);
  console.log(allLiEl);
  allLiEl.push(liEl);
});

linkElement.append(...allLiEl);
console.log(linkElement);

