// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11, 9, 2, 7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

const ball = {
  name: 'Ball',
  category: 'Sport',
  img: './assets/ball.jpeg',
  price: 100,
};
const gloves = {
  name: 'Gloves',
  category: 'Sport',
  img: './assets/gloves.jpg',
  price: 140,
};
const shoes = {
  name: 'Sport shoes',
  category: 'Sport',
  discount: true,
  img: './assets/shoes.png',
  price: 320,
};
const hammer = {
  name: 'Hammer',
  category: 'Tools',
  img: './assets/hammer.jpeg',
  price: 40,
};
const saw = {
  name: 'Saw',
  category: 'Tools',
  discount: true,
  img: './assets/saw.jpeg',
  price: 75,
};
const shark = {
  name: 'Shark toy',
  category: 'Other',
  img: './assets/shark.jpeg',
  price: 45,
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw];

// 1. Написать функцию `isPalindrom` - проверку строки, является ли она палиндромом (т.е. читается в обеих направлениях одинаково). Сравнивать БЕЗ учета регистра. Пример: Anna - палиндром, Hanna - не палиндром.
// function isPalindrom(val) {
//   let a = val.toLowerCase();
//   let newStr = a.split('').reverse().join('');
//   if (a == newStr) {
//     return 'Your string is palindrom';
//   } else {
//     return 'Your string is not a palindrom';
//   }
// }
// console.log(isPalindrom('Anna'));

// 2. Пишем функцию `onlyForDiscounted`. Функция принимает массив (товаров), и функцию-колбэк, которую она должна выполнить только для тех товаров, у которых `discounted = true`.
function onlyForDiscounted(arr, myCallBack) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].discount) {
      myCallBack(arr[i]);
    }
  }
}
const productCallback = (product) => {
  console.log(product.name, 'is discounted');
};
onlyForDiscounted(products, productCallback);

// ----------------------------------------------------------------------------
// 3. Написать свою реализацию метода `forEach` - назовем ее `customForEach`. Пишем функцию, которая принимает первым аргументом массив, а вторым - функцию-колбэк, которую нужно выполнить для каждого элемента массива.
// function customForEach(arr, callBack) {
//   for (let i of arr) {
//     callBack(i);
//   }
// }
// function myFunction(arr) {
//   console.log(arr.category);
// }
// customForEach(products, myFunction);

// --------------------------------------------------------------------------------
// 4. Делаем аналогичное действие для `map` - пишем свою `customMap`.
// function customMap(arr, callBack) {
//   let newArr = [];
//   for (let i of arr) {
//     newArr.push(callBack(i));
//   }
//   return newArr;
// }
// function myFunction(item) {
//   let a = item.price * 2;
//   return a;
// }
// console.log(customMap(products, myFunction));

/* 4. Делаем аналогичное действие для `map` - пишем свою `customMap`. */
// function customMap(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         const mapped = callback( arr[i] );
//         result.push(mapped);
//     }
//     return result;
// }

// const dummyMapSrc = [ 1,2,3,4,5 ];
// function square(x) {
//     return x * x;
// }
// const squares = customMap(dummyMapSrc, square);
// console.log(squares);

// -----------------------------------------------------------------------------------------
// 5. Пишем функцию `firstFail`. Она примет на вход массив, и функцию-проверку `checker`. Функция должна вернуть объект, у которого будут свойства:
//   - `passed` - массив, в который попадут все элементы исходного массива, для которых функция `checker` вернула true - до первого "фейла".
//   - `failed` - массив, куда попадут все остальные элементы исходного массива.
// ```
// const checker = (el) => el % 2 === 0;
// firstFail( [2,8,10,7,6,4,31], checker ); // { passed: [2,8,10], failed: [7,6,4,31] }
// firstFail( [1,2,8,10,34,2], checker ); // {passed: [], failed: [1,2,8,10,34,2] }
// ```
// const checker = (el) => el % 2 === 0;
// function firstFail(arr, callback) {
//   let index = arr.findIndex((el) => !callback(el));
//   let passed = arr.slice(0, index);
//   let failed = arr.slice(index);
//   return { passed: passed, failed: failed };
// }
// console.log(firstFail([2, 8, 10, 7, 6, 4, 31], checker));

// ------------------------------------------------------------------------------------------------
// 6. Пишем функцию `summarizer`. Она принимает аргумент `addVal`, и должна вернуть другую функцию, которая также принимает число, и возвращает сумму этих двух чисел.
// ```
// let fun1 = summarizer(5);
// fun1(10); // 15
// ```
// function summarizer(addVal) {
//   return function (num) {
//     return addVal + num;
//   };
// }
// let fun1 = summarizer(5);
// console.log(fun1(10));
// console.log(fun1(35));

// 7. Пишем функцию `multiplyArray`. Она должна принять на вход массив `srcArray`, и вернуть другую функцию, которая примет на вход число `multiplier`. Результатом выполнения второй функции должен стать НОВЫЙ массив, который будет равен произведению элементов `srcArray` на число `multiplier`.
// ```
// let m = multiplyArray( [1, 2, 3] );
// m(2); // [2, 4, 6]
// let k = multiplyArray( [5, 3, 1] )(3); // [15, 9, 3]
// ```
// function multiplyArray(srcArray) {
//   return function (multiplier) {
//     let newArr = srcArray.map(el => el * multiplier);
//     return newArr;
//   }
// };
// const m = multiplyArray([1, 2, 3]);
// console.log(m(2));
// const k = multiplyArray([5, 3, 1]);
// console.log(k(3));
// ---------------------------------------------------------------------------

// 8. Задача "со звездочкой". Пишем функцию `findLongestSequence`. Она также примет на вход массив, и функцию-проверку, которая возвращает true/false. Нужно вернуть самую длинную последовательность из исходного массива, для которой функция-проверка выполняется.
// ```
// const checker = (x) => x % 2 === 0;
// const arr = [ 1,4,6,3,8,14,16,33,21,7,10,12];
// findLongestSequence(arr, checker); // [8, 14, 16] - т.е самая длинная последовательность четных чисел в массиве
// // ```
function findLongestSequence(arr, checker) {
  let longestSequence = [];
  let currentSequence = [];
  for (let i = 0; i < arr.length; i++) {
    if (checker(arr[i])) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > longestSequence.length) {
        longestSequence = [...currentSequence];
      }
      currentSequence = [];
    }
  }
  if (currentSequence.length > longestSequence.length) {
    longestSequence = [...currentSequence];
  }
  return longestSequence;
}
const checker = (x) => x % 2 === 0;
const arr = [1, 4, 6, 3, 8, 14, 16, 33, 21, 7, 10, 12];
const result = findLongestSequence(arr, checker);
console.log(result); // [8, 14, 16]
