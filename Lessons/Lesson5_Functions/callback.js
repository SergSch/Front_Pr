// Callback
// функция, которая передается в качестве аргумента другой функции

// function handler(callback) {
//   let a = callback(5);
//   return a;
// }
// console.log(handler((c) => c * 10));

// --------------------------------------------------
// function math(a, b, sign) {
//   if (sign === '+') {
//     return a + b;
//   } else if (sign === '-') {
//     return a - b;
//   } else if (sign === '/') {
//     return a / b;
//   } else if (sign === '*') {
//     return a * b;
//   }
// }
// console.log(math(5, 10, '+'));
// console.log(math(5, 4, '*'));

// function math(callback) {
//   return callback();
// }
// console.log(math(() => 3 * 3));
// ---------------------------------------------------------------------------------
// Задача 1.
// Метод FILTER
// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// function filter2(array, callback) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }
// console.log(a.filter((elem) => elem >= 5));
// console.log(filter2(a, (elem) => elem >= 5));

// ----------------------------------------------------------------------------
// Напишите функцию checkElem(array, callback)
// Функция должна проверить, сущесвтует ли хотябы 1 элемент в массиве array по условию, который будет передаваться в колбеке
// Если хотябы 1 элемент удовлетворяет условию, функция должна вернуть true, если нет - false
// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// function checkElem(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(checkElem(a, (elem) => elem === 5));

// -------------------------------------------------------------------------------
// Напишите функцию checkEvereElem(array, callback)
// Функция должна проверить, удовлетворяют ли все эелементы указанному условию колбека.
// Есл это так - функция должна вернуть true,
// если хотябы 1 элемент не удовлетворяет условию колбека - функция должна вернуть false
// let a = [6, 5, 5, 5, 7, 5];
// function checkEveryElem(arr, callback) {
//   for (let el of arr) {
//     if (!callback(el)) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkEveryElem(a, (elem) => elem === 5));

// ---------------------------------------------------------------------------------
// Напишите функцию changeEveryElem(array, callback).
// Функция должна изменить каждый элемент массива на значение, которые будет указано в результате работы callback
// callback должен получать в качестве аргументе значение элемента массива
// Примечание: функция должн вернуть новый массив
// let a = [6, 5, 5, 5, 7, 5];
// function changeEveryElem(arr, callback) {
//   let newArr = [];
//   arr.forEach((elem) => newArr.push(callback(elem)));
//   return newArr;
// }
// console.log(changeEveryElem(a, (elem) => elem * 2));

// --------------------------------------------------------------------------
// Напишите функцию changeString(string, callback), которая будет получать в качестве аргумента строку
// callback должен возвращать массив данных с буквами, которые необходимо исключить в строке string.
// функция должна вернуть новую строку, без указанных в массиве символов
// function changeString(str, callback) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (callback(str[i].join('').includes())) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
// console.log(
//   changeString('somestring', (el) => !['s', 'm', 'g'].join('').includes(el))
// );

// function changeString(str, callback) {
//   let newStr = '';
//   let arrayFromCallback = callback();
//   for (let elem of str) {
//     if (!arrayFromCallback.includes(elem)) {
//       newStr += elem;
//     }
//   }
//   return newStr;
// }
// console.log(changeString('somestring', () => ['s', 'm', 'g']));

// function getCount(str) {
//   let a = '';
//   let arr = ['a', 'e', 'u', 'o', 'i'];
//   for (let i of str) {
//     if (arr.includes(i)) {
//       a += i;
//     }
//   }
//   return a.length;
// }
// console.log(getCount('woerihqnfa'));
