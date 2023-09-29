// 9. Дорабатываем всю страничку. Нам нужно, чтобы при запуске скрипта мы:
// - показывали иконку загрузки (п.6)
// - запускали запрос категорий (функция п.8)
// - запускали запрос ВСЕХ товаров (функция из п.4, БЕЗ аргумента)
// - по завершении ОБОИХ запросов, мы скрываем иконку загрузки и показываем селект и блок с товарами. В этом нам поможет `Promise.all`

const select = document.querySelector('#productSelect');
const loader = document.querySelector('.loader');
const productsContainer = document.querySelector('#productsContainer');
loader.style.display = 'none';

select.addEventListener('change', (event) => {
  loader.style.display = 'block';
  productsContainer.innerHTML = '';
  requestProducts(event.target.value);
});

const renderSelect = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((elem) => {
          const option = document.createElement('option');
          option.value = elem;
          option.textContent = elem[0].toUpperCase() + elem.slice(1);
          select.append(option);
        });
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
renderSelect()
  .then((categories) => {
    console.log('Categories: ' + categories);
  })
  .catch((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log('Promise has finished!');
  });

// -------------------

const requestProducts = (category) => {
  let link = 'https://fakestoreapi.com/products/';
  if (category) {
    link += `category/${category}`;
  }
  fetch(link)
    .then((response) => response.json())
    .then((data) => renderProducts(data));
};

function renderProducts(arr) {
  arr.forEach((elem) => {
    const productCard = document.createElement('div');
    const title = document.createElement('h3');
    const price = document.createElement('p');
    const description = document.createElement('p');

    productCard.classList.add('productCard');

    title.innerText = `Title: ${elem.title}`;
    price.innerText = `Price: ${elem.price}`;
    description.innerText = elem.description;

    productCard.append(title, price, description);
    productsContainer.append(productCard);
  });
  loader.style.display = 'none';
}

// -----------
