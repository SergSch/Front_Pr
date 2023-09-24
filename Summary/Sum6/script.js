// 1. Создать div.cards_container (контейнер для карточек). Поместить его в div#root.
// 2. Пройтись по массиву products и для каждого объекта в массиве создать карточку товара (div) с картинкой, названием, старой ценой и новой ценой. Все созданные карточки поместить в div.cards_container
// 3. Стилизовать карточки. Если новая цена товара > 200, то покрасить цену в темно-фиолетовый, а если меньше - в темно-зеленый

const products = [
  {
    id: 1,
    title: 'Apple',
    price: 100,
    discount: 0.2,
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    title: 'Orange',
    price: 300,
    discount: 0.05,
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    title: 'Banana',
    price: 75,
    discount: 0.07,
    image: 'https://picsum.photos/200',
  },
  {
    id: 4,
    title: 'Kiwi',
    price: 400,
    discount: 0.3,
    image: 'https://picsum.photos/200',
  },
  {
    id: 5,
    title: 'Pineapple',
    price: 245,
    discount: 0.25,
    image: 'https://picsum.photos/200',
  },
  {
    id: 6,
    title: 'Lemon',
    price: 340,
    discount: 0.1,
    image: 'https://picsum.photos/200',
  },
  {
    id: 7,
    title: 'Lime',
    price: 500,
    discount: 0.15,
    image: 'https://picsum.photos/200',
  },
];

const cards_container = document.createElement('div');
cards_container.classList.add('cards_container');
const div_root = document.querySelector('#root');

const form = document.createElement('form');
const titleInput = document.createElement('input');
const priceInput = document.createElement('input');
const discountInput = document.createElement('input');
const btn = document.createElement('button');
btn.innerText = 'Add Product';

titleInput.type = 'text';
titleInput.placeholder = 'Title';
titleInput.name = 'title';

priceInput.type = 'number';
priceInput.placeholder = 'Price';
priceInput.name = 'price';

discountInput.type = 'text';
discountInput.placeholder = 'Discount';
discountInput.name = 'discount';

form.append(titleInput, priceInput, discountInput, btn);

div_root.append(cards_container, form);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { title, price, discount } = event.target;
  let obj = {
    id: Date.now(),
    title: title.value,
    price: price.value,
    discount: discount.value,
    image: 'https://picsum.photos/200',
  };
  products.push(obj);
  renderCards(products);
});

const renderCards = (arr) => {
  cards_container.innerText = '';
  arr.forEach((el) => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('h3');
    const oldPriceElem = document.createElement('p');
    const newPriceElem = document.createElement('p');
    const imageElem = document.createElement('img');

    const newPriceValue = el.price - el.price * el.discount;

    titleElem.innerText = 'Title: ' + el.title;
    oldPriceElem.innerText = el.price + '$';
    newPriceElem.innerText = newPriceValue + '$';

    imageElem.src = el.image;
    imageElem.alt = el.title;

    newPriceElem.style.color =
      newPriceValue > 200 ? 'darkmagenta' : 'darkgreen';

    cardElem.classList.add('card_elem');

    cardElem.append(imageElem, titleElem, oldPriceElem, newPriceElem);
    cards_container.append(cardElem);
  });
};
renderCards(products);

// 4. Создать форму (3 инпута + кнопка), которая собирает данные для свойств title, price, discount. При сабмите ('submit') формы из собранных данных формируется объект и добавляется в массив products

// Пример объекта

// {
//   id: unique,
//   title: из инпута,
//   price: из инпута
//   discount: из инпута,
//   image: 'https://picsum.photos/200'
// }
