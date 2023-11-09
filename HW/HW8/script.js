// 1.Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте геттер validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, геттер validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone.
// Пример значений переменных:
// let name = "Pizza"
// let phone = "81234567890"
// Пример результата: false
class Delivery {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
  get validPhone() {
    return this.phone.slice(0, 1) == '+';
  }
}
let newDelivery = new Delivery('Pizza', '81234567890');
console.log(newDelivery.validPhone);

// -----------------------------------------------------

// 2.В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.
// Входные данные:
class Permissions {
  constructor() {
    this.create = false;
    this.read = true;
    this.update = false;
    this.remove = false;
  }
}
class Users extends Permissions {
  constructor(name) {
    this.name = name;
  }
}

// -------------------------------------------------------------------------

// 3. Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться.

// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type.

// Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null.

// Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументов.

// Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число). Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, должно быть записано значение 100. В остальных случаях в свойство state записывается переданное в «сеттер» значение.

// Создайте «геттер», который читает значение свойства state.

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 1.5;
  }
  set changeState(arg) {
    if (arg < 0) {
      this.state = 0;
    } else if (arg > 100) {
      this.state = 100;
    } else {
      this.state = arg;
    }
  }
  get readState() {
    console.log(this.state);
  }
}

// Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель. От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine".

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

// Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author. Значение свойства type равно "book".
class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

// Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'detective';
  }
}

// ================================================================================

// проверка что все символы в нижнем регистре
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

// -------------

//Определите общее количество цифр в целом числе ( n>=0), заданном в качестве входных данных функции. Например, 9 — однозначное число, 66 — 2-значное, а 128685 — 6-значное.
function digits(n) {
  let str = String(n).length;
  if (str == 1) {
    return `Given arg is a single digit`;
  } else {
    return `Given arg has ${str} digits`;
  }
}
console.log(digits(34));

// --------------------

// Завершите решение так, чтобы строка разбивалась на пары по два символа. Если строка содержит нечетное количество символов, необходимо заменить отсутствующий второй символ последней пары подчеркиванием («_»). ("abcdefg"), ["ab", "cd", "ef", "g_"]); ("abcdef"), ["ab", "cd", "ef"]);
function solution(str) {
  let arr = [];
  if (str.length % 2 == 1) {
    str += '_';
  }
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1]);
  }
  return arr;
}
console.log(solution('fdsfd'));

// ---------------------------------------

function kebabize(str) {
  if (str[0] === str[0].toUpperCase()) {
    str = str[0].toLowerCase() + str.slice(1);
  }
  return str
    .split('')
    .map((elem) =>
      elem === elem.toUpperCase() ? '-' + elem.toLowerCase() : elem
    )
    .join('');
}

console.log(kebabize('camelsHaveThreeHumps'));
console.log(kebabize('CAMEL'));


