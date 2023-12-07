// 1. Отправить запрос по ссылке https://api.escuelajs.co/api/v1/products и из полученных данных отрисовать карточки товаров (images, title, price) в div.products_container

const products_container = document.querySelector('.products_container');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //   let { title, price, image } = event.target;
  //   const newData = {
  //     title: title.value,
  //     price: price.value,
  //     description: 'Description of the product...',
  //     categoryId: 1,
  //     images: image.value,
  //   };

  const dataForm = new FormData(form);
  const obj = Object.fromEntries(dataForm);
  obj.id = Date.now();
  obj.description = 'Description of the product...';
  console.log(obj);
  getObj(obj);

  event.target.reset();
  getProductsInfo();
});

const getProductsInfo = () => {
  let url = 'https://api.escuelajs.co/api/v1/products';
  fetch(url)
    .then((value) => value.json())
    .then((res) => render(res));
};

getProductsInfo();

function getObj(obj) {
  fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then((res) => res.json())
    .then((json) => render(json));
}

function render(arr) {
  products_container.textContent = '';
  arr.forEach((elem) => {
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const price = document.createElement('p');
    const img = document.createElement('img');

    card.classList.add('card');

    title.textContent = `Title: ${elem.title}`;
    price.textContent = `Price: ${elem.price}`;
    img.src = elem.images[0];
    img.alt = elem.title;

    card.append(img, title, price);
    products_container.append(card);

    card.addEventListener('click', () => {});
  });
}

// 2. Создать форму (3 инпута + кнопка) - title, price, images. При сабмите - формируется объект и выводится в консоль

// Пример объекта

// {
//     title: input value,
//     price: input value,
//     description: "Description of the product...",
//     categoryId: 1,
//     images: [input value]
//   }
