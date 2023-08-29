// Простые методы массивов

// push()
// pop()
// shift()
// unshift()

// Методы массивов, принимающие функцию в качестве аргумента

// forEach(() => {}) - метод массива, принимающий в качестве аргумента функцию

// map()

// filter()

// find()

// sort()

// callback-функция - функция переданная в другую функцию в качестве аргумента
// функция высшего порядка (Higher-order function) - функция, которая принимает другую функцию в качестве аргумента

// const names = ['Mark', 'Anna', 'David', 'Boris', 'Irina', 'Olga', 'Ekaterina'];

// const newArr = array.map((el) => (typeof el == 'number' ? 'number' : el));
// console.log(newArr);

const array = ['hello', 5, true, 78, 'hi', undefined, 1];
const newArr1 = array.map((el) => {
  if (typeof el == 'number') {
    return el * 2;
  } else if (typeof el == 'string') {
    return 'good morning';
  } else {
    return el;
  }
});
console.log(newArr1);
