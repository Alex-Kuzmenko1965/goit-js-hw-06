// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
galleryEl.style.display = 'flex';
galleryEl.style.listStyle = 'none';
galleryEl.style.gap = '20px';

const allGalleryEl = images.map(({url, alt}) => {
  let allLiEl;  
  return allLiEl = `<li><img src = ${url} alt = '${alt}' style = 'width: auto; height: 150px'/></li>`
}).join('');

galleryEl.insertAdjacentHTML('afterbegin', allGalleryEl);

// const allLiEl = [];

// images.forEach((name, index) => {
//   const liEl = document.createElement('li');
//   console.log(liEl); 
//   const imgEl = document.createElement('img');
//   console.log(imgEl);
  
//   imgEl.src = `${ name.url }`;
//   imgEl.alt = `${name.alt}`;
//   imgEl.style = 'width:auto; height: 180px';   
//   liEl.insertAdjacentElement('afterbegin', imgEl);  
//   allLiEl.push(liEl);
// });

// galleryEl.append(...allLiEl);
// console.log(galleryEl);