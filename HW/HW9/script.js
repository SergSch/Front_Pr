const slidersRnd = document.querySelectorAll('.sliders_rnd > span'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next');
let slidIndex = 1;

function showSlides(n) {
  if (n > slidersRnd.length) {
    slidIndex = 1;
  }
  if (n < 1) {
    slidIndex = slidersRnd.length;
  }
  slidersRnd.forEach((elem) => (elem.style.background = ''));
  slidersRnd[slidIndex - 1].style.background = 'orange';
}

function plusSlide(n) {
  showSlides((slidIndex += n));
}
prev.addEventListener('click', () => {
  plusSlide(-1);
});
next.addEventListener('click', () => {
  plusSlide(+1);
});

// -------------------------------------------------------
const client_slider = document.querySelector('.client_slider');
const clients_container = document.querySelector('.clients_container');
let sliderIndex = 0;

let cardWidth = 400;

const images = [
  './img/micros.png',
  './img/micros.png',
  './img/micros.png',
  './img/micros.png',
];

function render(arr) {
  for (let elem of arr) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${elem})`;
    card.style.backgroundPosition = 'center';
    card.style.backgroundRepeat = 'no-repeat';
    card.style.backgroundSize = 'cover';
    clients_container.append(card);
  }
}
render(images);

const [btnLeft, btnRight] = document.querySelectorAll('.triggersJS > button');

btnRight.addEventListener('click', () => {
  if (sliderIndex !== images.length - 1) {
    clients_container.style.left = `${-1 * ++sliderIndex * cardWidth}px`;
  } else {
    sliderIndex = 0;
    clients_container.style.left = '0px';
  }
});

btnLeft.addEventListener('click', () => {
  if (sliderIndex != 0) {
    clients_container.style.left = `${-1 * --sliderIndex * cardWidth}px`;
  } else {
    sliderIndex = images.length - 1;
    clients_container.style.left = `${-1 * sliderIndex * cardWidth}px`;
  }
});

const sliderRndCont = document.querySelector('.sliders_rnd_container');
for (let i = 0; i < images.length; i++) {
  const roundBtn = document.createElement('div');
  roundBtn.className = 'round_btn';
  sliderRndCont.append(roundBtn);

  roundBtn.addEventListener('click', () => {
    sliderIndex = i;
    clients_container.style.left = `${-1 * sliderIndex * cardWidth}px`;
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
