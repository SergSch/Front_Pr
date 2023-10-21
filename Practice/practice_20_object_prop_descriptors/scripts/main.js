// код пишем здесь!

const gloves = {
  productCode: 1,
  name: 'Gloves',
  price: 10,
  description: 'Gloves to deal with rough materials',
  discount: 5,
};

// 1. Пристрелочная задача. Для товара `gloves`, сделать цену неизменяемой.
// Object.defineProperty(gloves, 'price', { writable: false });

const shoes = {
  productCode: 2,
  name: 'Shoes',
  price: 15,
  description: 'Just the sport shoes',
};

const ball = {
  productCode: 3,
  name: 'Ball',
  price: 8,
  description: 'The ball to play basketball',
};

const jacket = {
  productCode: 4,
  name: 'Jacket',
  price: 18,
  description: 'Sport jacket to use in case of cold weather',
  discount: 10,
};

const productAdditional = {
  brand: 'Puma',
  shopId: 14,
};

const products = [gloves, shoes, ball, jacket];

// -----------------
// 4. У нас есть объект `productAdditional` - с дополнительной информацией относительно наших товаров. Нам нужно сделать так, чтобы свойства объекта `productAdditional` добавились бы к свойствам всех товаров из массива `products` - то есть "объединить" объекты. Можно использовать spread-оператор, а можно - методы `Object`.

products.forEach((elem) => Object.assign(elem, productAdditional));
console.log(products);

// 5. Пройтись по массиву `products`, собрать объект, который содержит в качестве ключей названия товаров, а в качестве значений - их цены. ВАЖНО - эта задача решается методами массивов!
let newProducts = products.reduce((acc, elem) => {
  acc[elem.name] = elem.price;
  return acc;
}, {});
console.log(newProducts);

// -----------------------------------

// 2. Еще пристрелочная. Для всех товаров, которые есть в массиве `products`, сделать так, чтобы свойство `productCode` игнорировалось при переборе свойств объекта.
products.forEach((elem) => {
  Object.defineProperty(elem, 'productCode', { enumerable: false });
});

// -------------------------------------
// 3. Запретить изменение свойства `price` для всех товаров массива `products`, у которых есть свойство `discount`.
products.forEach((elem) => {
  if (elem.discount) {
    Object.defineProperty(elem, 'price', { writable: false });
  }
});
// -------------------------------

// 6. Пишем функцию `getMaxProperty`. На вход она примет объект, у которого будут свойства, которые содержат числа. Нужно найти свойство, значение которого максимальное в рамках объекта.
// 7. Задача со звездочкой. Дорабатываем функцию `getMaxProperty`, чтобы она могла работать с объектами, у которых свойства не только числовые. То есть, нам нужно рассматривать только те свойства, у которых значения являются числами (`typeof value === 'number'`).

const getMaxProperty = (obj) => {
  let arr = Object.entries(obj);
  let newarr = arr
    .filter((elem) => typeof elem[1] == 'number')
    .sort((a, b) => b[1] - a[1]);
  return newarr[0];
};
console.log(getMaxProperty({ a: 3, r: 5, t: 1, w: 'dzfv', p: 'muyik' }));

// -------------------------------------
// 8. У нас есть объект `orders`, который содержит данные по заказам пользователей. Нужно создать объект, в котором ключами будут ключи объекта `orders`, а в качестве значений будут объекты с кол-вом заказанных товаров (свойство `totalCount`), и суммарной стоимостью товаров заказа (`totalAmount`).

const gloves = {
  productCode: 1,
  name: 'Gloves',
  price: 10,
  description: 'Gloves to deal with rough materials',
  discount: 5,
};
const shoes = {
  productCode: 2,
  name: 'Shoes',
  price: 15,
  description: 'Just the sport shoes',
};
const ball = {
  productCode: 3,
  name: 'Ball',
  price: 8,
  description: 'The ball to play basketball',
};
const jacket = {
  productCode: 4,
  name: 'Jacket',
  price: 18,
  description: 'Sport jacket to use in case of cold weather',
  discount: 10,
};
const products = [gloves, shoes, ball, jacket];

const orders = {
  user1: [ball, gloves],
  user2: [jacket, gloves],
  user3: [shoes, jacket, ball],
};

// ------------------------------
// 8. У нас есть объект `orders`, который содержит данные по заказам пользователей. Нужно создать объект, в котором ключами будут ключи объекта `orders`, а в качестве значений будут объекты с кол-вом заказанных товаров (свойство `totalCount`), и суммарной стоимостью товаров заказа (`totalAmount`).

let dataUsers = {};
let enter = Object.entries(orders).forEach((elem) => {
  let userNum = elem[0];
  let userData = elem[1];
  dataUsers[userNum] = {
    totalCount: userData.length,
    totalAmount: userData.reduce((acc, elem) => acc + elem.price, 0),
  };
});
console.log(dataUsers);
// ---------------------------

// 9. Пишем функцию `processOrders` - она должна обработать заказы и сформировать счет для каждого пользователя. Нужно, чтобы она вернула массив объектов. Каждый объект - это счет, который будет отправлен пользователю. Он содержит такие свойства:
//  - userId - это ключ пользователя (ключ из объекта `orders`)
//  - totalAmount - общая сумма товаров из заказа
//  - orderedItems - список названий заказанных товаров через запятую.
const processOrders = (obj) => {
  let dataArr = Object.entries(obj).map((elem) => {
    let userNum = elem[0];
    let userData = elem[1];
    let endArr = {
      userId: userNum,
      totalAmount: userData.reduce((acc, elem) => acc + elem.price, 0),
      orderedItems: userData.map((elem) => elem.name),
    };
    return endArr;
  });
  return dataArr;
};
console.log(processOrders(orders));
