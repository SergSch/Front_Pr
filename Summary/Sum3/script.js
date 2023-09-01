// 1. Дан массив с разными типами данных. Написать функцию, которая возвращает количество элементов в массиве с числовым типом данных. Если в массиве встречается NaN, то не увеличивать на единицу
// const array = ['hello', 2, 9, undefined, 'hi', 88, true, 51, NaN];
// let newArr = array.filter((el) => typeof el === 'number' && !isNaN(el)).length;
// console.log(newArr);
// // -------------------------------------------
// function fo(arr) {
//   let count = 0;
//   for (let i of arr) {
//     if (typeof i === 'number' && !isNaN(i)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(fo(array));
// // -----------------------------------------------
// const array = ['hello', 2, 9, undefined, 'hi', 88, true, 51, NaN]; // 4
// const checker = (el) => typeof el === 'number' && !isNaN(el);
// function foo(par, callback) {
//   let count = 0;
//   par.forEach((el) => {
//     if (callback(el)) {
//       count++;
//       return count;
//     }
//   });
//   return count;
// }
// console.log(foo(array, checker));
// --------------------------------------------------------------------------------------

// 2. Написать функцию, которая принимает значение. Если значение число. то функция возвращает это число умноженное на 15. Если значение строка, то возвращается 'Error'
// const checker = (el) => (typeof el !== 'number' ? 'Error' : el * 15);
// function foo(num, callback) {
//   return callback(num);
// }
// console.log(foo('u', checker));
// // ------------------------------------------------------
// const mul = (par) => (typeof par !== 'number' ? 'Error' : par * 15);
// console.log(mul('u'));
// -------------------------------------------------------------------------------------------

// 3. Написать функцию, которая принимает массив и возвращает новый массив, в который попадают только положительные числа из исходного массива
// const numbers = [4, -10, -7, 54, 1, -9, 45];
// const newArr = (par) => par.filter((el) => el > 0);
// console.log(newArr(numbers));
// ---------------------------------------------------------------------------------------------

// 4. Написать функцию, которая принимает массив с числами и возвращает новый массив только с четными числами
// const arr = [1, 4, 7, 2, 53, 64] ;
// const newArr = (val) => val.filter((el) => el % 2 === 0);
// console.log(newArr(arr));
// ---------------------------------------------------------------------------------------------

// 5. Написать функцию, которая принимает массив с числами и возвращает массив с двумя значениями - суммой всех четных чисел и суммой всех нечетных чисел
// const getSumArray1 = (arr) => {
//   const even_sum = arr.filter((el) => el % 2 === 0).reduce((a, b) => a + b, 0);
//   const odds_sum = arr.filter((el) => el % 2 !== 0).reduce((a, b) => a + b, 0);
//   return [even_sum, odds_sum];
// };
// --------------------------------------------
// const getSumArray = (arr) => {
//   let sum_even = 0;
//   let sum_odds = 0;
//   arr.forEach((el) => (el % 2 === 0 ? (sum_even += el) : (sum_odds += el)));
//   return [sum_even, sum_odds];
// };
// console.log(getSumArray([1, 4, 7, 2, 53, 64]));
// --------------------------------------------------------------------------------------

// 6. Написать функцию, которая принимает массив с разными типами данных. Функция возаращает новый массив без строк. А числовые значения умножены на 2. [4, 18, undefined, 176, true, 102]
// const newArr = (val) =>
//   val
//     .filter((el) => typeof el !== 'string')
//     .map((el) => (typeof el == 'number' ? el * 2 : el));
// console.log(newArr(['hello', 2, 9, undefined, 'hi', 88, true, 51]));
