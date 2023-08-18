// МАССИВЫ

// Найти наименьшее значение в массиве
// const numbers = [5, 9, 3, 4, 10, 12, 8, 21, 7];
// let min = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);

// 1.2 Найти среднее арифметическое всех элементов массива чисел
// const numbers = [5, 9, 3, 4, 10, 12, 8, 21, 7];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   count += numbers[i];
// }
// console.log(count / numbers.length);

/* 1.3 Перебор массива объектов - вывод свойств объекта. Нужно пройтись по массиву products и вывести в консоль значение свойства name каждого товара */
const products = [
  {
    name: 'Ball',
    category: 'Sport',
    price: 100,
  },
  {
    name: 'Gloves',
    category: 'Sport',
    price: 140,
  },
  {
    name: 'Sport shoes',
    category: 'Sport',
    discount: true,
    price: 320,
  },
  {
    name: 'Hammer',
    category: 'Tools',
    price: 40,
  },
  {
    name: 'Saw',
    category: 'Tools',
    discount: true,
    price: 75,
  },
  {
    name: 'Shark toy',
    category: 'Other',
    price: 45,
  },
  {
    name: 'Truck',
    category: 'Other',
    price: 80,
  },
];
// for (let product of products) {
//   console.log(i.name);
// }

/* 1.4 Перебор массива объектов - найти объект по критерию. Пройтись по массиву товаров, найти первый товар с ценой больше 200 единициц. И вывести его в консоль.  */
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 200) {
//     console.log(products[i].name);
//     break;
//   }
// }

/* Найти суммарную стоимость всех товаров - т.е. сумму всех свойств price всех товаров.  */
// let sum = 0;
// for (let product of products) {
//   sum += product.price;
// }
// console.log(sum);
