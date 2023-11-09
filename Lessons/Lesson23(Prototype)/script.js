// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   set setAge(year) {
//     this.age = 2023 - year;
//   }
//   get userInfo() {
//     return `${this.name} ${this.age}`;
//   }
//   hello() {
//     console.log('SDFsd');
//   }
// }

// class newUser extends User {
//   constructor(name, age) {
//     super(name, age);
//     this.isJob = false;
//   }
// }

// class newUser2 extends newUser {
//   constructor(name, age) {
//     super(name, age);
//     this.house = false;
//   }
// }
// let user2 = new newUser2();
// let user1 = new newUser('Alex', 40);
// user1.setAge = 2000;
// console.log(user1);
// console.log(user1.userInfo);

// ============================PROTO=-=========================================

// proto - это сво-во, которое существует абсолютно у всех объектов
// 1) Данное сво-во содержит свойства и методы родительского класса объекта
// 2) В случае, если при вызове метода и сво-тва у объекта, окажется, что указанные сво-тва и методы у него отсутствуют
//    тогда эти методы будут искаться у родительского класса по цепочке (внутри proto), не формируя никакую вложенность
// Пример:
// let date = new Date()
// Данная запись может быть вызвана
// date.__proto__.__proto__.toString()
// На эту:
// date.toString()

// 3) У родительского класса можно в любой момент расширить/изменить набор уже указанных свой-ств через
//    prototype
// например: (добавить новый метод массива, который будет считать абсолютную разницу первого и последнего элемента)

Array.prototype.abs = function () {
  return Math.abs(this[0] - this[this.length - 1]);
};

let array = [10, 20, 30, 40];
let result = array.abs();
console.log(result);

// =----------------------------------------------------

// Задача 1
// Добавьте к классу String новый метод initCap(), который будет возводить в верхний регистр первую букву,
// а другие оставшиейся символы в нижний регистр
// Метод должен вернуть новую строку
// 'string' => 'String'
// 'STRING' => 'String'
// 'StRiNg' => 'String'

String.prototype.initCap = function () {
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
};
let a = 'string';
console.log(a.initCap());

// -----------------------

// Задача 2
// Добавьте новый метод quad() к классу Number, который будет возвращать число возведенное в 4 степень.
Number.prototype.quad = function () {
  return this ** 4;
};
let w = 2;
console.log(w.quad());

// ---------------------------

// Добавьте в класс Array новый метод avg(), который будет возвращать среднее значение
// указанных в массиве чисел.

// console.log(array.avg()) => 3
Array.prototype.avg = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
};
let arr = [1, 2, 3, 4, 5];
console.log(arr.avg());
