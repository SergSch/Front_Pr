function getZero(num) {
  if (num > 0 && num < 9) {
    return '0' + num;
  } else {
    return num;
  }
}

let date = new Date();
console.log(
  getZero(date.getHours()) +
    '-' +
    getZero(date.getMinutes()) +
    '-' +
    getZero(date.getSeconds()) +
    ' ' +
    getZero(date.getFullYear()) +
    '-' +
    getZero(date.getMonth() + 1) +
    '-' +
    getZero(date.getDate())
);
// ...................................
let d = new Date().getMonth();
console.log(d);
let months = [
  'янв',
  'фев',
  'мар',
  'апр',
  'май',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
];
console.log(months[d]);

// -------------------------------------

let date1 = new Date(1981, 6, 17);
let d1 = date1.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[d1]);

let date3 = new Date(2025, 0, 1);
console.log(date3.getTime());

// localStorage.setItem('first', 'hello');
// localStorage.setItem('second', 'hello2');
// localStorage.setItem('third', 'hello3');
// let one = localStorage.getItem('first');
// let second = localStorage.getItem('second');
// let third = localStorage.getItem('third');
// console.log(one, second, third);

let time = localStorage.getItem('time');
if (!time) {
  // Первый заход пользователя
  time = Date.now();
  localStorage.setItem('time', time);
} else {
  // Повторный заход пользователя
  let newDate = Date.now();
  let diff = Math.ceil((newDate - time) / (1000 * 60));
  console.log(`Последний ваш визит прошел ${diff} минут назад.`);
  // Обновляем время в локальном хранилище для следующего захода
  localStorage.setItem('time', newDate);
}
