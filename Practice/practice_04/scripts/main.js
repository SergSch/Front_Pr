// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11, 9, 2, 7];

// 1.1, 1.2----------------------------------
numbers.push(45, 68, 23);

// 1.4--------------------------------------
numbers.pop();

// 1.5---------------------------------------
numbers.unshift(9);

// 1.6---------------------------------------
numbers.shift();

// 2.3---------------------------------------
console.log(numbers.indexOf(0));

// 2.5---------------------------------------
console.log(numbers.lastIndexOf(9));

// 3.2---------------------------------------
console.log(numbers.join(''));

// 4.1---------------------------------------
numbers.forEach((elem, i) => {
  let q = true;
  if (elem % 2 === 0) {
    console.log(`Element ${i} is ${q}`);
  } else {
    console.log(`Element ${i} is ${!q}`);
  }
});

// 4.4---------------------------------------
let newArr = (par) => par.map((el) => el ** 2);
console.log(newArr(numbers));
// 5.1---------------------------------------
const findDividerFour = numbers.find((elem) => {
  return elem % 4 === 0;
});
console.log(findDividerFour);

// 5.2---------------------------------------
const findThree = (par) => par.findIndex((elem) => elem % 3 === 0);
console.log(findThree(numbers));

// 5.4---------------------------------------
let oddNum = numbers.filter((elem) => elem % 2 === 1);
console.log(oddNum);

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// 1.7---------------------------------------
strings.splice(6, 0, 'and', 'lowercased');

// 1.8---------------------------------------
strings.splice(5, 3, 'tiny');

// 2.1---------------------------------------
let incl = strings.includes('array');

// 3.1---------------------------------------
console.log(strings.join(' '));

// 3.3---------------------------------------
console.log(strings.reverse());

// 4.2---------------------------------------
strings.forEach((elem, i) => {
  if (elem.length < 4) {
    console.log(`Element ${i} is short`);
  } else {
    console.log(`Element ${i} is long`);
  }
});

// 4.5---------------------------------------
const newStr = (par) =>
  par.map((elem) => ({
    value: elem,
    size: elem.length < 4 ? 'short' : 'long',
  }));
console.log(newStr(strings));

// 5.5---------------------------------------
let strMoreThanFive = strings.filter((elem) => elem.length > 5);
console.log(strMoreThanFive);

// ----------------------------------------------------------------------
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
let products = [ball, gloves, shoes, hammer, saw];

// 1.3-----------------------
const newBall = {
  name: 'Ball',
  category: 'Sport',
  img: './assets/ball.jpeg',
  price: 100,
};
products.push(newBall);
console.log(products);

// 2.2------------------------
const ballCopy = ball;

// 2.3------------------------
console.log(products.indexOf('shark'));
products.push(newBall);
console.log(products.includes(ballCopy));
console.log(products.includes(newBall));

// 4.3----------------------------
products.forEach((elem) => {
  console.log(elem.name);
});

// 4.6----------------------------
const newArrGoods = (arr) => arr.map((elem) => elem.name);
console.log(newArrGoods(products));

// 4.7----------------------------
const newArrPrice = (par) => par.map((elem) => elem.price / 2);
console.log(newArrPrice(products));

// 5.3--------------------------------
let findGood = products.find((elem) => elem.category === 'Tools');
console.log(findGood.name);

// 5.6------------------------------------------
let bigPrice = products.filter((elem) => elem.price > 100);
console.log(bigPrice);
