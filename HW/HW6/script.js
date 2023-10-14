// 1. Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца.
// Примечание: инициализация дат должна быть внутри функции

const checkDate = (value) => {
  let endMonat = new Date(value);
  let e = endMonat.getTime();
  console.log(e);
  let date = new Date().getTime();
  console.log(date);
  let res = e - date;
  return Math.ceil(res / (1000 * 60 * 60 * 24));
};
console.log(checkDate(2023, 10, 31));

let endMonat = new Date(2023, 9, 31).getTime();
console.log(endMonat);
let date = new Date().getTime();
console.log(date);
let res = endMonat - date;
let a = Math.ceil(res / (1000 * 60 * 60 * 24));
console.log(a);

// --------------------------------------------------------------

// 2. Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.
// Предусмотрите вывод 4 пункта (дня, дней)

const isItFridayToday = () => {
  let day = new Date().getDay();
  if (day == 5) {
    return 'Today is friday';
  } else if (day == 4) {
    return 'Friday is tomorrow';
  } else if (day == 6) {
    return 'Friday was yesterday';
  } else if (day == 3 || day == 2) {
    return `Пятница через ${day} дня`;
  } else {
    return `Пятница через ${day} дней`;
  }
};
console.log(isItFridayToday());

// -----------------------------------------------------------------------

// 3. Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:
// Пример:
// let prices = [
// 'Цена товара - 1200$',
// 'Стоимость - 500$',
// 'Цена не определена', '9999',
// 'Ценовая категория - больше 300$',
// 'Цена за услугу 500 EUR',
//  ]
// console.log(getInfo(prices))
// Результат: [3,3]

let prices = [
  'Цена товара - 1200$',
  'Стоимость - 500$',
  'Цена не определена',
  '9999',
  'Ценовая категория - больше 300$',
  'Цена за услугу 500 EUR',
];

const getInfo = (arr) => {
  let countPrices = 0;
  let countDollars = 0;
  arr.forEach((elem) => {
    if (elem.startsWith('Цена')) {
      countPrices++;
    }
  });
  arr.forEach((elem) => {
    if (elem.endsWith('$')) {
      countDollars++;
    }
  });
  return [countPrices, countDollars];
};
console.log(getInfo(prices));

// --------------------------------------------------------

// 4. Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру:

// Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']

let arrays = [
  '89840959944 exampleonemain@mail.ru',
  '+79840959933 forreason@yandex.net',
  'somemail@mail.ru',
  '89840959900 example@gmil.ru',
  '+79840959911',
  'grandthere@mail.ru',
  'jetpackfor@gmail.ru',
  '89840959922 some@yandex.com',
];
let phones = [];
let emails = [];
let result = arrays.flatMap((elem) => {
  const parts = elem.split(' ');
  return parts.filter((part) => part !== '');
});
result.forEach((elem) => {
  if (elem.includes('@')) {
    emails.push(elem);
  } else {
    phones.push(elem);
  }
});
console.log(phones);
console.log(emails);
// -----------------------------------------------------

// 5. Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.
// Пример:
// Результат: [
// '4000*****9499',
// '4000*****7379',
// '4000*****9869',
// '4000*****7859',
// '4000*****6899',
// '4000*****4699'
// ]
let phones = [
  '4000 0012 0056 9499',
  '4000 0013 5456 7379',
  '4000 0014 1456 9869',
  '4000 0015 3466 7859',
  '4000 0016 3556 6899',
  '4000 0017 4456 4699',
];
let a = phones.map((elem) => elem.slice(0, 4) + '*****' + elem.slice(-4));
console.log(a);
