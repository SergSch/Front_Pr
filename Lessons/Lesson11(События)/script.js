// События

const div_root = document.querySelector('#root');

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
document.addEventListener('keydown', (e) => {
  if (e.code == 'KeyV' && e.shiftKey) {
    console.log('combo!');
  }
});
