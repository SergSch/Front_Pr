// console.log(this === window); true

// window.alert();
// window.fetch();

// let obj = {
//   name: 'Alex',
//   age: 30,
//   info: function () {
//     console.log(`${this.name} ${this.age}`);
//   },
// };
// obj.info();
// --------------------------------

// Потеря контекста
// 1. Example

// let obj = {
//   name: 'Alex',
//   age: 30,
//   info: () => {
//     console.log(`${this.name} ${this.age}`);
//     console.log(this);
//   },
// };
// obj.info();

// 2. Example
// let obj = {
//   username: 'Alex',
//   age: 30,
//   info: function () {
//     console.log(`${this.username} ${this.age}`, this);
//   },
// };
// let foo = obj.info;
// foo(); // undefined undefined Window
// obj.info(); // Alex 30 obj
// console.log(obj.info);

// -------------------------------------

// let user_stev = {
//   name: 'Steve',
//   age: 30,
// };
// let user_ann = {
//   name: 'Ann',
//   age: 30,
// };
// const userInfo = function () {
//   console.log(`Users name is - ${this.name}`);
// };

// user_ann.newProp = userInfo;
// user_stev.newProp = userInfo;
// user_ann.newProp();
// user_stev.newProp();

// let obj = {
//   username: 'Alex',
//   age: 30,
//   info: function () {
//     console.log(`Users name is - ${this.username}`);
//   },
// };
// setTimeout(() => {
//   obj.info();
// }, 1000);
// setTimeout(() => {
//   console.log(`Users name is - ${this.username}`);
// }, 1000);

// ----------------------------------------------------------

// ======================МЕТОДЫ ФУНКЦИЙ====================
// -----------------------------------------
// Методы функции (для работы с контекстом)

// bind - метод фукнции, который привязывает занчение контекста к переданному в качестве аргумента объекту
// Метод возвращает НОВУЮ функцию, где при вызове контекст будет ссылаться на занчение переданного аргумента
// call - тоже самое, что и bind. отличие заключается в том, что при вызове call сразу вызывает функцию
// apply - тоже самое, что и call. Отлиичие заключается в том, что в качестве превого аргумента apply принимает также объект, а в кчестве второго параметра - массив с аргументами входной функции

// ----====bind====----
// Example 1
// let user_stev = {
//   username: 'Steve',
//   age: 30,
// };
// let user_ann = {
//   username: 'Ann',
//   age: 20,
// };
// const userInfo = function (n, m) {
//   console.log(`Users name is - ${this.username} ${n * m * this.age}`);
// };
// let fooStev = userInfo.bind(user_stev, 2, 3);
// let fooAnn = userInfo.bind(user_ann);
// fooStev();
// fooAnn(2, 2);
// -----------
// Example 2

// let product1 = {
//   title: 'Cycle',
//   price: 4000,
//   totalPrice: function (count) {
//     console.log(this.title);
//     console.log(this.price);
//     console.log(count * this.price);
//   },
// };
// let product2 = {
//   title: 'Samokat',
//   price: 20,
// };
// product1.totalPrice.bind(product2, 5)();
// product1.totalPrice(10);

// ===============================
// -----======call======------
// let product1 = {
//   title: 'Cycle',
//   price: 4000,
//   totalPrice: function (count, sale) {
//     console.log(this.title);
//     console.log(this.price);
//     console.log(count * this.price * (1 - sale));
//   },
// };
// let product2 = {
//   title: 'Samokat',
//   price: 20,
// };
// product1.totalPrice.call(product2, 5);
// product1.totalPrice.bind(product2, 10, 0.2);

// ============================
// -------======aplly=====-------
// let product1 = {
//   title: 'Cycle',
//   price: 4000,
//   totalPrice: function (count, sale) {
//     console.log(this.title);
//     console.log(this.price);
//     console.log(count * this.price * (1 - sale));
//   },
// };
// let product2 = {
//   title: 'Samokat',
//   price: 20,
// };
// product1.totalPrice.bind(product2, 10, 0.2)();
// product1.totalPrice.call(product2, 5, 0.4);
// let arr = [35, 0.6];
// product1.totalPrice.apply(product2, arr);

// ----------------------------------------------
// =========Practice===============
// Задача 1
// Привяжите контекст this функции carInfo к объекту car.
// создайте новую функцию с привязанным контекстом

let car = {
  model: 'Tesla',
  color: 'red',
};
function carInfo() {
  console.log(`${this.model} ${this.color}`);
}
let car1 = carInfo.bind(car)();

// ----------------------
// Задача 2
// Привяжите контекст метода emplInfo к объекту empl2
// Выполните привязку таким образом, чтобы метод сразу выполнился

let empl1 = {
  name: 'John',
  age: 20,
  emplInfo: function (salary, job_id) {
    console.log(`${this.name} ${this.age} ${salary} ${job_id}`);
  },
};

let empl2 = {
  name: 'Wilyam',
  age: 35,
};
// empl1.emplInfo.call(empl2, 4000, 3);
let arr1 = [5030, 34];
empl1.emplInfo.apply(empl2, arr1);
