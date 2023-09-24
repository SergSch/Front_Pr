// We will work here!

// 1. Получить сумму элементов массива numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const sum = numbers.reduce((a, b) => a + b, 0);
// console.log(sum);
// ------------------------------------------------------------------------------

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
let products = [ball, gloves, shoes, hammer, saw, shark];

// 2. Получить суммарную стоимость всех товаров массива `products`
// const sumGoods = products.reduce((acc, el) => acc + el.price, 0);
// console.log(sumGoods);
// --------------------------------------------------------------------------------

// 4. Получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
// const arrGoods = products.reduce((acc, el) => {
//   acc.push(el.category);
//   return acc;
// }, []);
// console.log(arrGoods);
// -----------------------------------------------------------------------------------

// 5. Получить объект, в котором будут категории товаров.
// const objGoods = products.reduce((acc, el) => {
//   acc[el.name] = el.category;
//   return acc;
// }, {});
// console.log(objGoods);
// ---------------------------------------------------------------------------------

// 6. Получить объект, в котором будут суммарные стоимости товаров по категориям.
// const sumPrices = products.reduce((acc, el) => {
//   if (acc[el.category]) {
//     acc[el.category] += el.price;
//   } else {
//     acc[el.category] = el.price;
//   }
//   return acc;
// }, {});
// console.log(sumPrices);

// let result6 = products.reduce((acc, elem) => {
//     acc[elem.category] ? (acc[elem.category] += elem.price) : (acc[elem.category] = elem.price)
//     return acc
// }, {})

products.reduce((accumulator, currentValue) => {
  accumulator[currentValue.category] =
    (accumulator[currentValue.category] || 0) + currentValue.price;
  return accumulator;
}, {});

// ---------------------------------------------------------------------------------------------------
let arr = ['This', 'is', 'an', 'array', 'of', 'strings'];
// 3. Из массива строк `strings` получить объект, в котором ключами будут строки из массива, а значениями - длины этих строк. Пример:
//  ```
//  // Исходный массив
//  // Ожидаемый результат
//  {
//   this: 4,
//   is: 2,
//   an: 2,
//   array: 5,
//   of: 2,
//   strings: 7
//  }
//  ```
// const strObj = arr.reduce((acc, el) => {
//   acc[el] = el.length;
//   return acc;
// }, {});
// console.log(strObj);

// 7. Написать функцию `removeDuplicates`. Она принимает на вход массив, и должна вернуть новый массив, который не содержит дубликатов.
let removeDuplicates = [1, 4, 7, 1, 2, 3, 3, 2, 2, 4, 9];
// function removeDuplicatesEl(arr) {
//     const res = [];
//     arr.forEach(el => {
//         if(!res.includes(el)) {
//             res.push(el);
//         }
//     })
//     return res;
// }
// console.log(removeDuplicatesEl(removeDuplicates));
// // --------------------------------------
// let newArr = new Set(removeDuplicates);
// console.log(newArr);
// ---------------------------------------
// let res = removeDuplicates.filter((el, i, arr) => {
//     return arr.indexOf(el) === i;
// })
// console.log(res);

// -------------------------------------------------------------------------------------------------
// 8. Задача "со звездочкой". Получить массив с текстами всех параграфов на странице.
// const arr1 = document.querySelectorAll('p');
// const result = Array.from(arr1).reduce((a, b) => {
//   a.push(b.textContent);
//   return a;
// }, []);
// console.log(result);
// let res = [];
// arr1.forEach((el) => {
//   res.push(el.textContent);
// });
// console.log(res);

// ----------------------------------------------------------------------------------------------------
// 9. Задача "со звездочкой". Получить объект, в котором ключами будут ID-ы параграфов на странице, а значениями - тексты параграфов.
// const newObj = document.querySelectorAll('.root');
// const res = Array.from(newObj).reduce((acc, value) => {
//   acc[value.id] = value.textContent;
//   return acc;
// }, {});
// console.log(res);
// --------------------------------------------------------------------------------------------

// ```
// findExtra( [1, 7, -1, 9, 4, -9, -7] ); // 4
// findExtra( [14, -18, 2, -14, 90, -2, -90, -25, 18, -25, 3, -25, -3] ); // -25
// findExtra( [-3,1,2,3,-1,-4,-2] ); // -4
// ```
// 10. Написать функцию `findExtra`. Она принимает на вход массив чисел. В массиве содержатся положительные и отрицательные числа. Найти то число, у которого в массиве нет соответствующего числа с противоположным знаком.
// let arr = [1, 7, -1, 9, 4, -9, -7];
// function findExtra(arr) {
//   let res;
//   arr.forEach((el) => {
//     if (!arr.includes(-el)) {
//       res = el;
//     }
//   });
//   return res;
// }
// console.log(findExtra(arr));
