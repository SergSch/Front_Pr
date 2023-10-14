// const promise = new Promise((resolve, reject) => {
//   const value = Math.random();
//   if (value > 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// promise.then(
//   () => console.log('bought cake'),
//   () => console.log('no cake')
// );

// -------------------------------------------------------
// сформировать массив, состоящий из строк (username)
// вывести получившийся массив в консоль

const handler = (data) => {
  let newObj = data.map(({ name }) => ({ name }));
  console.log(newObj);
};

fetch('https://jsonplaceholder.typicode.com/users')
  .then(
    (response) => response.json(),
    () => console.log('some errors with request')
  )
  .then(handler, () => console.log('some errors with json conversion'));

//   forEach - для прохода по элементам массива
// возвращает undefined

// map - для формирования нового массива на основе старого
// возвращает новый массив

// filter - для формирования нового массива, состоящего только из тех элементов, которые подходят по условию
// возвращает новый массив

// find - для поиска элемента по условию.
// возвращает первый элемент, который подходит по условию

// reduce - для расчета агрегации
// возвращает все что угодно

// создать новый массив, который содержит только пложительные числа
// отрицательные нужно преобразовать в положительные (-5 -> 5)
const arr = [13, -5, 2, -6, 23, 6, -34];
let a = arr.map((el) => (el > 0 ? el : Math.abs(el)));
// console.log(a);

const products = [
  { id: 1, title: 'велосипед', price: 3400, count: 10 },
  { id: 2, title: 'ролики', price: 560, count: 0 },
  { id: 3, title: 'самокат', price: 900, count: 5 },
  { id: 4, title: 'лыжи', price: 2200, count: 3 },
  { id: 5, title: 'коньки', price: 920, count: 0 },
  { id: 6, title: 'скейт', price: 1100, count: 7 },
];
// const newArr = products.map((elem) => {
//   const { title, price } = elem;
//   return {
//     title: title,
//     price: price,
//   };
// });
// console.log(newArr);
// --------
const newArr = products.map(({ title, price }) => ({ name: title, price }));
// console.log(newArr);

function foo({ a, b }) {
  let q = a + b;
  return q;
}
// console.log(foo({ a: 10, b: 5 }));
