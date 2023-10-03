// Здесь пока ничего нет.

const categoriesSelect = document.querySelector('#categoriesSelect');
const loader = document.querySelector('.loader');
loader.style.display = 'none';
const productsContainer = document.querySelector('#productsContainer');

/**
 * Функция запроса списка товаров
 * @param {*} category Категория
 * @returns ПРОМИС, который будет зарезолвлен НТТР-ответом
 */

const requestProducts = (category) => {
  const productsUrl =
    `https://fakestoreapi.com/products/` +
    (!!category ? `category/${category}` : '');
  return fetch(productsUrl);
};

/**
 * Функция запроса списка категорий
 * @returns ПРОМИС, который будет зарезолвлен НТТР-ответов
 */
const requestCategories = () => {
  return fetch('https://fakestoreapi.com/products/categories');
};

/**
 * Функция, которая рендерит категории
 * @param {*} categoriesArray Массив с категориями
 */
const renderCategories = (categoriesArray) => {
  categoriesArray.forEach((elem) => {
    const optionEl = document.createElement('option');
    optionEl.value = elem;
    optionEl.textContent = elem.charAt(0).toUpperCase() + elem.slice(1);
    categoriesSelect.append(optionEl);
  });
};

/**
 * Функция которая рендеритт карточки товаров
 * @param {*} productsArray Массив с данными товаров
 */
const renderProducts = (productsArray) => {
  // Очищаем контейнер товаров
  productsContainer.innerHTML = '';
  // Отрисовываем карточки товаров
  productsArray.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
    const title = document.createElement('h3');
    title.textContent = product.title;
    const price = document.createElement('p');
    price.textContent = product.price;
    const description = document.createElement('p');
    description.textContent = product.description;
    const dropProductBtn = document.createElement('a');
    dropProductBtn.classList.add('dropProductBtn');
    dropProductBtn.innerText = 'Drop';

    productCard.dataset.id = product.id;

    dropProductBtn.addEventListener('click', (event) => {
      deleteProduct(product.id);
    });

    productCard.append(title, price, description, dropProductBtn);
    productsContainer.append(productCard);
  });
};

// 6. Пишем функцию удаления товара. Она должна обращаться к адресу `https://fakestoreapi.com/products/PRODUCT_ID`, методом `DELETE`. В адресе нужно вместо PRODUCT_ID подставить ИД того товара, который хотим удалить. Эту функцию нужно вызывать при клике на кнопки "Drop" на карточках товаров.

const deleteProduct = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.ok) {
        const deletePr = document.querySelector(`[data-id="${id}"]`);
        if (deletePr) {
          deletePr.remove();
        }
        console.log('Product delete!');
      } else {
        throw new Error('Failed');
      }
    })
    .catch((error) => {
      console.log('Error delete:', error);
    });
};

// 3. Теперь, нужно добавить нашу "иконку загрузки". Нужно, чтобы при запуске `init`, мы показывали иконку загрузки. Убрать ее мы должны тогда, когда ОБА наших промиса будут выполнены (в этом нам поможет `Promise.all`). То есть, нам нужно переписать логику функции `init` - вызвать наши `requestProducts`, `requestCategories` в `Promise.all`.

// Блок, который отработает при запуске скрипта.
const init = () => {
  loader.style.display = 'block';
  const categoriesPromise = requestCategories();
  const productsPromise = requestProducts();

  Promise.all([categoriesPromise, productsPromise])
    .then((res) => {
      return Promise.all([res[0].json(), res[1].json()]);
    })
    .then((dataRes) => {
      renderCategories(dataRes[0]);
      renderProducts(dataRes[1]);
      loader.style.display = 'none';
    });

  categoriesSelect.addEventListener('change', (event) => {
    loader.style.display = 'block';
    requestProducts(event.target.value)
      .then((resp) => resp.json())
      .then((products) => {
        console.log(products);
        renderProducts(products);
        loader.style.display = 'none';
      });
  });
};

init();

// 2. Готовим почву для `Promise.all`. У нас есть функция `task2Demo`. В ней есть 2 промиса, каждый из которых возвращает "часть от целого". Нужно дождаться выполнения обеих промисов, и вывести в консоль сумму их результатов. В этом нам поможет `Promise.all`.

// Для задачи №2
const task2Demo = () => {
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('First promise finished!');
      resolve(5);
    }, 2000);
  });
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Second promise finished!');
      resolve(7);
    }, 3000);
  });
  // Нужно получить сумму того, чем зарезолвлены наши промисы
  Promise.all([firstPromise, secondPromise]).then((res) =>
    console.log(res[0] + res[1])
  );
};

// task2Demo();

// 4. Работаем с нештатной ситуацией. У нас есть функция `task4Demo`, в ней также 2 промиса, но второй промис может быть завершен с ошибкой. Нужно построить такую логику, чтобы:
//  - при успешном завершении обоих промисов, в консоли выводилась сумма результатов (как в предыдущей задаче)
//  - в случае ошибки, в консоль выводилось "something went wrong!", и причина ошибки (то, что передается в `reject`)
//  - вне зависимости от результата, чтобы в консоль выводилось "All promises are finished now!".

// Для задачи №4
const task4Demo = () => {
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('First promise finished!');
      resolve(5);
    }, 2000);
  });
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        console.log('Second promise rejected!');
        reject(7);
      } else {
        console.log('Second promise finished!');
        resolve(7);
      }
    }, 3000);
  });
  Promise.all([firstPromise, secondPromise])
    .then((res) => console.log(res[0] + res[1]))
    .catch((error) => console.log(error))
    .finally(() => console.log('All promises are finished now!'));
};
// task4Demo();

// Работа с модальным окном формы добавления нового товара
const addProductBtn = document.querySelector('#addProductBtn');
const productModal = document.querySelector('#modalContainer');

addProductBtn.addEventListener('click', (event) => {
  productModal.style.display = 'block';
});

productModal.addEventListener('click', (event) => {
  if (event.target === productModal) {
    productModal.style.display = 'none';
  }
});

// ----------------------------------------

const addProduct = (title, price, descr, category) => {
  const obj = {
    title: title,
    price: price,
    description: descr,
    category: category,
    image: 'https://i.pravatar.cc',
  };
  fetch(`https://fakestoreapi.com/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
// addProduct('title', 15, 'description', 'category');

// -----------------------------------------
// 7. Пишем свою функцию `sendJsonRequest` для отправки сетевого запроса (GET). Она должна принять в аргументе URL, к которому хотим обратиться, и вернуть ПРОМИС, который:
//  - в случае успеха, будет зарезолвлен преобразованными в JSON данными с бэка
//  - в случае неуспеха, будет вызван `reject`, с текстом ошибки.

const sendJsonRequest = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject(response);
        }
      })
      .then((respData) => resolve(respData))
      .catch((error) => reject(error));
  });
};
sendJsonRequest(`https://fakestoreapi.com/products`)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('Promises finished'));
