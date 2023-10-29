const products = [
  {
    id: 1,
    title: 'Товар 1',
    price: 1000,
    discount: 0.2,
    marks: [5, 4, 6, 7, 5],
    count: 8,
  },
  {
    id: 2,
    title: 'Товар 2',
    price: 1500,
    discount: 0.1,
    marks: [6, 7, 7, 6, 5],
    count: 5,
  },
  {
    id: 3,
    title: 'Товар 3',
    price: 800,
    discount: 0,
    marks: [5, 5, 6, 7, 6],
    count: 10,
  },
  {
    id: 4,
    title: 'Товар 4',
    price: 1200,
    discount: 0.15,
    marks: [7, 6, 6, 5, 7],
    count: 2,
  },
  {
    id: 5,
    title: 'Товар 5',
    price: 2000,
    discount: 0.25,
    marks: [6, 7, 7, 7, 6],
    count: 7,
  },
  {
    id: 6,
    title: 'Товар 6',
    price: 700,
    discount: 0.05,
    marks: [5, 6, 5, 7, 6],
    count: 9,
  },
  {
    id: 7,
    title: 'Товар 7',
    price: 1800,
    discount: 0.3,
    marks: [7, 7, 6, 6, 5],
    count: 3,
  },
  {
    id: 8,
    title: 'Товар 8',
    price: 1600,
    discount: 0.2,
    marks: [6, 7, 6, 5, 7],
    count: 6,
  },
  {
    id: 9,
    title: 'Товар 9',
    price: 900,
    discount: 0.1,
    marks: [5, 5, 6, 6, 7],
    count: 4,
  },
  {
    id: 10,
    title: 'Товар 10',
    price: 1300,
    discount: 0.18,
    marks: [6, 7, 6, 7, 5],
    count: 1,
  },
];

// создать массив, который содержит объекты со свойствами
// title
// price - цена со скидкой
// let arr1 = products.map((elem) => ({
//   Title: `${elem.title}`,
//   Price: `${elem.price * (1 - elem.discount)}`,
// }));
// ------------
// let arr1 = products.map(({ title, price, discount }) => ({
//   title,
//   price: price * (1 - discount),
// }));
// console.log(arr1);
// -------------------------------

// создать массив, который состоит только из названий товаров
// let arr2 = products.map((elem) => elem.title);
// --------
// let arr2 = products.map(({title}) => title);
// console.log(arr2);
// -------------------------------

// сформировать массив из названий товаров, которые стоят меньше 1000
// let arr3 = products
//   .filter(({ price }) => price < 1000)
//   .map(({ title }) => title);
// console.log(arr3);
// ----------------------

// найти общую сумму всех товаров
// let sum = products.reduce((acc, { price }) => acc + price, 0);
// console.log(sum);
// ------------------------------------

// сформировать массив с объектами
// каждый объект содержит название, цену и оценку
// let arr4 = products.map(({ title, price, marks }) => ({ title, price, marks }));
// console.log(arr4);
// ----------------------------------

// сформировать массив с объектами
// каждый объект содержит название, цену и суммарную оценку
// let arr5 = products.map(({ title, price, marks }) => ({
//   title,
//   price,
//   sumMarks: marks.reduce((acc, elem) => acc + elem),
// }));
// console.log(arr5);
// ------------------------------------------

// сформировать массив с объектами
// каждый объект содержит название, цену и среднюю оценку
// let arr5 = products.map(({ title, price, marks }) => ({
//   title,
//   price,
//   avgMarks: marks.reduce((acc, elem) => acc + elem) / marks.length,
// }));
// console.log(arr5);
// ------------------------------------------

// используя методы массивов найти продукт с наибольшей ценой
// let arr6 = products.reduce((acc, elem) =>
//   acc.price > elem.price ? acc : elem
// );
// console.log(arr6);
// ----------------------------------------------------

// сформировать массив, который состоит из объектов со свойствами
// title, max_mark, min_mark
// let arr7 = products.map(({ title, marks }) => ({
//   title,
//   max_mark: marks.reduce((acc, elem) => (acc > elem ? acc : elem)),
//   min_mark: marks.reduce((acc, elem) => (acc < elem ? acc : elem)),
// }));
// console.log(arr7);
// -------------------------------------

// сформировать массив из объектов
// каждый объект содержит title и marks
// marks содержит не массив из оценок, а объект в котором каждая оценка является ключем,
// а значение - кол-во повторений
// [6, 7, 7, 6, 5]
// {
//     6: 2,
//     7: 2,
//     5: 1
// }
// -----
// let arr8 = products.map(({ title, marks }) => ({
//   title,
//   marks: marks.reduce((acc, elem) => {
//     if (acc[elem]) {
//       acc[elem]++;
//     } else {
//       acc[elem] = 1;
//     }
//     return acc;
//   }, {}),
// }));
// console.log(arr8);
// ---------
let arr8 = products.map(({ title, marks }) => ({
  title,
  marks: marks.reduce(
    (acc, elem) => ({
      ...acc,
      [elem]: 1 + (acc[elem] ?? 0),
    }),
    {}
  ),
}));
console.log(arr8);

function handler(products, i) {
  return products.map((elem) => {
    if (elem.id == i) {
      return { ...elem, price: elem.price * 2 };
    }
    return elem;
  });
}

console.log(
  handler(
    [
      { id: 1, title: 'Велосипед', price: 3700 },
      { id: 2, title: 'Ролики', price: 300 },
      { id: 3, title: 'Самокат', price: 700 },
    ],
    2
  )
);
