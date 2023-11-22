// ----------------Burger Menu--------------------------
const burger_menu = document.querySelector('.burger_menu');
const nav = document.querySelector('.header__top-row');

burger_menu.addEventListener('click', () => {
  burger_menu.classList.toggle('active');
  nav.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle('no-scroll');
});

// ----------------First Slider-------------------------
const header_slider = document.querySelector('.header_slider');
const header_slider_line = document.querySelector('.header_slider_line');

function renderHeaderSlider() {
  for (let i = 0; i < 4; i++) {
    const header_card = document.createElement('div');
    const header_card_title = document.createElement('h1');
    const header_btn = document.createElement('button');

    header_card_title.classList.add('header_card_title');
    header_card.classList.add('header_card');
    header_btn.classList.add('glow-on-hover');

    header_card_title.textContent = 'Бухгалтерские услуги в вашем городе';
    header_btn.textContent = 'Наша презентация';

    header_card.append(header_card_title, header_btn);
    header_slider_line.append(header_card);
  }
}
renderHeaderSlider();

// ---------

let sliderIndexHeader = 0;
const headerCardWidth = 600;
const headerCardWidthSmall = 270;

const [btnHeadLeft, btnHeadRight] =
  document.querySelectorAll('.triggers > button');

btnHeadRight.addEventListener('click', () => {
  if (window.innerWidth == 320) {
    if (sliderIndexHeader != 3) {
      header_slider_line.style.left = `${
        -1 * ++sliderIndexHeader * headerCardWidthSmall
      }px`;
    } else {
      sliderIndexHeader = 0;
      header_slider_line.style.left = '0px';
    }
  } else {
    if (sliderIndexHeader != 3) {
      header_slider_line.style.left = `${
        -1 * ++sliderIndexHeader * headerCardWidth
      }px`;
    } else {
      sliderIndexHeader = 0;
      header_slider_line.style.left = '0px';
    }
  }
});

btnHeadLeft.addEventListener('click', () => {
  if (window.innerWidth == 320) {
    if (sliderIndexHeader > 0) {
      header_slider_line.style.left = `${
        -1 * --sliderIndexHeader * headerCardWidthSmall
      }px`;
    } else {
      sliderIndexHeader = 4;
      header_slider_line.style.left = `${
        -1 * --sliderIndexHeader * headerCardWidthSmall
      }px`;
    }
  } else {
    if (sliderIndexHeader > 0) {
      header_slider_line.style.left = `${
        -1 * --sliderIndexHeader * headerCardWidth
      }px`;
    } else {
      sliderIndexHeader = 4;
      header_slider_line.style.left = `${
        -1 * --sliderIndexHeader * headerCardWidth
      }px`;
    }
  }
});

const firstSliderRnd = document.querySelector('.sliders_rnd');
for (let i = 0; i < 4; i++) {
  const roundBtn = document.createElement('div');
  roundBtn.className = 'firstRounded';
  firstSliderRnd.append(roundBtn);

  roundBtn.addEventListener('click', () => {
    console.log(2);
    sliderIndexHeader = i;
    header_slider_line.style.left = `${
      -1 * sliderIndexHeader * headerCardWidth
    }px`;
  });
}

// -----------------------Second Slider=-------------------------------

const second_slider = document.querySelector('.second_slider');
const second_slider_line = document.querySelector('.second_slider_line');

const images = [
  './img/micros.png',
  './img/micros.png',
  './img/micros.png',
  './img/micros.png',
];

function renderSecondSlider(arr) {
  for (let elem of arr) {
    let img_cont = document.createElement('div');
    img_cont.classList.add('img_cont');

    let img = document.createElement('div');
    img.classList.add('img');
    img.style.backgroundImage = `url(${elem})`;

    for (let i = 0; i < 4; i++) {
      img_cont.appendChild(img.cloneNode(true));
    }

    second_slider_line.append(img_cont);
  }
}
second_slider.append(second_slider_line);
renderSecondSlider(images);

// -------------------------

let sliderIndex = 0;

let cardWidth = 1100;

const [btnLeft, btnRight] = document.querySelectorAll('.triggersJS > button');

btnRight.addEventListener('click', () => {
  if (sliderIndex !== images.length - 1) {
    second_slider_line.style.left = `${-1 * ++sliderIndex * cardWidth}px`;
  } else {
    sliderIndex = 0;
    second_slider_line.style.left = '0px';
  }
});

btnLeft.addEventListener('click', () => {
  if (sliderIndex != 0) {
    second_slider_line.style.left = `${-1 * --sliderIndex * cardWidth}px`;
  } else {
    sliderIndex = images.length - 1;
    second_slider_line.style.left = `${-1 * sliderIndex * cardWidth}px`;
  }
});

const sliderRndCont = document.querySelector('.sliders_rnd_container');
for (let i = 0; i < images.length; i++) {
  const roundBtn = document.createElement('div');
  roundBtn.className = 'round_btn';
  sliderRndCont.append(roundBtn);

  roundBtn.addEventListener('click', () => {
    sliderIndex = i;
    second_slider_line.style.left = `${-1 * sliderIndex * cardWidth}px`;
  });
}

// -----------------------------------------------------

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
let cardWithOpSmall = 270;

btnRightOp.addEventListener('click', () => {
  if (window.innerWidth == 320) {
    if (sliderIndexOp !== thanks.length - 1) {
      opinion_block.style.left = `${-1 * ++sliderIndexOp * cardWithOpSmall}px`;
    } else {
      sliderIndexOp = 0;
      opinion_block.style.left = '0px';
    }
  } else {
    if (sliderIndexOp !== thanks.length - 1) {
      opinion_block.style.left = `${-1 * ++sliderIndexOp * cardWidthOp}px`;
    } else {
      sliderIndexOp = 0;
      opinion_block.style.left = '0px';
    }
  }
});

btnLeftOp.addEventListener('click', () => {
  if (window.innerWidth == 320) {
    if (sliderIndexOp != 0) {
      opinion_block.style.left = `${-1 * --sliderIndexOp * cardWithOpSmall}px`;
    } else {
      sliderIndexOp = images.length - 1;
      opinion_block.style.left = `${-1 * sliderIndexOp * cardWithOpSmall}px`;
    }
  } else {
    if (sliderIndexOp != 0) {
      opinion_block.style.left = `${-1 * --sliderIndexOp * cardWidthOp}px`;
    } else {
      sliderIndexOp = images.length - 1;
      opinion_block.style.left = `${-1 * sliderIndexOp * cardWidthOp}px`;
    }
  }
});

const sliderRndOp = document.querySelector('.sliders_rnd-op');
for (let i = 0; i < thanks.length; i++) {
  const roundBtn = document.createElement('div');
  roundBtn.className = 'round_btn';
  sliderRndOp.append(roundBtn);

  roundBtn.addEventListener('click', () => {
    if (window.innerWidth == 320) {
      sliderIndexOp = i;
      opinion_block.style.left = `${-1 * sliderIndexOp * cardWithOpSmall}px`;
    } else {
      sliderIndexOp = i;
      opinion_block.style.left = `${-1 * sliderIndexOp * cardWidthOp}px`;
    }
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
