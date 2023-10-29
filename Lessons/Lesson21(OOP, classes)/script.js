class Contacts {
  constructor(phone) {
    this.phone = phone;
  }
  getPhone() {
    console.log(`phone: ${this.phone}`);
  }
  static static_prop = 'static prop';
  static staticMethod() {
    console.log('static method!!!');
  }
}

let contact = new Contacts('2345234');
// contact.getPhone();

Contacts.staticMethod();

console.log(Contacts.static_prop);

// ----------------------------------
// Задача 1.
// Создайте класс User, а внутри статический метод getYears(str), который по строке будет
// опередлять текущий возсраст пользвоателя и выводить его в консоль

// User.getYears('2000') => 22
// User.getYears('2015') => 7

// class User {
//   static getYears(str) {
//     console.log(`User is ${2023 - str} years old!`);
//   }
// }
// User.getYears('2000');
// --------------------------------------------------

// Задача 2
// Напиши класс Object2 и повторите статический метод values.
// Метод должен принимать в качестве аргумента объект, и должен возвращать массив с значениями свойств объекта
// Примечание: использовать класс Obejct в решении нельзя.

// console.log(Object.values({name: 'Alex', age: 10}))     => [ 'Alex', 10 ]
// console.log(Object2.values({name: 'Alex', age: 10}))    => [ 'Alex', 10 ]

class Object2 {
  static values(obj) {
    let arr = [];
    for (let i in obj) {
      arr.push(obj[i]);
    }
    return arr;
  }
}
console.log(Object2.values({ name: 'Alex', age: 32 }));

// -----------------
// Getter i Setter
// Свойства - аксессоры
// Метод getter (принято считать сво-вом) - это метод, который позволяет прочитать свой-во объекта
// 1) обращение к геттеру происходит как в сво-ву
// 2) На момент инцициализации геттера сам метод не может получать аргументы
// 3) Геттер может динамически меняться (return) в случае изменения сво-ств, которые в этом методе используются
// 4) Геттер перезаписать невозможно

let pet = {
  name: 'Sharik',
  breed: 'Pudel',

  get nameBreed() {
    return `${this.name} is ${this.breed}`;
  },
};
console.log(pet.nameBreed);

// -----------------
// ------------
// Задача 1
// Задан объект obj
// Напиши геттер, который будет хранить квадрат сво-ва num

let obj = {
  num: 10,
  get double() {
    return this.num ** 2;
  },
};
console.log(obj.double);

// ------------
// ДЗ
// Задан объект obj
// Напиши геттер logFullName(), который будет возвращать конкатенацию имени и фамилии сво-ва name

let obj = {
  name: {
    full_name: 'Alex',
    last_name: 'Wilyam',
  },
  get logFullName() {
    return `${this.name.full_name}  ${this.name.last_name}`;
  },
};
console.log(obj.logFullName);

function toCamelCase(str) {
  let a = str
    .split('')
    .map((elem) => (typeof elem != 'string' ? elem.replace(/./, '-') : elem))
    .join('')
    .split('-')
    .map((elem, i) =>
      i == 0
        ? elem[0].toLowerCase() + elem.slice(1)
        : elem[0].toUpperCase() + elem.slice(1)
    )
    .join('');

  return a;
}
console.log(toCamelCase('the-stealth-warrior'));

// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
