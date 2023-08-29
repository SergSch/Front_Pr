function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }
  return result;
}
function cube(el) {
  return el ** 3;
}
console.log(each([1, 2, 3, 4, 5], cube));
let result = (function () {
  return '!';
})();
console.log(result);

Создайте функцию, которая возвращает другую функцию, которая умножает число на заданное значение:
javascript
Copy code
function multiplier(factor) {
  return function(number) {
    return number * factor;
  }
}

const double = multiplier(2);
console.log(double(5)); // Выведет: 10
Создайте счетчик с помощью замыкания:
javascript
Copy code
function counter() {
  let count = 0;
  return function() {
    return count++;
  }
}

const increment = counter();
console.log(increment()); // Выведет: 0
console.log(increment()); // Выведет: 1
Создайте функцию для генерации уникальных идентификаторов:
javascript
Copy code
function idGenerator() {
  let id = 0;
  return function() {
    return id++;
  }
}

const generateId = idGenerator();
console.log(generateId()); // Выведет: 0
console.log(generateId()); // Выведет: 1
Создайте функцию-таймер, которая считает время с момента вызова:
javascript
Copy code
function timer() {
  const startTime = Date.now();
  return function() {
    return Date.now() - startTime;
  }
}

const getTimeElapsed = timer();
console.log(getTimeElapsed()); // Выведет прошедшее время в миллисекундах
Создайте функцию для работы с кэшем:
javascript
Copy code
function cache() {
  const cachedData = {};
  return function(key, value) {
    if (value !== undefined) {
      cachedData[key] = value;
    }
    return cachedData[key];
  };
}

const accessCache = cache();
accessCache('name', 'John');
console.log(accessCache('name')); // Выведет: John
Создайте функцию, которая возвращает сумму двух чисел, сохраняя первое число в замыкании:
javascript
Copy code
function add(a) {
  return function(b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(3)); // Выведет: 8
Создайте функцию для подсчета среднего значения:
javascript
Copy code
function average() {
  let sum = 0;
  let count = 0;
  return function(number) {
    sum += number;
    count++;
    return sum / count;
  };
}

const calculateAverage = average();
console.log(calculateAverage(10)); // Выведет: 10
console.log(calculateAverage(20)); // Выведет: 15 (среднее из 10 и 20)
Создайте функцию-валидатор для проверки длины строки:
javascript
Copy code
function lengthValidator(maxLength) {
  return function(str) {
    return str.length <= maxLength;
  };
}

const isShortEnough = lengthValidator(5);
console.log(isShortEnough('hello')); // Выведет: true
console.log(isShortEnough('javascript')); // Выведет: false
Создайте функцию для генерации паролей:
javascript
Copy code
function passwordGenerator(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return function() {
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };
}

const generatePassword = passwordGenerator(8);
console.log(generatePassword()); // Генерирует случайный пароль длиной 8 символов
Создайте функцию для подсчета общей суммы покупок:
javascript
Copy code
function shoppingCart() {
  let total = 0;
  return {
    add: function(price) {
      total += price;
    },
    getTotal: function() {
      return total;
    }
  };
}

const cart = shoppingCart();
cart.add(10);
cart.add(20);
console.log(cart.getTotal()); // Выведет: 30
Надеюсь, эти задачи помогут вам лучше понять и освоить концепцию замыканий в JavaScript!