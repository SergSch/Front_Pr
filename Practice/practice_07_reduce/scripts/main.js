// We will work here!

const numbers = [10, 45, 3, 9, 19, 11, -5, 0, 7, 21, 89, 68, 1, 13, 8];

// 6. Отсортировать массив чисел `numbers` по убыванию.
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// 10.1
// const newArr = numbers.reduce((a, b) => a + b, 0);
// console.log(newArr);

const strings = ['This', 'is', 'an', 'array', 'of', 'Test', 'strings'];

// const obj = strings.reduce((a, b) => {
//   a[b] = b.length;
//   return a;
// }, {});
// console.log(obj);

// 5. Отсортировать массив строк `strings` по возрастанию.
// strings.sort((a, b) => a.localeCompare(b));
// console.log(strings);

// 1 const newStr = strings.map((el) => el.toUpperCase());
// console.log(newStr);

// 4 Дан массив строк. Представим, что эти строки - тексты элементов списка, полученных с "бэка". Наша задача - создать неупорядоченный список (`ul`) на нашей странице, и добавить в него эти элементы (в виде тегов `li`). Списку добавить класс `custom_ul`. Добавить список на страницу после элемента <div.root>.
// const ulContainer = document.createElement('ul');
// ulContainer.classList.add('custom_ul');
// strings.forEach((str) => {
//   const firstLi = document.createElement('li');
//   firstLi.textContent = str;
//   ulContainer.append(firstLi);
// });
// const rootDiv = document.querySelector('div.root');
// rootDiv.after(ulContainer);

// 8. Отсортировать массив строк по убыванию кол-ва символов в строке;
// strings.sort((a, b) => b.length - a.length);
// console.log(strings);

const ball = {
  name: 'Ball',
  category: 'Sport',
  img: './assets/ball.jpeg',
  price: 100,
};
const gloves = {
  name: 'Gloves',
  category: 'Sport',
  img: './assets/gloves.jpg',
  price: 140,
};
const shoes = {
  name: 'Sport shoes',
  category: 'Sport',
  discount: true,
  img: './assets/shoes.png',
  price: 320,
};
const hammer = {
  name: 'Hammer',
  category: 'Tools',
  img: './assets/hammer.jpeg',
  price: 40,
};
const saw = {
  name: 'Saw',
  category: 'Tools',
  discount: true,
  img: './assets/saw.jpeg',
  price: 75,
};
const shark = {
  name: 'Shark toy',
  category: 'Other',
  img: './assets/shark.jpeg',
  price: 45,
};
// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];
let a = products.reduce((acc, elem) => {
  acc[elem.category] = (elem.price || 0) + 1;
  return acc;
}, {});
console.log(a);
// 2 const names = products.map((el) => el.name);
// console.log(names);

// 3. Получить из массива `products` массив объектов, которые содержат только название и цену товара. То есть, объект товара "превращается" в объект, у которого есть только свойства name, price.
// let arrObj = products.map((el) => ({ name: el.name, price: el.price }));
// console.log(arrObj);
// let newArr = products.map((el) => {
//   return {
//     name: el.name,
//     price: el.price,
//   };
// });
// console.log(newArr);

// 7. Отсортировать массив объектов `products` по возрастанию цены.
// products.sort((a, b) => a.price - b.price);
// console.log(products);

// 9. отсортировать массив объектов (товары) по категории (в алфавитном порядке), и по возрастанию цены. Т.е упорядочить по категориям, и в разрезе категорий - по возрастанию цены.
// products.sort((a, b) => {
//   if (a.category === b.category) {
//     return a.price - b.price;
//   } else {
//     return a.category < b.category ? -1 : 1;
//   }
// });
// console.log(products);

//10.2 - получить суммарную стоимость всех товаров массива `products`
// const sumProd = products.reduce((a, b) => a + b.price, 0);
// console.log(sumProd);

//10.3  - из массива строк `strings` получить объект, в котором ключами будут строки из массива, а значениями - длины этих строк.
// const newArr = strings.reduce((a, b) => {
//   a[b] = b.length;
//   return a;
// }, {});
// console.log(newArr);

// 10.4  - получить массив категорий товаров (т.е. нужно пройтись по массиву товаров методом reduce, и добавлять в "аккумулятор" свойство category рассматриваемого товара)
// const arrCat = products.reduce((a, b) => {
//   a.push(b.category);
//   return a;
// }, []);
// console.log(arrCat);
// ------------------
// const arrUniqCat = products.reduce((a, b) => {
//   if (!a.includes(b.category)) {
//     a.push(b.category);
//   }
//   return a;
// }, []);
// console.log(arrUniqCat);

// --------------------------------------------------------------------------------
// 10.5 - получить объект, в котором будут категории товаров.
// const objProd = products.reduce((accumulator, product) => {
//   accumulator[product.category] = true;
//   return accumulator;
// }, {});
// console.log(objProd);

// =---------------------------------------------------------------------------
//6. получить объект, в котором будут суммарные стоимости товаров по категориям.
// const objSum = products.reduce((accumulator, product) => {
//   if (!accumulator[product.category]) {
//     accumulator[product.category] = 0;
//   }
//   accumulator[product.category] += product.price;
//   return accumulator;
// }, {});
// console.log(objSum);

// 4. Дан массив строк. Представим, что эти строки - тексты элементов списка, полученных с "бэка". Наша задача - создать неупорядоченный список (`ul`) на нашей странице, и добавить в него эти элементы (в виде тегов `li`). Списку добавить класс `custom_ul`. Добавить список на страницу после элемента <div.root>.

const root = document.querySelector('.root');
const ul = document.createElement('ul');
ul.classList.add('custom_ul');
root.append(ul);
strings.forEach((el) => {
  let li = document.createElement('li');
  li.innerText = el;
  ul.append(li);
});
