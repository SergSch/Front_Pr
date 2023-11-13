// 1. Проектируем класс Slider. Он должен содержать несколько свойств:
//  - текущий номер слайда (который мы показываем)
//  - общее количество слайдов
//  - массив слайдов
// Возможно, позже добавим еще. И стоит сделать свойства приватными.

// 2. Теперь делаем конструктор. Он будем принимать только массив с данными о слайдах (это будет массив наших товаров). В конструкторе, стоит инициализировать все наши приватные свойства - количество слайдов, текущий слайд и т.д.

// 3. Делаем метод отрисовки одного слайда (`renderSlide`). Он будет принимать данные слайда, и создавать (НО не добавлять на экран), DOM-элемент с этим слайдом. Наш слайд - это контейнер `div.sliderCard`, который содержит картинку (`img`). Данные для ресурса картинки (атрибут src), берем из данных слайда, свойство `img`.

// 4. Теперь делаем функцию отрисовки всего слайдера в какой-то DOM-узел. Пишем метод `render`, он будет принимать в аргументе ссылку на DOM-элемент, в который мы отрисуем наш слайдер. Нам нужно пройтись по всем слайдам, для каждого создать элемент (вызвать функцию `renderSlide`), и добавить результат в контейнер.

// 5. Делаем функции смены слайда, `slideLeft`, `slideRight`. Здесь нам нужно управлять позиционированием контейнера слайдов, в частности - его свойство `left`.

// 6. Теперь добавим кнопки. Напишем приватный метод `renderSliderControls`, который добавит в наш слайдер кнопки управления слайдами. На кнопки добавляем обработчики, чтобы при нажатии на соответствующую кнопку вызывался бы соответствующий метод. Кнопки рисуем в контейнере, контейнер - `controlButtonContainer`, а самим кнопкам даем класс `controlButton`.

// 7. Задача "со звезочкой". Сейчас в стилях нашего слайдера жестко "забиты" ширина и высота карточки. Перестроить код таким образом, чтобы слайдер "подстраивался" под ширину и высоту своего контейнера. То есть, чтобы высота и ширина задавались у того элемента, в который мы рендерим слайдер.

// const img_width = 300;

class Slider {
  #currentSlide = 0;
  #totalSlides;
  #slides;
  #containerEl;

  constructor(slides, img_width) {
    this.#slides = slides;
    this.#currentSlide = 0;
    this.#totalSlides = slides.length;
    this.img_width = img_width;
  }

  #renderSlide(data) {
    const sliderCard = document.createElement('div');
    sliderCard.classList.add('sliderCard');
    const img = document.createElement('img');

    img.src = data.img;
    sliderCard.append(img);
    return sliderCard;
  }

  render(container) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('sliderContainer');

    innerContainer.style.width = `${this.img_width}px`;

    this.#slides.forEach((slide) => {
      innerContainer.append(this.#renderSlide(slide));
    });
    this.#containerEl = innerContainer;
    container.append(innerContainer);
    this.#renderControls(container);
  }

  #renderControls(container) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('controlButtonContainer');
    const btnLeft = document.createElement('button');
    const btnRight = document.createElement('button');
    btnLeft.classList.add('controlButton');
    btnRight.classList.add('controlButton');
    btnLeft.textContent = '<';
    btnRight.textContent = '>';
    buttonsContainer.append(btnLeft, btnRight);
    container.append(buttonsContainer);

    btnLeft.addEventListener('click', () => {
      this.slideLeft();
    });
    btnRight.addEventListener('click', () => {
      this.slideRight();
    });
  }

  slideLeft() {
    if (this.#currentSlide > 0) {
      this.#currentSlide--;
    } else {
      this.#currentSlide = this.#totalSlides - 1;
    }
    this.#containerEl.style.left = `${
      -1 * this.#currentSlide * this.img_width
    }px`;
  }
  slideRight() {
    if (this.#currentSlide !== this.#totalSlides - 1) {
      this.#currentSlide++;
    } else {
      this.#currentSlide = 0;
    }
    this.#containerEl.style.left = `${
      -1 * this.#currentSlide * this.img_width
    }px`;
  }
}

const ball = {
  id: 1,
  name: 'Ball',
  category: 'Sport',
  img: './assets/ball.jpeg',
  price: 100,
};
const gloves = {
  id: 2,
  name: 'Gloves',
  category: 'Sport',
  img: './assets/gloves.jpg',
  price: 140,
};
const shoes = {
  id: 3,
  name: 'Sport shoes',
  category: 'Sport',
  discount: true,
  img: './assets/shoes.png',
  price: 320,
};
const hammer = {
  id: 4,
  name: 'Hammer',
  category: 'Tools',
  img: './assets/hammer.jpeg',
  price: 40,
};
const saw = {
  id: 5,
  name: 'Saw',
  category: 'Tools',
  discount: true,
  img: './assets/saw.jpeg',
  price: 75,
};
const shark = {
  id: 6,
  name: 'Shark toy',
  category: 'Other',
  img: './assets/shark.jpeg',
  price: 45,
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

const sliderInstance = new Slider(products, 300);
const container = document.querySelector('.centeredContainer');
sliderInstance.render(container);
