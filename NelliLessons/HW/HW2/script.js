// ДЗ
// 1. Дан массив чисел numbers. Вывести в консоль все четные числа массива

let numbers = [1, 3, 4, 6, 3, 1, 2];
numbers.forEach((elem) => (elem % 2 == 0 ? console.log(elem) : elem));

// 2. Напишите функцию, которая принимает массив со строками и возвращает новый массив. Если строка длиннее 5 символов, то в новый массив добавляется строка 'longer than 5', а если 5 и короче - то 'shorter than 5'

let strings = ['sd', 'sdfg', 'asgwer', 'd', 'afgwetrf', 'qergwerq'];
const newStr = (arr) =>
  arr.map((elem) => (elem.length > 5 ? 'longer than 5' : 'shorter than 5'));
console.log(newStr(strings));

// 3. Написать функцию changeStrings(), которая принимает массив с разными типами данных и возвращает новый массив, где все строки будут заменены на строку 'XXXXX'

let array = [1, 'asdfsd', 3, 'getr', 5, true, false, 'sdfg'];
const changeStrings = (arr) =>
  array.map((elem) => (typeof elem == 'string' ? 'XXXXX' : elem));
console.log(changeStrings(array));
