// Легкие задачи:

// Удвоение чисел: Создайте функцию, которая принимает массив чисел и возвращает новый массив, в котором каждое число умножено на 2.
// function doubleDig(par) {
//     let arr = par.map(elem => elem * 2);
//     return arr;
// }
// console.log(doubleDig([4, 5, 6, 3, 2]));

// Приведение к верхнему регистру: Напишите функцию, которая принимает массив строк и возвращает новый массив, в котором все строки приведены к верхнему регистру.
// function doubleDig(par) {
//     let arr = par.map(elem => elem.toUpperCase());
//     return arr;
// }
// console.log(doubleDig(['apple', 'food', 'asdf', 'asdty']));

// Извлечение длин строк: Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий длины каждой строки.
// function doubleDig(par) {
//     let arr = par.map(elem => elem.length);
//     return arr;
// }
// console.log(doubleDig(['apple', 'food', 'asdf', 'asdty']));

// Средние задачи:

// Перевод температур: У вас есть массив температур в градусах Цельсия. Напишите функцию, которая принимает этот массив и возвращает новый массив, в котором каждая температура переведена в градусы Фаренгейта по формуле (C * 9/5) + 32.
// function doubleDig(par) {
//   let arr = par.map((elem) => (elem * 9) / 5 + 32);
//   return arr;
// }
// console.log(doubleDig([4, 5, 6, 3, 2]));

// Сокращение имён: Создайте функцию, которая принимает массив имён (в формате "Имя Фамилия") и возвращает массив с инициалами (в формате "И. Ф.").
// function doubleDig(par) {
//   let arr = par.map(
//     (elem) =>
//       elem
//         .split(' ')
//         .map((el) => el.slice(0, 1))
//         .join('.') + '.'
//   );
//   return arr;
// }
// console.log(
//   doubleDig(['Name Surename', 'Sdf Tdbgr', 'Pit Sampr', 'John Kennedy'])
// );
const getInitials = (names) =>
  names.map(
    (name) =>
      name
        .split(' ')
        .map((part) => part[0])
        .join('. ') + '.'
  );
console.log(
  getInitials(['Name Surename', 'Sdf Tdbgr', 'Pit Sampr', 'John Kennedy'])
);

// Калькулятор цен: У вас есть массив объектов, каждый из которых представляет товар с ценой и количеством. Напишите функцию, которая вернет массив с общей стоимостью каждого товара (цена * количество).

// const products = [
//   {
//     price: 10,
//     sum: 5,
//   },
//   {
//     price: 13,
//     sum: 5,
//   },
//   {
//     price: 15,
//     sum: 7,
//   },
// ];
// const calculateTotalPrices = prod => prod.map(product => product.price * product.sum);
// console.log(calculateTotalPrices(products));

// function sumGoods(par) {
//   let arr = par.map((elem) => elem.price * elem.sum);
//   return arr;
// }
// console.log(sumGoods(products));

// Сложные задачи:

// Обработка текста: Создайте функцию, которая принимает массив предложений и возвращает массив, в котором каждое предложение имеет добавленный суффикс " - это правда!".
// const newSentence = arrSentencies => arrSentencies.map(
//   (sent) => sent + ' - это правда!'
// );
// console.log(newSentence(['sdf asdfag  fgerg', 'vertb ryhteg rthwrergae', 'qergqewr t5wgtwr']));

// Разбиение на строки: У вас есть большой текст, и вы хотите разбить его на строки с максимальной длиной 80 символов, сохраняя целостность слов. Напишите функцию, которая принимает текст и возвращает массив строк.
const strings = text => text.map(elem => elem.split('').)
// Фильтрация уникальных значений: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения (без повторений).
let unique = numbers => [...new Set(numbers)];
console.log(unique([4, 5, 3, 3, 5, 44, 0, 4, 3, 6, 6, 6]))


// Преобразование объектов: У вас есть массив объектов с информацией о студентах. Напишите функцию, которая преобразует этот массив в массив строк, где каждая строка содержит имя студента и его средний балл, например: "Иванов: 4.5".
