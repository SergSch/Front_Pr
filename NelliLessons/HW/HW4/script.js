// ДЗ

// Найти первое положительное число в массиве.
const findFirstEven = (arr) => arr.find((elem) => elem > 0);
console.log(findFirstEven([-1, -3, 4, 5, 6, -5]));

// Найти первое отрицательное число в массиве.
const findFirstOdd = (arr) => arr.find((elem) => elem < 0);
console.log(findFirstOdd([1, -3, 4, 5, 6, -5]));

// Найти первый элемент, больший 100.
const findNumMoreHund = (arr) => arr.find((elem) => elem > 100);
console.log(findNumMoreHund([3, 5, 7, 101, 4543, 5643]));

// Найти первый элемент, начинающийся с определенной буквы.
const findMyLetter = (arr) =>
  arr.find((elem) => elem[0].toUpperCase().startsWith('H'));
console.log(findMyLetter(['ello', 'sdfg', 'sdlfks', 'sdf', 'rth', 'hwtr']));

// *Найти первый элемент, который является палиндромом (читается одинаково с начала и с конца). => 'anna', 'sos', ...
const findPalindrom = (arr) =>
  arr.find((elem) => elem == elem.split('').reverse().join(''));
console.log(findPalindrom(['sd', 'erbvr', 'vrte', 'anna']));
