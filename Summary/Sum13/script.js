const sessions_info = [
  {
    id: 1,
    title: 'Standard RitmStyle',
    img_URL: './img/session.jpg',
  },
  {
    id: 2,
    title: 'RitmStyle for couples',
    img_URL: './img/session.jpg',
  },
  {
    id: 3,
    title: 'RitmStyle for pregnant',
    img_URL: './img/session.jpg',
  },
  {
    id: 4,
    title: 'RitmStyle with full immersion underwater',
    img_URL: './img/session.jpg',
  },
  {
    id: 5,
    title: 'RitmStyle + colorful underwater photo shoot',
    img_URL: './img/session.jpg',
  },
];

// 1. Дан массив с данными для карточек
// Для каждого элемента массива создать карточку сессии (див) с параграфом.
// Все созданные карточки добавить в sessions_container

// 2. Сделать из sessions_container грид как в макете
const container = document.querySelector('.sessions_container');

function render(arr) {
  arr.forEach((elem) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card${elem.id}`);
    card.style.backgroundImage = `url(${elem.img_URL})`;
    const title = document.createElement('p');
    title.textContent = elem.title;
    card.append(title);
    container.append(card);
  });
}
render(sessions_info);

// 3. Дан массив с данными для карточек
// Для каждого элемента массива создать карточку новости (див) с параграфом и спаном
// Все созданные карточки добавить в news_container

// 4. Сделать из news_container грид как в макете

const news_info = [
  {
    id: 1,
    title: 'Text 1',
    date: '13.02.2022',
    image_URL: './img/news.jpg',
  },
  {
    id: 2,
    title: 'Text 2',
    date: '13.02.2022',
    image_URL: './img/news.jpg',
  },
  {
    id: 3,
    title: 'Text 3',
    date: '13.02.2022',
    image_URL: './img/news.jpg',
  },
  {
    id: 4,
    title: 'Text 4',
    date: '13.02.2022',
    image_URL: './img/news.jpg',
  },
  {
    id: 5,
    title: 'Text 5',
    date: '13.02.2022',
    image_URL: './img/news.jpg',
  },
  {
    id: 6,
    title: 'Text 6',
    date: '13.02.2022',
    image_URL: './img/news.jpg',
  },
];
const news_container = document.querySelector('.news_container');
function renderNews(arr) {
  arr.forEach((elem) => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('newsCard');
    newsCard.style.backgroundImage = `url(${elem.image_URL})`;
    const date = document.createElement('span');
    date.textContent = elem.date;
    const newsTitle = document.createElement('p');
    newsTitle.textContent = elem.title;
    newsCard.append(date, newsTitle);
    news_container.append(newsCard);
  });
}
renderNews(news_info);
