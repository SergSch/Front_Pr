// const getUniqueElems = (arr) => {
//   let newArr = [];
//   arr.forEach((elem) => {
//     if (!newArr.includes(elem)) {
//       newArr.push(elem);
//     }
//   });
//   return newArr;
// };
// =---------------
const getUniqueElems = (arr) => {
  let newArr = arr.filter((elem) => !newArr.includes(elem));
  return newArr;
};
console.log(getUniqueElems([2, 3, 4, 5, 6, 6, 7, 1, 3, 4, 4]));

// ----------------
const uniqueElements = (arr) =>
  arr.filter((element, index, array) => array.indexOf(element) === index);

// Пример использования:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const resultArray = uniqueElements(inputArray);
console.log(resultArray); // Выведет [1, 2, 3, 4, 5]

// ==================================find====================

const names = ['Anna', 'Ivan', 'Boris', 'Anton', 'Anna', 'Anton'];
const boris_filter = names.filter((elem) => elem == 'Anna');
const boris_find = names.find((elem, i) =>
  elem == 'Anna' ? elem[0].toLowerCase() + elem.slice(1) : ''
);
console.log(boris_filter);
console.log(boris_find);

// Написать функцию, которая принимает массив и возращает первую строку из этого массива, содержащую определенное ключевое слово.
// Написать функцию, которая принимает массив и возращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.

const getFirstStr = (arr) => {
  let a = arr.find((elem) => elem.toLowerCase().includes('hello'));
  return a;
};
console.log(getFirstStr(['hello, world', 'hi', 'hello, Anton']));

const getAllStrs = (arr) =>
  arr.filter((el) => el.toLowerCase().includes('hello'));
console.log(getAllStrs([('hello, world', 'hi', 'hello, Anton')]));

// У вас есть массив чисел. Вам нужно написать функцию (или использовать метод массива), чтобы найти максимальное число в этом массиве.

const числа = [12, 45, 6, 78, 32, 56, 8, 19];

console.log(`Максимальное число в массиве: ${максимальное}`);

// Написать функцию, которая принимает массив и ключевое слово и возвращает первую строку из этого массива, содержащую определенное ключевое слово.
// Написать функцию, которая принимает массив и ключевое слово и возвращает новый массив из всех строк из этого массива, содержащих определенное ключевое слово.

const findWord = (arr, word) =>
  arr.find((elem) => elem.toLowerCase().includes(word));
console.log(findWord(['hello, world', 'hi', 'hello, Anton'], 'hello'));

const getAllStrs = (arr, word) =>
  arr.filter((el) => el.toLowerCase().includes(word));
console.log(getAllStrs(['hello, world', 'hi', 'hello, Anton'], 'hello'));

// 6. Найти первый элемент, который является положительным и четным числом
// 7. Найти все элементы, которые являются положительными и четными числами

const nums = [-10, 1, 31, 34, -64, 56, 84];
const findEvenNumber = (arr) => arr.find((elem) => elem > 0 && elem % 2 == 0);
const findAllNum = (arr) => arr.filter((elem) => elem > 0 && elem % 2 == 0);

console.log(findEvenNumber(nums));
console.log(findAllNum(nums));
