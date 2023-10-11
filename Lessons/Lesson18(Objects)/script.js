// let obj1 = {
//   name: 'Alex',
//   age: 50,
// };
// let obj2 = {
//   name: 'Alex',
//   age: 50,
// };
// console.log(obj1 == obj2);

// -----------------------------------------------

// let obj1 = {
//   name: 'Alex',
//   age: 50,
// };
// // ------------
// let obj2 = Object.assign({}, obj1);
// obj2.age = 30;
// console.log(obj1);
// console.log(obj2);
// // ---------------
// let obj3 = { ...obj2 };
// obj3.age = 15;
// console.log(obj2);
// console.log(obj3);

// ======================Object_Methods========================

// Предсталвенные методы позволяет преобразовать объект в МАССИВ
// методы возвращают новый массив

Object.values();
Object.keys();
Object.entries();

let obj = {
  name: 'Alex',
  age: 50,
  isJob: true,
};

// console.log(Object.values(obj))     (только значение ключей) [ 'Alex', 50, true ]
// console.log(Object.keys(obj))       (только ключи)           [ 'name', 'age', 'isJob' ]
// console.log(Object.entries(obj))    (и ключи и значения)     [ [ 'name', 'Alex' ], [ 'age', 50 ], [ 'isJob', true ] ]

// -----------------------------
// Задача
// Задан объект numbers посчитайте сумму всех свойств

let numbers = {
  price1: 1000,
  price2: 699,
  price3: 400,
  price4: 700,
  price5: 400,
  price6: 600,
  price7: 300,
};
let sum = Object.values(numbers).reduce((acc, elem) => acc + elem, 0);
console.log(sum);
