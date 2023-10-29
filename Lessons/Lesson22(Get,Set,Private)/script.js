// =============Setter=================
// ------------------------------------------------
// Свойство set (setter, сеттер) позволяет переопределить сво-во объекта
// Особоенности почти такие же как у getter:
// 1) Setter должен обязятальено получить только 1 аргумент
// 2) Setter также является сво-вом. Аргумент передается через присвоение (=)
// 3) В сеттере указывается процесс переопределения сво-ва объекта. Внутри return не используется

let obj = {
  number: 10,

  set setNumber(arg) {
    let res = arg ** 2;
    this.number = res;
  },
};

obj.setNumber = 20;
console.log(obj);

// ----------------

//======================== Применение ГЕТТЕРОВ и СЕТТЕРОВ===================

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `Users name: ${this.name}, users age: ${this.age}`;
  }
  set newAge(num) {
    this.age = 2023 - num;
  }
}

let user1 = new User('Alex', 30);
user1.newAge = 1981;
console.log(user1.info);

// ================Private Prooerty-=====================

class User {
  #pass;
  constructor(name, pass) {
    this.name = name;
    this.#pass = pass;
  }
  log() {
    console.log(this.#pass);
  }
}
let user1 = new User('Alex', '123');
console.log(user1);
user1.log();

// -----------------Exemple----------------------

class Card {
  constructor(nameOwner, card_num) {
    this.nameOwner = nameOwner;
    this.#card_num = card_num;
  }
  #card_num;

  get readCard() {
    return `${this.#card_num.slice(0, 4)}******${this.#card_num.slice(-2)}`;
  }
  set setCard(arg) {
    this.#card_num = arg;
  }
}
let card1 = new Card('Alex', '4444 333 2222');
console.log(card1.readCard);
card1.setCard = '1111 2222 3333';
console.log(card1.readCard);

// --------------------
// Задан объет с сво-вом numbers
// Напишите сеттер setNumbers, который в качестве аргумента будет получать СТРОКУ с элементами, которые
// должны оказаться в массиве по следующему примеру:

let obj = {
  numbers: ['Одивн', 'Два', 'Три', 'Четыре', 'Пять'],
  set setNumbers(arg) {
    this.numbers = arg.split(' ');
  },
};
obj.setNumbers = '1 Два 3 4 5 6 7';
console.log(obj);

// Пример
// obj.setNumbers = '1 Два 3 4 5 6 7'
// numbers: ['1', "Два", "3", "4", "5", '6','7']

// ---------------------
let str = 'Hello my friend';
console.log(str.indexOf('my'));
console.log(str.lastIndexOf('my'));

// --------------------------

// Задача
// Напишите сеттер, который будет в виде строковго типа задавать значение имени и фамилии объекта

let obj = {
  name: 'Alex',
  lastName: 'Willyam',

  set setFullName(arg) {
    let [first_name, last_Name] = arg.split(' ');
    this.name = first_name;
    this.lastName = last_Name;
  },
};
obj.setFullName = 'Steven King';
console.log(obj);

// Пример
// obj.setFullName = 'Steven King'
// {
//     name: 'Steven',
//     lastName: 'King'
// }
