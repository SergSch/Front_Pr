// 1. В index.html создать кнопку, при клике на которую выводится сообщение 'hello, world!' в консоль
// const btn = document.querySelector('.change_theme');
// btn.addEventListener('click', () => {
//   console.log('Hello World!');
// });
// ----------------------------------------------------------------------------------------------------

// 2. В index.html создать кнопку, при клике на которую цвет заднего фона меняется на розовый, а при повторном клике меняется обратно на белый
// const btn = document.querySelector('.change_theme');
// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor =
//     document.body.style.backgroundColor === 'green' ? 'white' : 'green';
// });
// =====--------------------
// btn.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });
// ----------------------------------------------------------------------------------------------

// 3. В index.html создать кнопку и div, при клике на кнопку внутри div создается параграф с сообщением 'hello, world!'. Текст сообщения должен быть зеленого цвета
// const div = document.querySelector('.block');
// div.style.color = 'green';
// btn.addEventListener('click', () => {
//   div.innerHTML += `<p>'Hello World!</p>`;
// });
// -----------------------------------
// const add_par_btn = document.querySelector('.add_par_btn');
// const pars_container = document.querySelector('.pars_container');
// add_par_btn.addEventListener('click', () => {
//   const par = document.createElement('p');
//   par.innerText = 'hello, world!';
//   par.style.color = 'green';
//   pars_container.append(par);
// });
// -----------------------------------------------------------------------------------------------------

// 4. В index.html создать кнопку и div, при клике на кнопку внутри div создается параграф с сообщением 'hello, world!'. Текст сообщения должен менятся - зеленый, синий, зеленый, синий и т.д.
// const btn = document.querySelector('.change_color');
// const container = document.querySelector('.container');
// let color = 'green';
// btn.addEventListener('click', () => {
//   const p = document.createElement('p');
//   p.innerText = 'Hello World!';
//   p.style.color = color;
//   color = color === 'green' ? 'yellow' : 'green';
//   container.append(p);
// });
// --------------------------------------------------------------------------------------------------------

// 5. В index.html создать кнопку и div, при клике на кнопку внутри div создается параграф с сообщением 'hello, world!'. Текст сообщения должен менятся на цвет из массива
// const btn = document.querySelector('.change_color');
// const container = document.querySelector('.container');
// const text_colors = ['red', 'yellow', 'rgb(127, 255, 212)', '#9F2B68'];
// let color_index = 0;
// btn.addEventListener('click', () => {
//   const p = document.createElement('p');
//   p.innerText = 'Hello World!';
//   p.style.color = text_colors[color_index++ % text_colors.length];
//   container.append(p);
// });

// color_index++ % text_colors.length;
// 0 % 3 === 0;
// 1 % 3 === 1;
// 2 % 3 === 2;
// 3 % 3 === 0;
// 4 % 3 === 1;
// 5 % 3 === 2;
// 6 % 3 === 0;

// 0 % 4 === 0;
// 1 % 4 === 1;
// 2 % 4 === 2;
// 3 % 4 === 3;
// 4 % 4 === 0;
// 5 % 4 === 1;
// 6 % 4 === 2;

// console.log(2 % 3);
// ----------------------------------------------------------------------------------------------

// 6. В index.html создать картинку и кнопку. При клике на кнопку картинка меняется на другую картинку
// const btn = document.querySelector('.change_img');
// const img = document.querySelector('.elephant');
// btn.addEventListener('click', () => {
//   img.setAttribute(
//     'src',
//     'https://img.freepik.com/premium-vector/cartoon-elephant-isolated-on-white_29190-6244.jpg'
//   );
// });
// -------------
// btn.addEventListener('click', () => {
//   img.src =
//     'https://img.freepik.com/premium-vector/cartoon-elephant-isolated-on-white_29190-6244.jpg';
// });
// ----------------------------------------------------------------------------------------------------

// 7. В index.html создать картинку и кнопку. При клике на кнопку картинка меняется на другую картинку из массива
// const photos = [
//   'https://img.freepik.com/premium-vector/cartoon-elephant-isolated-on-white_29190-6244.jpg',
//   'https://b1.vpoxod.ru/ckeditor/30/33/71/264457.jpg',
//   'https://minio.nplus1.ru/app-images/152754/30c1c568a1e8e538911c6f8d02ca69f2.jpg',
//   'https://cdn.7days.ru/pic/516/802879/163232/76.jpg',
// ];
// const btn = document.querySelector('.change_img');
// const img = document.querySelector('.elephant');
// let indexPhotos = 0;
// btn.addEventListener('click', () => {
//   img.setAttribute('src', photos[indexPhotos++ % photos.length]);
// });

// btn.addEventListener('click', () => {
//   img.src = photos[indexPhotos++ % photos.length];
// });
// =---------------------------------------------------------------------------------------------------

// 8. В index.html создать картинку и две кнопки. При клике на правую кнопку картинка меняется на следующую картинку из массива, а при клике на левую на предыдущую из массива
// const photos = [
//   'https://img.freepik.com/premium-vector/cartoon-elephant-isolated-on-white_29190-6244.jpg',
//   'https://b1.vpoxod.ru/ckeditor/30/33/71/264457.jpg',
//   'https://minio.nplus1.ru/app-images/152754/30c1c568a1e8e538911c6f8d02ca69f2.jpg',
//   'https://cdn.7days.ru/pic/516/802879/163232/76.jpg',
// ];
// const back = document.querySelector('.change_back');
// const btn = document.querySelector('.change_img');
// const img = document.querySelector('.elephant');
// let indexPhotos = 0;
// btn.addEventListener('click', () => {
//   img.src = photos[indexPhotos++ % photos.length];
// });
// back.addEventListener('click', () => {
//   if (indexPhotos === 0) {
//     indexPhotos = photos.length;
//   }
//   img.src = photos[indexPhotos-- % photos.length];
// });
// -----------------------------------------------------------------------------------------------------------

// 9. В index.html создать кнопку и пустой див. При клике на кнопку в див добавлять картинку из массива
const btn = document.querySelector('.change_img');
const photo = document.querySelector('.photo');
let indexPhotos = 0;
const photos = [
  'https://img.freepik.com/premium-vector/cartoon-elephant-isolated-on-white_29190-6244.jpg',
  'https://b1.vpoxod.ru/ckeditor/30/33/71/264457.jpg',
  'https://minio.nplus1.ru/app-images/152754/30c1c568a1e8e538911c6f8d02ca69f2.jpg',
  'https://cdn.7days.ru/pic/516/802879/163232/76.jpg',
];
btn.addEventListener('click', () => {
  let img = document.createElement('img');
  img.alt = 'picture';
  img.src = photos[indexPhotos++ % photos.length];
  photo.append(img);
});
