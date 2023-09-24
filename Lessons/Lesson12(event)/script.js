// Задание:
// Cоздать и застилизовать по указанному макету элементы.
// Описать работу указанных событий
const root = document.querySelector('#root');
const div = document.createElement('div');
div.classList.add('block');
root.append(div);
const img = document.createElement('img');
img.src = 'https://trashbox.ru/files/1560824_ad2c44/21-3.png';
img.classList.add('phone');
const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'Add to Cart';
const title = document.createElement('h3');
title.innerText = 'Title: Iphone 10';
const price = document.createElement('h4');
price.innerText = 'Price: 1000$';
const clos = document.createElement('span');
clos.innerText = 'X';
clos.classList.add('clos');
div.append(img, btn, title, price, clos);

div.addEventListener('click', () => {
  console.log('Product description');
});
btn.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Add to Cart');
});
clos.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Delete product');
});
