// https://itchief.ru/javascript/function-expression

// Разновидности функций

// ----------------------------------------------
// Function declaration

// let b = double(2);
// console.log(b);
// function double(num) {
//   return num ** 2;
// }

// ------------------------------------------------
// Function expression

// 1)
// Анонимная функция

// let double = function (num) {
//   return num ** 2;
// };
// console.log(double(5));

// 2)
// Стрелочная функция

// let double = (num) => ({num : [num ** 2]});
// console.log(double(10)); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let double = (num) => num ** 2;
// console.log(double(10));

// let double = (num, str) => {
//   //   return [num, str];
//   return { num, str };
// };
// console.log(double(10, 'test'));

// метод объекта
// let obj = {
//     name: (num) => num ** 2;
// }

// --------------------------------------------------------------
// Function declaration
// Напишите функцию getSqrt(num), которая проверяет, вычисляется ли квадратный корень из аргумента num
// Если корень выичляется - функция должна вернуть TRUE, в противном случае FALSE
// Решение 1
// function getSqrt(num) {
//   return num ** 0.5 % 1 === 0;
// }
// console.log(getSqrt(9));

// Решение 2
// function getSqrt(num) {
//   if (Math.sqrt(num) % 1 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(getSqrt(5));

// -------------------------------------------------------------------
// Задание 2
// Напишите эту же функцию используя подход анонимной и стрелочной функции
// let test = (num) => num ** 0.5 % 1 === 0;
// console.log(test(24));
// ----------------------------------
// let test = function(num) {
//     return num ** 0.5 % 1 === 0;
// }
// console.log(test(9));

// ----------------------------------------------------------------------------------
// Задача 3
// Напишите функцию firstLastChar(string), окторая получает в качестве аргумента строку
// функцию должна вернуть значение первой и последней буквы
// 'test'
// =>
// 'tt'
// Напишите функцию используя подход стрелочной функции
// function firstLastChar(string) {
//   let a = string.slice(0, 1) + string.slice(-1);
//   return a;
// }
// console.log(firstLastChar('test'));
// --------------------------------------------------------------
// let newStr = string => string.slice(0, 1) + string.slice(-1);
// console.log(newStr('serg'));
// --------------------------------
// let firstLastChar = string => string[0] + string[string.length - 1];
// console.log(firstLastChar('prof'));

// -------------------------------------------------------------------------------------
// Задача 4

// Напишите функцию getNewElem(elem), которая должна добавить в массив array новый элемент elem (в конце)
// Если такойже элемент в массиве существует, тогда его добавлять не нужно
// let array = [1, 2, 3, 4, 5, 6];
// let getNewElem = (elem) => {
//   if (!array.includes(elem)) {
//     array.push(elem);
//   }
//   return array;
// };
// console.log(getNewElem(5));
