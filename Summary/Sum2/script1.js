// Задача 1: find()
// Найти первый четный элемент в массиве.
// const numbers = [3, 7, 2, 9, 8, 5];
// const firstNum = numbers.find((el) => el % 2 === 0);
// console.log(firstNum);

// Найти первую строку, длина которой больше 5 символов.
// const words = ['cat', 'elephant', 'dog', 'lion', 'bird'];
// const firstStr = words.find(str => str.length > 5);
// console.log(firstStr);

// Найти первый элемент массива, который является простым числом.
// const numbers = [4, 7, 12, 11, 16];
// function foo(par) {
//   if (par <= 1) return false;
//   for (let i = 2; i <= par / 2; i++) {
//     if (par % i == 0) return false;
//   }
//   return true;
// }
// const a = numbers.find(foo);
// console.log(a);

//  Найти первое положительное число в массиве.
// const numbers = [-2, 0, 5, -8, 10];
// const firstEven = numbers.find((el) => el > 0);
// console.log(firstEven);

// Найти первую строку длиной более 7 символов.
// const words = ['apple', 'banana', 'grape', 'pineapple'];
// const firstStr = words.find(el => el.length > 7);
// console.log(firstStr);

//  Найти первый элемент массива, который делится на 3 без остатка.
// const numbers = [7, 12, 5, 9, 16];
// const firstNum = numbers.find(el => el % 3 === 0);
// console.log(firstNum);

// // --------------------------------------------------------------------------------------
// filter();
// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Eve', grade: 78 },
//     { name: 'Dan', grade: 95 },
//   ];
//   const goodStudent = students.filter(el => el.grade > 90);
//   console.log(goodStudent.name);

// Отфильтровать массив, оставив только положительные числа.
// const numbers = [-2, 5, -8, 0, 10, -3];
// const evenArr = numbers.filter(el => el > 0);
// console.log(evenArr);

// Отфильтровать массив объектов, оставив только те, у которых значение свойства "age" больше 30.
// const people = [
//   { name: 'Alice', age: 28 },
//   { name: 'Bob', age: 42 },
//   { name: 'Eve', age: 31 },
// ];
// const oldPeople = people.filter((el) => el.age > 30);
// console.log(oldPeople);

// Отфильтровать массив строк, оставив только те строки, которые содержат более двух гласных букв.
// const words = ['apple', 'banana', 'grape', 'pineapple'];
// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     return str.split('').filter(char => vowels.includes(char)).length;
//   }
//   const moreThan2Vowels = words.filter(word => countVowels(word) > 2);
//   console.log(moreThan2Vowels);

// Отфильтровать массив строк, оставив только те, которые начинаются на букву "A".
// const words = ['apple', 'banana', 'apricot', 'grape'];
// const startA = words.filter(el => el.startsWith('a'));
// console.log(startA);

//  Отфильтровать массив объектов, оставив только те, у которых значение свойства "price" больше 50.
// const products = [
//   { name: 'apple', price: 50 },
//   { name: 'banana', price: 30 },
//   { name: 'pear', price: 70 },
//   { name: 'grape', price: 60 },
// ];
// const highPrice = products.filter((el) => el.price > 50);
// console.log(highPrice);

// ------------------------------------------------------------
//  sort()
// Отсортировать массив строк по алфавиту в порядке возрастания.
// const fruits = ['banana', 'apple', 'pear', 'grape'];
// fruits.sort();
// console.log(fruits);

// Отсортировать массив чисел в порядке убывания.
// const numbers = [7, 2, 10, 5, 3];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// Отсортировать массив объектов по возрасту в порядке возрастания.
// const people = [
//     { name: 'Alice', age: 28 },
//     { name: 'Bob', age: 42 },
//     { name: 'Eve', age: 31 },
//   ];
//   people.sort((a, b) => a.age - b.age);
//   console.log(people);

// Отсортировать массив строк по длине строк в порядке убывания.
// const words = ['apple', 'banana', 'grape', 'pineapple'];
// words.sort((a, b) => b.length - a.length);
// console.log(words);

// Отсортировать массив объектов по имени в алфавитном порядке.
// const people = [
//   { name: 'Alice', age: 28 },
//   { name: 'Eve', age: 31 },
//   { name: 'Bob', age: 42 },
// ];
// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);

// Отсортировать массив объектов по возрасту в порядке убывания, а при равных возрастах - по имени в алфавитном порядке.
// const people = [
//   { name: 'Alice', age: 28 },
//   { name: 'Eve', age: 31 },
//   { name: 'Bob', age: 28 },
//   { name: 'Dan', age: 28 },
// ];
// people.sort((a, b) => {
//   if (a.age === b.age) {
//     return a.name.localeCompare(b.name);
//   }
//   return a.age - b.age;
// });
// console.log(people);
