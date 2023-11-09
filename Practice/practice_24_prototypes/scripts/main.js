// код пишем здесь!
// 4. Понимание разницы функции-конструктора и класса. В файле `main.js` есть две реализации товара: `ProductFunction`, `ProductClass`. Нужно сделать так, чтобы экземплярам, созданным с помощью этих реализаций, был доступен метод `print`, который будет выводить в консоль цену и название товара.

// 5. Присвоение прототипа. В файле `main.js` есть объект `independentObject`. Нужно сделать так, чтобы его прототипом стал прототип, который используется при создании экземпляров класса `ProductClass`.

function ProductFunction(id, name, price, description) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
}
ProductFunction.prototype.print = function () {
  console.log(`${this.price} ${this.name}`);
};

class ProductClass {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
  print() {
    console.log(`${this.price} ${this.name}`);
  }
}

// 6. Перебор свойств. В файле `main.js` есть объект `productInstance`. Сделайте его прототипом для объекта `independentObject`. Нужно вывести в консоль все доступные свойства объекта `independentObject` (т.е. и свои, и из прототипов).
// 7. Вывести в консоль все собственные свойства объекта `independentObject`. Тут нам придется вспомнить методы `Object` для работы со свойствами.

// 8. Еще про присвоение прототипа. Нужно создать новый объект `fakeProduct` со свойствами `name`, `price`, причем это НЕ экземпляр класса, и НЕ вызов функции-конструктора. Создать объект нужно так, чтобы он мог воспользоваться методом `print`, определенным в классе `Product`. Подсказка - здесь нам можно или явно присвоить прототип, или использовать `Object.create`.
let fakeProduct = {
  name: 'Ann',
  price: 10,
};
fakeProduct.__proto__ = ProductClass.prototype;
fakeProduct.print();
// ---------------
const productInstance = new ProductClass(1, 'Name', 2, 'Description');
const independentObject = {
  property: 'value',
  __proto__: productInstance,
};
for (let i in independentObject) {
  let isOwn = independentObject.hasOwnProperty(i);
  if (isOwn) {
    console.log(i);
  }
}
for (let prop in independentObject) {
  // console.log(prop);
}
independentObject.__proto__ = ProductClass.prototype;
// console.log(independentObject);

// 1. Пристрелочная задача. Нужно создать метод `containsNumbersOnly`, который будет применяться к массивам. Его задача - проверить, что массив содержит только числа. Если есть хоть одно "не-число" - вернуть false. Внутри метода НЕ используем методы массивов.
Array.prototype.containsNumbersOnly = function () {
  for (let i of this) {
    if (typeof i !== 'number') {
      return false;
    } else {
      return true;
    }
  }
};
const arr = [4, 3];
// console.log(arr.containsNumbersOnly());

// 2. Усложняем предыдущую задачу. Нужно создать метод `containsSameType`, который должен проверить, что массив содержит элементы одного типа (т.е. у элементов одинаковый результат `typeof`).
Array.prototype.containsSameType = function () {
  let firstEl = typeof this[0];
  for (let i = 1; i < this.length; i++) {
    if (firstEl !== typeof this[i]) {
      return false;
    }
  }
  return true;
};
const arr1 = [4, 3];
// console.log(arr1.containsSameType());

// 3. "Запрещаем" работу метода `reduce` для массивов. Нужно сделать так, чтобы при вызове метода `reduce` для ЛЮБОГО массива, генерировалась бы ошибка "Метод запрещен!". Подсказка: нужно переопределить метод в прототипе.
Array.prototype.reduce = function () {
  throw new Error('Метод запрещен!');
};
const arr2 = [4, 3];
// console.log(arr2.reduce((acc, el) => acc + el));

// --------------------------------------------------------------------

// /* 1. Пристрелочная задача. Нужно создать метод `containsNumbersOnly`, который будет применяться к массивам. Его задача - проверить, что массив содержит только числа. Если есть хоть одно "не-число" - вернуть false. Внутри метода НЕ используем методы массивов. */
Array.prototype.containsNumbersOnly = function () {
  for (let elem of this) {
    if (typeof elem !== 'number') {
      return false;
    }
  }
  return true;
};
const array = ['add', 1, 2];
console.log(array.containsNumbersOnly());

/* 2. Усложняем предыдущую задачу. Нужно создать метод `containsSameType`, который должен проверить, что массив содержит элементы одного типа (т.е. у элементов одинаковый результат `typeof`). */

Array.prototype.containsSameType = function () {
  const firstElemType = typeof this[0];
  for (let i = 1; i < this.length; i++) {
    if (typeof this[i] !== firstElemType) return false;
  }
  return true;
};
console.log([1, 2, 'str'].containsSameType());
console.log(['str', 1, 2, 'str'].containsSameType());
console.log([1, 2].containsSameType());
console.log(['str', 'eee'].containsSameType());
console.log([].containsSameType());

/* 3. "Запрещаем" работу метода `reduce` для массивов. Нужно сделать так, чтобы при вызове метода `reduce` для ЛЮБОГО массива, генерировалась бы ошибка "Метод запрещен!". Подсказка: нужно переопределить метод в прототипе.
 */
Array.prototype.reduce = function () {
  throw new Error('This method is prohibited!');
};

/* 4. Понимание разницы функции-конструктора и класса. В файле `main.js` есть две реализации товара: `ProductFunction`, `ProductClass`. Нужно сделать так, чтобы экземплярам, созданным с помощью этих реализаций, был доступен метод `print`, который будет выводить в консоль цену и название товара. */

/*5. Присвоение прототипа. В файле `main.js` есть объект `independentObject`. Нужно сделать так, чтобы его прототипом стал прототип, который используется при создании экземпляров класса `ProductClass`.
 */

independentObject.__proto__ = ProductClass.prototype;

console.log(independentObject.print());

/* 6. Перебор свойств. В файле `main.js` есть объект `productInstance`. Сделайте его прототипом для объекта `independentObject`. Нужно вывести в консоль все доступные свойства объекта `independentObject` (т.е. и свои, и из прототипов).
 */
independentObject.__proto__ = productInstance;
console.log(independentObject);
for (let prop in independentObject) {
  console.log('Property', prop);
}

/*7. Вывести в консоль все собственные свойства объекта `independentObject`. Тут нам придется вспомнить методы `Object` для работы со свойствами.*/
for (let prop in independentObject) {
  let isOwn = independentObject.hasOwnProperty(prop);
  if (isOwn) {
    console.log('Own prop', prop);
  }
}

for (let key of Object.keys(independentObject)) {
  console.log('From key', key);
}
