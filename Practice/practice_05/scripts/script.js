// 1. Пристрелочная задача на колбэки. Написать функцию `doHomework`. Она принимает 2 аргумента: название предмета, по которому выполняем домашку, и функцию, которая решает ДЗ по предмету. Задача функции - вывести в консоль сообщение вида "starting {subject} homework", и вызвать функцию-колбэк. В аргументах функции-колбэка передаем предмет.
// // Колбэк-функция
// function homeworkCallback(subject) {
//   console.log(`I finished my ${subject} homework!`);
// }
// // Функция, которая ожидает колбэк
// function doHomework(subject, callback) {
//   // Add implementation here
// }
// doHomework('math', homeworkCallback);
// // Expected output:
// //  - starting math homework;
// //  - I finished my math homework!
function doHomework(subject, foo) {
  console.log(`i am starting ${subject} homework`);
  foo(subject);
}
function homeworkCallback(subject) {
  console.log(`I finished my ${subject} homework!`);
}
doHomework('fe', homeworkCallback);

// 2. Пишем свою реализацию метода `filter`, назовем ее `customFilter`. Функция принимает 2 аргумента, массив `srcArray` и критерий отбора (колбэк). Функция должна вернуть новый массив, который включает только те элементы массива `srcArray`, для которых колбэк возвращает `true`.

function customFilter(arr, callback) {
  let newArr = [];
  for (let i of arr) {
    if (callback(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(customFilter([3, 4, 5, 6, 7], (foo = (arg) => arg % 2 == 0)));

// 3. Пишем функцию `firstFail`. Она примет на вход массив, и функцию-проверку `checker`. Функция должна вернуть объект, у которого будут свойства:
// - `passed` - массив, в который попадут все элементы исходного массива, для которых функция `checker` вернула true - до первого "фейла".
// - `failed` - массив, куда попадут все остальные элементы исходного массива.
// const checker = (el) => el % 2 === 0;
// firstFail( [2,8,10,7,6,4,31], checker ); // { passed: [2,8,10], failed: [7,6,4,31] }
// firstFail( [1,2,8,10,34,2], checker ); // {passed: [], failed: [1,2,8,10,34,2] }
function firstFail(arr, callBack) {
  let passed = [];
  let failed = [];
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (!callBack(arr[i])) {
      index = i;
      passed = arr.slice(0, i);
      failed = arr.slice(i);
      break;
    }
  }
  return { passed, failed };
}
const checker = (el) => el % 2 === 0;
console.log(firstFail([2, 8, 10, 7, 6, 4, 31], checker));

// 4. Переходим к замыканиям. Пишем функцию `summarizer`. Она принимает аргумент `addVal`, и должна вернуть другую функцию, которая также принимает число, и возвращает сумму этих двух чисел.

// let fun1 = summarizer(5);
// fun1(10); // 15
function summarizer(addVal) {
  return function (num) {
    return addVal + num;
  };
}
let fun1 = summarizer(5);
console.log(fun1(10)); // 15

// 5. Пишем функцию `multiplyArray`. Она должна принять на вход массив `srcArray`, и вернуть другую функцию, которая примет на вход число `multiplier`. Результатом выполнения второй функции должен стать НОВЫЙ массив, который будет равен произведению элементов `srcArray` на число `multiplier`.
// let m = multiplyArray( [1, 2, 3] );
// m(2); // [2, 4, 6]
// let k = multiplyArray( [5, 3, 1] )(3); // [15, 9, 3]

function multiplyArray(srcArr) {
  return function (multiplier) {
    let newArr = srcArr.map((elem) => elem * multiplier);
    return newArr;
  };
}
let m = multiplyArray([1, 2, 3]);
console.log(m(2)); // [2, 4, 6]
let k = multiplyArray([5, 3, 1])(3);
console.log(k); // [15, 9, 3]

// 6. Реализуем вычисление арифметической прогрессии с помощью замыканий. Пишем функцию `simpleProgression`, она принимает на вход один аргумент - т.н. "разность" прогрессии. Задача функции - вернуть другую функцию, которую мы будем вызывать для получения следующего числа прогрессии. Подсказка: в замыкании имеет смысл хранить текущее число последовательности.
// Арифметическая прогрессия - это последовательность чисел, каждое последующее число в которой получается прибавлением "разности прогрессии" к предыдущему числу последовательности. Первое число последовательности - 0. Далее - прибавляем к нулю "разность прогрессии", и получаем второе число последовательности. И так далее.
// function simpleProgression(base) {
//   // Add some code here please
// }
// const generator = simpleProgression(2);
// generator(); // 2
// generator(); // 4
// generator(); // 6
function simpleProgression(arg) {
  let count = 0;
  return function () {
    return (count += arg);
  };
}
const generator = simpleProgression(2);
console.log(generator());
console.log(generator());
console.log(generator());
generator(); // 2
generator(); // 4
generator(); // 6

// 7. Реализуем "генератор" чисел Фибоначчи с помощью замыканий. Числа Фибоначчи - это последовательность чисел, где следующее число равно сумме двух предыдущих. Пример - 1,1,2,3,5,8,13,21,34,55,89,... Нам нужно с помощью замыканий реализовать генератор. То есть, пишем функцию `fibonacciGenerator`, которая вернет нам другую функцию, результатом вызова которой будет следующее число Фибоначчи. Подсказка: в замыкании `fibonacciGenerator` имеет смысл хранить 2 предыдущих числа Фибоначчи, и в самом начале это должны быть 1 (то есть первые два числа Фибоначчи - это единицы).

function fibonacciGenerator() {
  return function () {};
}
// let generator = fibonacciGenerator();
// generator(); // 2
// generator(); // 3
// generator(); // 5
// generator(); // 8
