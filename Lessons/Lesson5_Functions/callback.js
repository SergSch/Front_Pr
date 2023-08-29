// Callback
// функция, которая передается в качестве аргумента другой функции

// function handler(callback) {
//   let a = callback(5);
//   return a;
// }
// console.log(handler((c) => c * 10));

// --------------------------------------------------
// function math(a, b, sign) {
//   if (sign === '+') {
//     return a + b;
//   } else if (sign === '-') {
//     return a - b;
//   } else if (sign === '/') {
//     return a / b;
//   } else if (sign === '*') {
//     return a * b;
//   }
// }
// console.log(math(5, 10, '+'));
// console.log(math(5, 4, '*'));

// function math(callback) {
//   return callback();
// }
// console.log(math(() => 3 * 3));

function handler(products) {
  let sum = products.reduce((a, b) => a.price + b.price, 0);
  return sum;
}
console.log(
  handler([
    { title: 'bike', price: 3400 },
    { title: 'skate', price: 500 },
    { title: 'skis', price: 1200 },
  ])
);
