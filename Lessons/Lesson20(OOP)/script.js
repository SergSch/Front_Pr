// let user1 = {
//   name: 'Alex',
//   age: 40,
//   sayHi: () => {
//     console.log('Hi!');
//   },
// };
// user1.sayHi();

// let user2 = {
//   name: 'Stev',
//   age: 25,
//   sayHi: () => {
//     console.log('Hello!');
//   },
// };
// user2.sayHi();

// -------------------------------------
// Шаблонизация
// function createUser(name, age) {
//   return {
//     name,
//     age,
//     sayHi: function () {
//       console.log(`${this.name} says Hi!`);
//     },
//   };
// }
// -----------
// let user1 = createUser('Alex', 30);
// let user2 = createUser('Steve', 25);
// let user3 = createUser('Nina', 22);
// console.log(user1);
// console.log(user2);

// user2.sayHi();
// user3.sayHi();
// -----------------------

// Class как новый тип

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`${this.name} says Hi!`);
  }
}

let user1 = new User('Alex', 30);
let user2 = new User('Stiv', 25);
user1.sayHi();
console.log(user1);
console.log(user2);

// Напишите класс MathNumb, который будет внутри экземпляров формировать сво-во number с числовым значением
// Напишите метод getDuble(), который будет выводить в косноль квадрат сво-ва number.

// Задача 2
// Напишите еще один метод setQuadNumber, который бдует возводить число в 4 степень и переопределять сво-ва number

class MathNumb {
  constructor(number) {
    this.number = number;
  }
  getDouble() {
    let res = this.number ** 2;
    console.log(res);
  }
  setQuadNumber() {
    this.number = this.number ** 4;
  }
}
let digit = new MathNumb(5);
digit.getDouble();
digit.setQuadNumber();
console.log(digit);
