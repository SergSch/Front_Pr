// 9. Дорабатываем всю страничку. Нам нужно, чтобы при запуске скрипта мы:
// - показывали иконку загрузки (п.6)
// - запускали запрос категорий (функция п.8)
// - запускали запрос ВСЕХ товаров (функция из п.4, БЕЗ аргумента)
// - по завершении ОБОИХ запросов, мы скрываем иконку загрузки и показываем селект и блок с товарами. В этом нам поможет `Promise.all`

const productSelect = document.querySelector('#productSelect');

// ----------------------

const loader = document.querySelector('.loader');
loader.style.display = 'none';

// ---------------------------------

const renderSelect = () => {
  return new Promise((resolve, reject) => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((elem) => {
          const optionEl = document.createElement('option');
          optionEl.value = elem;
          optionEl.innerText = elem[0].toUpperCase() + elem.slice(1);
          productSelect.append(optionEl);
        });
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

renderSelect()
  .finally(() => console.log('Promise has finished!'))
  .then((categories) => {
    console.log('Categories:', categories);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

const productsContainer = document.querySelector('#productsContainer');

function getProducts(category) {
  let url = `https://fakestoreapi.com/products/`;
  if (category) {
    url += `/category/${category}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderProducts(data));
}

function renderProducts(arr) {
  arr.forEach((elem) => {
    const title = document.createElement('h3');
    title.innerText = elem.title;
    const price = document.createElement('p');
    price.innerText = elem.price;
    const description = document.createElement('p');
    description.textContent = elem.description;
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
    productCard.append(title, price, description);
    productsContainer.append(productCard);
  });
  loader.style.display = 'none';
}

productSelect.addEventListener('change', (event) => {
  loader.style.display = 'block';
  productsContainer.innerHTML = '';
  getProducts(event.target.value);
});
