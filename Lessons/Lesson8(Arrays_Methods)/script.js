// Reduce()
// let array = [1, 2, 3, 4, 5];
// let sum = array.reduce((acum, elem) => acum + elem / array.length, 0);
// console.log(sum);
// -----------------------------------------------------------------------------------------------------

// Задача
// Рассчитайте сумму всех зарплат
// let users = [
//   { id: 1, name: 'Alex', salary: 1000 },
//   { id: 2, name: 'Neena', salary: 2000 },
//   { id: 3, name: 'Willyam', salary: 3000 },
//   { id: 4, name: 'John', salary: 4000 },
//   { id: 5, name: 'Steven', salary: 4400 },
//   { id: 6, name: 'Gendalf', salary: 200 },
// ];
// const sum = users.reduce((acc, val) => acc + val.salary, 0);
// console.log(sum);

// -----------------------------------------------------------------------------------
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const sum = matrix.reduce((acc, el) => {
//   let arrSum = el.reduce((acc, sum) => acc + sum, 0);
//   return acc + arrSum;
// }, 0);
// console.log(sum);
// ---------------------
// const su = matrix.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b, 0);
// console.log(su);
// -------------------------------------------------------------------------------------------------------

// Расчитайте среднюю длину строки в массиве
// let goods = ['Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка'];
// const avg = goods.reduce((acc, el) => acc + el.length, 0) / goods.length;
// console.log(avg);

// --------------------------------------------------------------------
