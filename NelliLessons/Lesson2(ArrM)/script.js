// *7. Создайте пустой массив vowels. Используя цикл, найдите и добавьте все гласные буквы из строки "Hello, World!" в массив с использованием метода push. Вам также понадобится использовать метод includes().

const greeting = 'Hello, WOrld!';
const vowels = [];

for (let i = 0; i < greeting.length; i++) {
  // const letter = greeting[i].toLowerCase();
  const vow_letter = [
    'a',
    'o',
    'i',
    'y',
    'u',
    'e',
    'A',
    'O',
    'I',
    'U',
    'Y',
    'E',
  ];

  if (vow_letter.includes(greeting[i])) {
    vowels.push(greeting[i]);
  }
}

// console.log(vowels);

// Callback (функция обратного вызова) - это функция, переданная в другую функцию в качестве аргумента
// High-order function (функция высшего порядка) - это функция, которая принимает другую функцию в качестве аргумента

const multNums = (arr) => {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] * 2);
  }
  return new_arr;
};
console.log(multNums([2, 5, 10, 15]));

// 1. Написать функцию, которая принимает массив с числами и возвращает новый массив с этими числами, умноженными на 2

const multNums = (arr) => {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] * 2);
  }

  return new_arr;
};

// console.log(multNums([2, 5, 10, 15])); // [4, 10, 20, 30]

// 2. Написать функцию, которая принимает массив с числами и возвращает новый массив с этими числами, деленными на 2

const divideNums = (arr) => {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] / 2);
  }

  return new_arr;
};

// console.log(divideNums([2, 5, 10, 15])); // [1, 2.5, 5, 7.5]

// 3. Написать функцию, которая принимает массив с числами и возвращает новый массив с этими числами, увеличенными на 10

const plusNums = (arr) => {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] + 10);
  }

  return new_arr;
};

// console.log(plusNums([2, 5, 10, 15])); // [12, 15, 20, 25];

// 4. Написать функцию, которая принимает массив с числами и инструкцию, разъясняющую что сделать с числом прежде, чем добавить его в новый массив. Функция возвращает новый массив

const changeNums = (arr, instruction) => {
  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr.push(instruction(arr[i]));
  }

  return new_arr;
};

const multN = (a) => a * 2;
const divideN = (n) => n / 2;
const plusN = (n) => n + 10;
const powN = (n) => n ** 2;

// console.log(changeNums([2, 5, 10, 15], divideN)); // [1, 2.5, 5, 7.5]
// console.log(changeNums([2, 5, 10, 15], powN)); // [4, 25, 100, 225]
// console.log(changeNums([2, 5, 10, 15], plusN)); // [12, 15, 20, 25]
// console.log(changeNums([33, 100, 1], multN)); // [66, 200, 2]

// ---------------------------------------

let a = [3, 5, 6];
const multNum = (arr) => {
  let newArr = arr.forEach((elem) => elem * 2);
  return newArr;
};
console.log(multNum(a));

// 2. Написать функцию, которая принимает массив чисел и значение и возвращает новый массив со всеми числами исходного массива, умноженными на значение второго аргумента

const multNums = (arr, num) => {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] * num);
  }
  return new_arr;
};

let a = [3, 5, 6];
const m1 = (arr, num) => {
  const q = [];
  arr.forEach((elem) => {
    q.push(elem * num);
  });
  return q;
};
console.log(m1(a, 3));
const m2 = (arr, num) => {
  const q = arr.map((elem) => elem * num);
  return q;
};
console.log(m2(a, 6));
