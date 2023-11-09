const frame = document.querySelector('.frame');

let slider_index = 0;

let card_width = 400;

const cards_container = document.createElement('div');
cards_container.className = 'cards_container';

const images = [
  'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
  'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
  'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
  'https://arthive.net/res/media/img/oy1000/work/577/610144@2x.jpg',
];

for (let elem of images) {
  let card_item = document.createElement('div');
  card_item.classList.add('card_item');
  card_item.style.backgroundImage = `url(${elem})`;
  cards_container.append(card_item);
}

frame.append(cards_container);

// ------------------------BUTTONS---------------

const [btn_left, btn_right] = document.querySelectorAll('.triggers > button');

btn_right.addEventListener('click', () => {
  if (slider_index !== images.length - 1) {
    cards_container.style.left = `${-1 * ++slider_index * card_width}px`;
  } else {
    slider_index = 0;
    cards_container.style.left = `0px`;
  }
});

btn_left.addEventListener('click', () => {
  if (slider_index !== 0) {
    cards_container.style.left = `${-1 * --slider_index * card_width}px`;
  } else {
    slider_index = images.length - 1;
    cards_container.style.left = `${-1 * slider_index * card_width}px`;
  }
});

// ---------------------Circles---------------

const slider_btns = document.querySelector('.slider_btns');
for (let i = 0; i < images.length; i++) {
  const round_btn = document.createElement('div');
  round_btn.classList.add('round_btn');

  slider_btns.append(round_btn);

  round_btn.addEventListener('click', () => {
    slider_index = i;
    cards_container.style.left = `${-1 * slider_index * card_width}px`;
  });
}
