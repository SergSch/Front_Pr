const productsContainerEl = document.querySelector('.products-container');
const modalArea = document.querySelector('.modal-area');
const modal = document.querySelector('.modal');

// 1. И вновь работаем с интернет-магазином. Наша первая задача - получить с бэка (`https://fakestoreapi.com/products`) список товаров, записать его в массив `productsDataSource`, и вывести его в консоль.

let productsDataSource = [];
showLoader();
fetch('https://fakestoreapi.com/products')
  .then((resp) => resp.json())
  .then((products) => {
    productsDataSource = products;
    renderProducts(productsDataSource);
  })
  .finally(() => hideLoader());

// async function getSupplies() {
//   const url = 'https://fakestoreapi.com/products';
//   let res = await fetch(url);
//   let productsDataSource = await res.json();
//   console.log(productsDataSource);
//   renderProducts(productsDataSource);
// }

// 2. Пишем функцию `renderProduct`, которая будет рендерить наш товар. Ее задача - отрисовать карточку товара. В качестве аргумента функция ожидает объект product (товар, список которых мы получили в п.1). Карточка:
//  - это div с классом `product-card`
//  - содержит заголовок (`h3`) с классом `product-title`, и значением свойства title объекта product
//  - содержит параграф (`p`) с описанием (description). Класс - `product-description`
//  - содержит параграф (`p`) с ценой товара, класс - `product-price`.

function renderProduct(arr) {
  const productCard = document.createElement('div');
  const title = document.createElement('h3');
  const descr = document.createElement('p');
  const price = document.createElement('p');

  productCard.classList.add('product-card');
  title.classList.add('product-title');
  descr.classList.add('product-description');
  price.classList.add('product-price');

  title.textContent = arr.title;
  descr.textContent = arr.description;
  price.textContent = arr.price;

  productCard.append(title, descr, price);
  return productCard;
}

// 3. Рендерим список товаров. Пишем функцию `renderProducts`, которая на вход будет принимать массив товаров. Она должна в контейнер товаров (элемент с классом `products-container`) отрендерить список наших товаров. ВАЖНО! Нужно перед отрисовкой переданного списка товаров, очистить контейнер от старых элементов. Как это сделать:
// ```
// productsContainerEl.innerHTML = '';
// ```

function renderProducts(arr) {
  productsContainerEl.innerHTML = '';
  arr.forEach((elem) => {
    productsContainerEl.append(renderProduct(elem));
  });
}

// getSupplies();

// 4. Добавляем возможность сортировки товаров. Нам нужно:
//  - добавить перед контейнером товаров выпадающее меню, в котором выберем по чему сортируем. Добавляем в HTML-разметке, не в JS! Используем элемент `select`, класс - `select`.
//  - Добавить в это выпадающее меню значения:
//     - "Нет" - не сортируем (none). Это значение д.б выбрано по умолчанию, и оно должно быть disabled.
//     - "Цена (по убыванию)" (price_desc)
//     - "Цена (по возрастанию)" (price_asc)
//     - "Название (по возрастанию)" (title_asc)
//     - "Название (по убыванию)" (title_desc)

// 5. Готовимся к применению сортировок. Нам нужно написать функцию `sortProducts`, которая будет принимать аргумент `sortRule` (правило сортировки), и сортировать наш массив `productsDataSource`, в соответствии с переданным аргументом.

function sortProducts(sortRule, products) {
  switch (sortRule) {
    case 'price_asc': {
      products.sort((a, b) => a.price - b.price);
      break;
    }
    case 'price_desc': {
      products.sort((a, b) => b.price - a.price);
      break;
    }
    case 'title_asc': {
      products.sort((a, b) => a.title.localeCompare(b.title));
      break;
    }
    case 'title_desc': {
      products.sort((a, b) => b.title.localeCompare(a.title));
      break;
    }
    default:
      break;
  }
}

// 6. Добавляем обработчик на событие `change` нашего выпадающего меню (`select`). При этом событии, нам нужно отсортировать наш массив товаров, и отрендерить его.
const select = document.querySelector('.select');
select.addEventListener('change', (event) => {
  let option = event.target.value;
  sortProducts(option, productsDataSource);
  renderProducts(productsDataSource);
});

// 7. Добавляем под выпадающим меню сортировки товаров кнопку "Поиск". Дать ей класс `button`, id="searchButton". Также добавляем инпут с классом `input`, id="searchInput". Это все также делаем в разметке!

// 8. Нужно обеспечить поиск товара. На кнопку c id="searchButton" добавляем обработчик. При клике:
//  - взять значение из текстового поля searchInput.
//  - если оно пустое - рендерим массив товаров `productsDataSource` (рекомендую проверить как falsy - т.е. с использованием оператора "!")
//  - если непустое - фильтруем массив товаров по названию. Ищем те товары, у которых свойство title содержит значение из поля поиска. Рекомендуется все приводить к одному регистру.
//  - рендерим результат (поиск нам должен вернуть новый массив).

const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
searchButton.addEventListener('click', () => {
  if (!searchInput.value) {
    renderProducts(productsDataSource);
  } else {
    const inputValue = searchInput.value.toLowerCase();
    let filteredArr = productsDataSource.filter((elem) =>
      elem.title.toLowerCase().includes(inputValue)
    );
    renderProducts(filteredArr);
  }
});

// 9. Добавляем модальное окно иконки загрузки.
//  - в HTML-разметке, делаем контейнер. Он должен "закрыть" весь экран серым полупрозрачным фоном, и в середине экрана показать сообщение "Подождите, идет загрузка".
//  - добавляем ему стили в CSS-файле. По умолчанию он невидимый.
//  - пишем функции `showLoader`, `hideLoader`, которые будут показывать/скрывать иконку загрузки
//  - вызываем эти функции в местах до и после сетевого запроса из п.1.

function showLoader() {
  modalArea.classList.remove('hide');
}
function hideLoader() {
  modalArea.classList.add('hide');
}
