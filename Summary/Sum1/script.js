let par = document.querySelector('.par');
par.addEventListener('click', function () {
  par.style.color = 'red';
  par.style.fontSize = '30px';
});

let par2 = document.querySelector('.par2');
par2.addEventListener('click', () => {
  par2.classList.toggle('par_styles');
});
const btn = document.querySelector('button');
const lorem = document.querySelector('.lorem');
btn.addEventListener('click', () => {
  lorem.classList.toggle('list');
});

// 4. Создать три параграфа. При клике на первый параграф у второго менять цвет текста и цвет заднего фона. При клике на второй параграф, выводить сообщение в консоль - 'Произошел клик на второй параграф'. При клике на третий параграф. Удалять стили у второго парграфа.
const elem1 = document.querySelector('.elem1');
const elem2 = document.querySelector('.elem2');
const elem3 = document.querySelector('.elem3');
elem1.addEventListener('click', () => elem2.classList.add('list'));
elem2.addEventListener('click', () =>
  console.log('Произошел клик на второй параграф')
);
elem3.addEventListener('click', () => elem2.classList.remove('list'));

// 5. Создать кнопку Add paragraph и div. При клике на кнопку в контейнер добавляется параграф с произвольным текстом
const add = document.querySelector('.add');
const text = document.querySelector('.text');
add.addEventListener('click', () => {
  const par = document.createElement('p');
  par.innerText = 'Some Text';
  text.append(par);
});
// 6. Создать div в html-документе. Через js добавить в этот div парграф красного цвета
// - найти элемент
// - создать параграф
// - наполнить параграф текстом
// - покрасить цвет параграфа в красный (style)
// - положить параграф в контейнер
const some_div = document.querySelector('.some_div');
const paragr = document.createElement('p');
paragr.innerText = 'Some text';
paragr.style.color = 'red';
some_div.append(paragr);

const color_text = document.querySelector('.color_text');
const color = 7;
// if (color > 10) {
//   color_text.style.color = 'blue';
// } else {
//   color_text.style.color = 'red';
// }
color > 10
  ? (color_text.style.color = 'blue')
  : (color_text.style.color = 'red');

// 8. Создать кнопку и параграф. При каждом клике на кнопку размер шрифта в параграфе увеличивается на 5px
const inc_size = document.querySelector('.inc_size');
const increase = document.querySelector('.increase');
let size = 14;
increase.addEventListener('click', () => {
  size += 5;
  inc_size.style.fontSize = size + 'px';
});
