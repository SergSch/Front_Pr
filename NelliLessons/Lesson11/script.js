const services_container = document.querySelector('.services_container');
const our_services = [
  {
    id: 1,
    title: 'Бухгалтерское обслуживание',
    img: './img/card.jpg',
  },
  {
    id: 2,
    title: 'Бухгалтерское обслуживание',
    img: './img/card.jpg',
  },
  {
    id: 3,
    title: 'Бухгалтерское обслуживание',
    img: './img/card.jpg',
  },
  {
    id: 4,
    title: 'Бухгалтерское обслуживание',
    img: './img/card.jpg',
  },
  {
    id: 5,
    title: 'Бухгалтерское обслуживание',
    img: './img/card.jpg',
  },
  {
    id: 6,
    title: 'Бухгалтерское обслуживание',
    img: './img/card.jpg',
  },
];

function render(arr) {
  arr.forEach((elem) => {
    const card = document.createElement('div');
    const title = document.createElement('h3');

    title.textContent = elem.title;
    title.classList.add('title');

    card.classList.add('card');
    card.style.backgroundImage = `url(${elem.img})`;

    card.append(title);
    services_container.append(card);
  });
}
render(our_services);
