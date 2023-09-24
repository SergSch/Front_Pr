// События

const div_root = document.querySelector('#root');
const div_content = document.querySelector('#content');
const div_test = document.querySelector('#test');

// -----------------------------------------
// onclick
// div_root.onclick = () => {
//   console.log('click');
// };

// div_root.onclick = () => {
//     console.log('click');
//   };

//   --------------------------------------------
// Типы кликов
// addEventListener
// div_root.addEventListener('dblclick', () => console.log('dbclick1'));
// div_root.addEventListener('click', () => console.log('click1'));
// div_root.addEventListener('mousedown', () => console.log('mousedown'));
// div_root.addEventListener('mouseup', () => console.log('mouseup'));

// div_root.addEventListener('mouseover', () => console.log('mouseup'));
// div_root.addEventListener('mouseout', () => console.log('mouseup'));

// Event
// document.addEventListener('keydown', (event) => {
//   if (event.key == 'Enter') {
//     console.log('Enter!');
//   }
// });

// -----------------------------------
// Напишите событие, которое при комбинации клавиш shift + 'v' (внезависимости от регистра и раскалдки)
// будет в консоли передавать сообщение combo!
// document.addEventListener('keydown', (e) => {
//   if (e.code == 'KeyV' && e.shiftKey) {
//     console.log('combo!');
//   }
// });

// ----------------------------------------------------------------
// Сво-во объекта Event -- Target
// target хранит ссылку на dom-узел, над которым произошло событие

// document.addEventListener('click', (event) => {
//   // console.log(event.target)
//   // event.target.innerText = 'TEST!'
//   event.target.remove();
// });

// -----------------------------------------------------------------------
// Методы объекта Event
// event.stopPropagation() - метод

// div_root.addEventListener('click', () => {
//   console.log('click root');
// });

// div_content.addEventListener('click', (event) => {
//   event.stopPropagation();
//   console.log('click content');
// });
// div_test.addEventListener('click', (event) => {
//   event.stopPropagation();
//   console.log('click test');
// });

// ---------------------------------------------------------------------
// Поиведение настройки браузера в дефолтное состояние
// event.preventDefault() - метод который засравляет настройки браузера в дефолтное состояние отключив автоматически сформированные настройки для определ

// const input = document.querySelector('input');
// const a = document.querySelector('a');
// const form = document.querySelector('form');
// input.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(event.target.checked);
// });
// a.addEventListener('click', (event) => {
//   event.preventDefault();
// });
// form.addEventListener('click', (event) => {
//   event.preventDefault();
// });
