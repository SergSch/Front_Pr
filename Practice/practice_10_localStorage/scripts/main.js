// const testObejct = {
//   firstProperty: 'This is my first property',
//   secondProperty: 'The second one',
//   composedProperty: {
//     firstPart: 'First part',
//     secondPart: 'The second part',
//   },
// };

// 1. Пристрелочная задача. Освежаем в памяти сериализацию/десериализацию объектов, и обработчики событий. В файле `main.js` есть объект `testObject`, который содержит поля. Задача - его сериализовать и записать в `localStorage`, с ключом `testObject`.
// localStorage.setItem('testObject', JSON.stringify(testObejct));
// -----------------------------------------------------------------------------------------------

// 2. В разметке есть кнопка `testButton`, у нее есть ID. Добавляем обработчик события на эту кнопку. При клике нужно:
//  - достать из `localStorage` значение по ключу `testObject`.
// const btn = document.querySelector('#saveTestObjectBtn');
// btn.addEventListener('click', () => {
//   let deserializedObj = JSON.parse(localStorage.getItem('testObject'));
//   console.log(deserializedObj);
//   console.log(deserializedObj.firstProperty);
// });
// ---------------------------------------------------------------------------------------------------

// 3. Обеспечить сохранение данных всех инпутов в блоке "Блок для второй задачи". У блока есть ID: `inputsBlock`. В блоке есть несколько инпутов. У каждого инпута есть свой ID.
//  - Написать функцию `saveInputsData`, которая будет запоминать все значения инпутов в `localStorage`. Функция должна создать объект, в который запишет значения всех инпутов в блоке, при этом в качестве ключей используем идентификаторы (ID). И этот объект записать в `localStorage`. Эта функция должна вызываться при клике на кнопку "Сохранить".
//   - Далее написать функцию `restoreInputsData` - она должна восстановить значения в инпутах из `localStorage`. Эта функция должна вызываться при клике на кнопку "Восстановить".
//   - написать функцию `clearInputsData` - очистка объекта с данными инпутов в `localStorage`. Вызывается при клике на кнопку "Очистить".

// const inputsBlock = document.querySelector('#inputsBlock');
// const inputsInBlock = inputsBlock.querySelectorAll('input');

// function saveInputsData() {
//   let inputsData = {};
//   inputsInBlock.forEach((item) => {
//     inputsData[item.id] = item.value;
//   });
//   localStorage.setItem('obj', JSON.stringify(inputsData));
// }
// const save = document.querySelector('#saveInputsDataButton');
// save.addEventListener('click', () => {
//   saveInputsData();
//   inputsInBlock.forEach((el) => {
//     el.value = '';
//   });
// });
// --------------

// function restoreInputsData() {
//   let obj = JSON.parse(localStorage.getItem('obj'));
//   if (obj != null) {
//     inputsInBlock.forEach((el) => {
//       el.value = obj[el.id];
//     });
//   }
// }
// const restore = document.querySelector('#restoreInputsDataButton');
// restore.addEventListener('click', () => {
//   restoreInputsData();
// });
// ------------------------------------
//   - написать функцию `clearInputsData` - очистка объекта с данными инпутов в `localStorage`. Вызывается при клике на кнопку "Очистить".
// const clear = document.querySelector('#clearInputsDataButton');
// function clearInputsData() {
//   localStorage.clear();
//   inputsInBlock.forEach((el) => {
//     el.value = '';
//   });
// }
// clear.addEventListener('click', () => {
//   clearInputsData();
// });
// =-------------------------------------------------------------------------------
const ball = {
  id: 1,
  name: 'Ball',
  category: 'Sport',
  img: './assets/ball.jpeg',
  price: 100,
};
const gloves = {
  id: 2,
  name: 'Gloves',
  category: 'Sport',
  img: './assets/gloves.jpg',
  price: 140,
};
const shoes = {
  id: 3,
  name: 'Sport shoes',
  category: 'Sport',
  discount: true,
  img: './assets/shoes.png',
  price: 320,
};
const hammer = {
  id: 4,
  name: 'Hammer',
  category: 'Tools',
  img: './assets/hammer.jpeg',
  price: 40,
};
const saw = {
  id: 5,
  name: 'Saw',
  category: 'Tools',
  discount: true,
  img: './assets/saw.jpeg',
  price: 75,
};
const shark = {
  id: 6,
  name: 'Shark toy',
  category: 'Other',
  img: './assets/shark.jpeg',
  price: 45,
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];
// -----------------------------------------------------------------------
// 4. Работаем с DOM, и готовим почву для следующей задачи. Нам нужно написать функцию, которая отрендерит список товаров. Список товаров - это массив `products`. Он содержит данные товаров. Нам нужно пройтись по массиву товаров, и отрисовать их. Товары должны размещаться в контейнере (`div.productsContainer`).
//  - товары рендерим в виде карточек. Карточка - это `div.productCard`.
//  - у товара есть адрес изображения. Рендерим его как изображение (`img.productImg`).
//  - у товара есть название (`h3`), заполняем его свойством `name` объекта с данными товара
//  - У товара есть категория, цена. Их отображаем как параграфы.
//  - каждая карточка товара должна содержать две кнопки (`button.button`). Текст первой - "В корзину", текст второй - "Убрать". Первой кнопке добавить класс `addToCartBtn`, второй - `removeFromCartBtn`
//  -----------------------------------------------------------------------
const container = document.querySelector('.productsContainer');
const show = document.createElement('button');
show.classList.add('showBasket');
show.innerText = 'Показать корзину';
const clearBascket = document.createElement('button');
clearBascket.classList.add('showBasket');
clearBascket.innerText = 'Очистить корзину';
container.after(clearBascket);
container.after(show);
let basket = {};
let count = 0;

function render(arr) {
  for (let elem of arr) {
    const card = document.createElement('div');
    card.classList.add('productCard');
    const img = document.createElement('img');
    img.classList.add('productImg');
    const h3_name = document.createElement('h3');
    h3_name.classList.add('productName');
    const price = document.createElement('p');
    price.classList.add('productPrice');
    const add = document.createElement('button');
    add.classList.add('addToCartBtn');
    add.setAttribute('data-id', elem.id);
    const clear = document.createElement('button');
    clear.classList.add('removeFromCartBtn');
    clear.setAttribute('data-id', elem.id);

    h3_name.innerText = elem.name;
    img.src = elem.img;
    price.innerText = elem.price;
    add.innerText = 'В корзину';
    clear.innerText = 'Убрать';

    container.append(card);
    card.append(h3_name, img, price, add, clear);
  }

  const addProduct = document.querySelectorAll('.addToCartBtn');
  addProduct.forEach((el) => {
    el.addEventListener('click', () => {
      const productId = el.getAttribute('data-id');
      basket[productId] = (basket[productId] || 0) + 1;
      localStorage.setItem('basketInstance', JSON.stringify(basket));
    });
  });

  const removeProduct = document.querySelectorAll('.removeFromCartBtn');
  removeProduct.forEach((el) => {
    el.addEventListener('click', () => {
      const productId = el.getAttribute('data-id');
      if (basket[productId] > 0) {
        basket[productId] = (basket[productId] || 0) - 1;
        localStorage.setItem('basketInstance', JSON.stringify(basket));
      }
    });
  });
}
show.addEventListener('click', () => {
  console.log(basket);
});

clearBascket.addEventListener('click', () => {
  localStorage.removeItem('basketInstance');
});
render(products);
// =---------------------------------------------------------------------------------------------

// 5. Нужно реализовать функциональность "Корзины". Корзина у нас будет храниться в виде JS-объекта, и при этом дублироваться в `localStorage` в виде объекта. Использовать ключ `basketInstance`.
//  - создаем объект `basket` - в нем будем держать данные нашей корзины. В качестве ключей используем ID товара (`id`)
//  - в функцию рендеринга списка товаров, надо внести изменения - реализовать обработчики. При клике на "Добавить" - в объекте basket, нужно увеличить на 1 количество этого товара. При клике на "Удалить" - соответственно, уменьшить на 1. Следить чтобы не было отрицательных значений. После этого, изменившийся объект нужно сохранить в `localStorage`.
//  - под контейнер с товарами (`div.productContainer`) добавить кнопку "Показать корзину".
//  - при клике на кнопку "Показать корзину", вывести в консоль объект basket и значение из `localStorage`
//  - добавить кнопку "Очистить корзину" возле кнопки "Показать корзину"
//  - добавить обработчик на кнопку очистки корзины - удалять объект `basketInstance` из `localStorage`
