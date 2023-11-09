class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class PowerTool extends Product {
  constructor(id, name, price, description, power, warranty) {
    super(id, name, price, description);
    this.power = power;
    this.warranty = warranty;
  }
}

class Tool extends Product {
  constructor(id, name, price, description, strength) {
    super(id, name, price, description);
    this.strength = strength;
  }
}

function customMap(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i]);
  }
  return result;
}

const weirdArray = {
  length: 2,
  0: 'Saw',
  1: 'Hammer',
};

const veryWeirdArray = {
  0: 'Drill',
  1: 'Axe',
  2: 'Nails',
};

// 1. Создаем объект класса `Product`. ID=1, name="Product", price=100, description = "Simple product description". Нужно в этот объект (именно в объект, НЕ в класс!), добавить метод addDiscount(discount), который должен установить новую цену товару. Новая цена = старая цена * discount * 0.01. ВАЖНО: при решении задачи, работать через контекст (`this`)!

let obj = new Product(1, 'Product', 100, 'Simple product description');
obj.addDiscount = function (discount) {
  this.price = this.price * discount * 0.01;
};

// 2. Пишем функцию `showProductInfo()`. Задача функции - выводить в консоль информацию о товаре, вида: "Товар НАЗВАНИЕ, цена - ЦЕНА". Функция должна быть контексто-ориентированной, т.е. предполагается, что она будет вызвана в контексте объекта товара.

// const showProductInfo = () => {
//   console.log(`Supply: ${this.name}, Price: ${this.price}`);
// };

// 3. Вызовите функцию `showProductInfo()` в контексте объекта из п.1. Для этого, нам понадобится явно привязать контекст.

// showProductInfo.call(obj);

// 4. Применяем нашу функцию - нужно сделать так, чтобы она была доступна для ВСЕХ объектов класса `Product`, и его потомков. Для этого, нам может пригодиться прототип.

// Product.prototype.showProductInfo = showProductInfo;

// 5. Работаем с привязкой контекста. У нас есть метод `customMap`, который повторяет функциональность метода массивов `map`. И есть массив `numbers`. Мы хотим получить из массива `numbers` другой, новый массив `newNumbers`, элементы которого будут рассчитаны так: `newNumbers[i] = numbers[i] * numbers[i]`. То есть, массив квадратов. Сделать это вызовом метода `customMap`, в контексте массива `numbers`.
// function customMap(callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result[i] = callback(this[i]);
//   }
//   return result;
// }
// let numbers = [4, 5, 6];
// let myCB = (el) => {
//   return el * el;
// };
// console.log(customMap.apply(numbers, [myCB]));
// console.log(customMap.call(numbers, myCB));

// 6. Задача повышенной сложности. Есть объект `weirdArray`. У него есть свойство length, и ключи очень похожи на индексы массива. Но это не массив. Нужно применить к нему метод `forEach`, и вывести в консоль каждое его свойство, у которого ключ - число (т.е. 0, 1, 2, ...). Для этого, нам нужно привязать контекст явно к методу forEach, и вызвать его. Такой прием называется заимствованием методов.
// const weirdArray = {
//   length: 2,
//   0: 'Saw',
//   1: 'Hammer',
// };
// const forEachCallback = (el) => console.log(el);
// const bindedForEach = Array.prototype.forEach.bind(weirdArray);
// bindedForEach(forEachCallback);

// Object.entries(weirdArray).forEach((elem) =>
//   typeof elem[0] == 'number' ? console.log(elem[1]) : elem
// );

// 7. Вспоминаем методы класса `Object`. Теперь метод forEach нужно применить к объекту veryWeirdArray. Он тоже похож на массив, но у него нет свойства `length`. Нужно как-то применить к нему метод массива `forEach`. Здесь нам тоже нужна привязка объектов, но еще не повредит установить нашему объекту свойство `length` с правильным значением.

// const veryWeirdArray = {
//   0: 'Drill',
//   1: 'Axe',
//   2: 'Nails',
// };
// let length = Object.keys(veryWeirdArray).length;
// veryWeirdArray.length = length;
// console.log(veryWeirdArray);

// const forEachCallback1 = (el) => console.log(el);
// const bindedForEach1 = Array.prototype.forEach.bind(veryWeirdArray);
// bindedForEach1(forEachCallback1);

// 8. Пишем простую функцию `validateInput(errorText)` валидации текстового поля (`input`). предполагается, что она будет вызываться в контексте DOM-элемента, HTMLInput. Нужно проверить:
//  - если у инпута есть атрибут required - то проверить что его значение непустое.
//  - если значение пустое - то добавить к инпуту класс error, и в текст записать сообщение errorText.
//  - если нет required - то вернуть true.

const container = document.querySelector('.container');
const input = document.createElement('input');
input.setAttribute('required', 'required');
container.append(input);
function validateInput(text) {
  if (this.hasAttribute('required')) {
    if (this.value.length == 0) {
      this.classList.add('error');
      this.value = text;
    }
  } else {
    return true;
  }
}
console.log(validateInput.call(input, 'errorText'));

// 9. Добавляем обработчик на кнопку Validate. При нажатии на кнопку, ищем все инпуты в документе, и вызываем функцию validateInput для каждого из них. Передать в нее текст "Заполните это поле!". Здесь нам тоже нужна привязка контекста, но уже с передачей аргументов в функцию, к которой мы привязываем контекст.

// const container = document.querySelector('.container');
// const input = document.createElement('input');
// input.setAttribute('required', 'required');
// container.append(input);
// function validateInput(text) {
//   if (this.getAttribute('required') !== null) {
//     if (this.value.length == 0) {
//       this.classList.add('error');
//       this.value = 'errorText';
//     }
//   } else {
//     return true;
//   }
// }

// const btn_validate = document.createElement('button');
// container.append(btn_validate);

// btn_validate.addEventListener('click', () => {
//   const allInputs = document.querySelectorAll('input');
//   allInputs.forEach((elem) => {
//     validateInput.call(elem, 'Заполните это поле!');
//   });
// });
