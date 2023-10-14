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
