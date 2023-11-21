// ----------Burger Menu -----------------------

let burger_menu = document.querySelector('.burger_menu');
const navi = document.querySelector('.mobile_nav');

burger_menu.addEventListener('click', () => {
  burgerMenuHandler();
});

function burgerMenuHandler() {
  burger_menu.classList.toggle('active');
  navi.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}
// ----------------------First Slider-------------------
const frame = document.querySelector('.frame');
const first_cont = document.createElement('div');

let slidIn = 0;

first_cont.classList.add('first_cont');

for (let i = 0; i < 4; i++) {
  const first_card = document.createElement('div');
  const firstTitle = document.createElement('h1');

  first_card.classList.add('first_card');
  firstTitle.classList.add('title');

  firstTitle.textContent = 'Бухгалтерские услуги в вашем городе';

  first_card.append(firstTitle);
  first_cont.append(first_card);
}
frame.append(first_cont);

// ---------Buttons

const [btnL, btnR] = document.querySelectorAll('.triggers > button');

btnR.addEventListener('click', () => {
  if (slidIn !== 3) {
    first_cont.style.left = `${-1 * ++slidIn * 600}px`;
  } else {
    slidIn = 0;
    first_cont.style.left = '0px';
  }
});

btnL.addEventListener('click', () => {
  if (slidIn != 0) {
    first_cont.style.left = `${-1 * --slidIn * 600}px`;
  } else {
    slidIn = 3;
    first_cont.style.left = `${-1 * slidIn * 600}px`;
  }
});

const firstSliderRnd = document.querySelector('.sliders_rnd');
for (let i = 0; i < 4; i++) {
  const roundBtn = document.createElement('div');
  roundBtn.className = 'firstRounded';
  firstSliderRnd.append(roundBtn);

  roundBtn.addEventListener('click', () => {
    slidIn = i;
    first_cont.style.left = `${-1 * slidIn * 600}px`;
  });
}

// -------------------------------------------------------

const client_frame = document.querySelector('.client_frame');
let card_cont = document.createElement('div');
card_cont.classList.add('card_cont');

let sliderIndex = 0;

let cardWidth = 1100;

const images = [
  './img/micros.png',
  './img/micros.png',
  './img/micros.png',
  './img/micros.png',
];

function render(arr) {
  for (let elem of arr) {
    let img_cont = document.createElement('div');
    img_cont.classList.add('img_cont');

    let img = document.createElement('div');
    img.classList.add('img');
    img.style.backgroundImage = `url(${elem})`;

    for (let i = 0; i < 4; i++) {
      img_cont.appendChild(img.cloneNode(true));
    }

    card_cont.append(img_cont);
  }
}
client_frame.append(card_cont);
render(images);

const [btnLeft, btnRight] = document.querySelectorAll('.triggersJS > button');

btnRight.addEventListener('click', () => {
  if (sliderIndex !== images.length - 1) {
    card_cont.style.left = `${-1 * ++sliderIndex * cardWidth}px`;
  } else {
    sliderIndex = 0;
    card_cont.style.left = '0px';
  }
});

btnLeft.addEventListener('click', () => {
  if (sliderIndex != 0) {
    card_cont.style.left = `${-1 * --sliderIndex * cardWidth}px`;
  } else {
    sliderIndex = images.length - 1;
    card_cont.style.left = `${-1 * sliderIndex * cardWidth}px`;
  }
});

const sliderRndCont = document.querySelector('.sliders_rnd_container');
for (let i = 0; i < images.length; i++) {
  const roundBtn = document.createElement('div');
  roundBtn.className = 'round_btn';
  sliderRndCont.append(roundBtn);

  roundBtn.addEventListener('click', () => {
    sliderIndex = i;
    card_cont.style.left = `${-1 * sliderIndex * cardWidth}px`;
  });
}

// ---------------------------------------------

const thanks = [
  {
    id: 1,
    descr:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    photo: './img/face.jpg',
    title: 'Екатерина Иванова',
    occupation: 'Директор ООО “Раз-два”',
  },
  {
    id: 1,
    descr:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    photo: './img/face.jpg',
    title: 'Екатерина Иванова',
    occupation: 'Директор ООО “Раз-два”',
  },
  {
    id: 1,
    descr:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    photo: './img/face.jpg',
    title: 'Екатерина Иванова',
    occupation: 'Директор ООО “Раз-два”',
  },
  {
    id: 1,
    descr:
      'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    photo: './img/face.jpg',
    title: 'Екатерина Иванова',
    occupation: 'Директор ООО “Раз-два”',
  },
];
const opinion_block = document.querySelector('.opinion_block');

function renderThanks(arr) {
  for (let elem of arr) {
    const opinion_card = document.createElement('div');
    const descr = document.createElement('div');
    const photo = document.createElement('img');
    const title_opinion = document.createElement('h3');
    const occupation = document.createElement('p');
    const opinion_foot = document.createElement('div');
    const opinion_foot_r = document.createElement('div');

    descr.textContent = elem.descr;
    photo.src = elem.photo;
    title_opinion.textContent = elem.title;
    occupation.textContent = elem.occupation;

    opinion_card.classList.add('opinion_card');
    opinion_foot.classList.add('opinion_foot');
    descr.classList.add('descr');
    photo.classList.add('photo');
    title_opinion.classList.add('title_opinion');
    occupation.classList.add('occupation');

    opinion_foot_r.append(title_opinion, occupation);
    opinion_foot.append(photo, opinion_foot_r);
    opinion_card.append(descr, opinion_foot);
    opinion_block.append(opinion_card);
  }
}

renderThanks(thanks);

const [btnLeftOp, btnRightOp] = document.querySelectorAll(
  '.triggers_opinion > button'
);

let sliderIndexOp = 0;

let cardWidthOp = 1100;

btnRightOp.addEventListener('click', () => {
  if (sliderIndexOp !== thanks.length - 1) {
    opinion_block.style.left = `${-1 * ++sliderIndexOp * cardWidthOp}px`;
  } else {
    sliderIndexOp = 0;
    opinion_block.style.left = '0px';
  }
});

btnLeftOp.addEventListener('click', () => {
  if (sliderIndexOp != 0) {
    opinion_block.style.left = `${-1 * --sliderIndexOp * cardWidthOp}px`;
  } else {
    sliderIndexOp = images.length - 1;
    opinion_block.style.left = `${-1 * sliderIndexOp * cardWidthOp}px`;
  }
});

const sliderRndOp = document.querySelector('.sliders_rnd-op');
for (let i = 0; i < thanks.length; i++) {
  const roundBtn = document.createElement('div');
  roundBtn.className = 'round_btn';
  sliderRndOp.append(roundBtn);

  roundBtn.addEventListener('click', () => {
    sliderIndexOp = i;
    opinion_block.style.left = `${-1 * sliderIndexOp * cardWidthOp}px`;
  });
}

// ------------------footer--------------------
const form = document.querySelector('.footerForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let objForm = Object.fromEntries(formData);
  console.log(objForm);
});
