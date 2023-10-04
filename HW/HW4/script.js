const body = document.querySelector('html');
const theme = document.querySelector('.theme');
const change = document.querySelector('.theme > span');

theme.addEventListener('click', () => {
  if (localStorage.getItem('theme') == 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHtml();
});

function addDarkClassToHtml() {
  if (localStorage.getItem('theme') == 'dark') {
    body.classList.add('dark');
    change.textContent = ' sunny';
  } else {
    body.classList.remove('dark');
    change.textContent = 'dark_mode';
  }
}
addDarkClassToHtml();
// ---------------------------------------------------------------

const container = document.querySelector('.container');

const fetchData = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response
      .json()
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  });
};
fetchData('https://dummyjson.com/products').then((data) => {
  console.log(data);
  render(data);
});

const render = (data) => {
  const arr = data.products;
  arr.forEach((elem) => {
    const images = elem.images;
    const card = document.createElement('div');
    const div_img = document.createElement('div');
    div_img.classList.add('image');
    const img = document.createElement('img');

    const title = document.createElement('h3');
    const price = document.createElement('p');

    card.classList.add('card');
    title.classList.add('title');

    img.src = images[0];
    title.innerText = `Title: ${elem.title}`;
    price.innerText = `Price: ${elem.price}$`;

    div_img.append(img);
    card.append(div_img, title, price, rating(elem.rating));
    container.append(card);
  });
};

const rating = (n) => {
  let a = Math.round(n);
  const block_star = document.createElement('div');
  block_star.classList.add('stars');
  let star;
  for (let i = 0; i < 5; i++) {
    star = document.createElement('span');
    star.classList.add('fa', 'fa-star');
    if (i < a) {
      star.classList.add('active');
    }
    block_star.append(star);
  }

  return block_star;
};
