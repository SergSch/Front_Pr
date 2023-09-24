// 1. Освежаем в памяти методы Event. На странице есть инпут с id=`nameInput`. Предполагается, что мы будем вводить в него имя пользователя. Нам нужно сделать так, чтобы имя пользователя было не больше 12 символов. То есть, нужно добавить обработчик на событие `change`, и при каждом этом событии проверять длину введенного. Если длина равна 12 - то предотвращаем поведение по умолчанию.
// const nameInput = document.querySelector('#nameInput');
// nameInput.addEventListener('change', (event) => {
//   if (event.target.value.length > 11) {
//     event.preventDefault();
//   }
// });
// ------------------------------------------------------------------------------

// 2. Теперь добавим минимальную длину для нашего имени пользователя. Нам нужно при уходе пользователя из инпута (при событии потери фокуса - `blur`), проверять, введено ли в инпут значение больше 3 символов длиной. Если длина введенного в инпуте меньше 3 символов - нам нужно:
// - применить класс `errorInput` к инпуту
// - установить на него фокус (для этого у DOMElement-ов есть метод `focus()`)
// const nameInput = document.querySelector('#nameInput');
// nameInput.addEventListener('blur', (event) => {
//   if (event.target.value.length < 3) {
//     event.target.classList.add('errorInput');
//     event.target.focus();
//   } else {
//     event.target.classList.remove('errorInput');
//   }
// });
// ----------------------------------------------------------------------------------------

// 3. Работаем с событиями мыши. Нужно, чтобы при "заходе" мыши в блок `div.#bubblingBlock`, у этого блока становился цвет фона `yellow`, а после ухода курсора из блока - цвет фона должен быть обычный ('');
// const bubblingBlock = document.querySelector('#bubblingBlock');
// bubblingBlock.addEventListener('mouseover', (event) => {
//   event.target.style.backgroundColor = 'yellow';
// });
// bubblingBlock.addEventListener('mouseout', (event) => {
//   event.target.style.backgroundColor = '';
// });
// -----------------------------------------------------------------------------------------

// 4. Работаем со всплытием событий. У нас на странице есть блок `div#bubblingBlock`. Нужно добавить на него обработчик клика, чтобы он при клике выводил в консоль текст "Кликнули по " + ID элемента, по которому кликнули.
// const bubblingBlock = document.querySelector('#bubblingBlock');
// bubblingBlock.addEventListener('click', (event) => {
//   console.log(`Кликнута кнопка ${event.target.id}`);
// });
// --------------------------------------------------------------------------------------------

// 5. Теперь нам нужно предотвратить отработку этого обработчика для первой кнопки. То есть, сделать так, чтобы при клике на первую кнопку (`button#firstButton`), обработчик из п.4 не отрабатывал.
// const firstButton = document.querySelector('#firstButton');
// firstButton.addEventListener('click', (event) => {
//   event.stopPropagation();
// });
// ----------------------------------------------------------------------------------------------

// 6. Задача "со звездочкой". Реализовать задачу 5 БЕЗ использования `stopPropagation()`.
// const bubblingBlock = document.querySelector('#bubblingBlock');
// bubblingBlock.addEventListener('click', (event) => {
//   if (event.target.id == 'firstButton') {
//     event.defaultPrevented();
//   }
//   console.log(`Кликнута кнопка ${event.target.id}`);
// });
// -------------------
// bubblingBlock.addEventListener('click', (event) => {
//     if (!event.defaultPrevented) {
//         console.log(`Clicked on ${event.target.id}`)
//     }
// })
// -------------------------------------------------------------------------------------------

// 7. Закрепляем предыдущие задачи. У нас на странице есть ссылка, которая ведет на https://www.google.com. Нужно сделать так, чтобы при клике по ссылке в консоль выводилось сообщение "Ссылка не открывается - запрещено!", и перехода на странице Google не происходило. Подсказка - здесь нужно поставить обработчик клика и предотвратить поведение по умолчанию.
// const a = document.querySelector('a');
// a.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('Ссылка не открывается - запрещено!');
// });
// ----------------------------------------------------------------------------------------------

// 8. Немного усложним задачу с валидацией. У нас есть блок с произвольным количеством инпутов (форма), и кнопкой отправки формы. Задача - при нажатии на кнопку, пройтись по всем инпутам и проверить что в них введено какое-то значение (что непустой `value`). Тем инпутам, которые пустые - добавляем класс `errorInput`. И если хоть один инпут
//    пустой - то предотвратить отправку формы.
const inputsArr = document.querySelectorAll('#inputsTestForm > input');
const inputsBtn = document.querySelector('.tooltiped > button');
inputsBtn.addEventListener('click', (event) => {
  let isFormValid = true;
  inputsArr.forEach((el) => {
    if (el.value == '') {
      isFormValid = false;
      el.classList.add('errorInput');
    }
  });
  if (!isFormValid) {
    event.preventDefault();
  } else {
    inputsArr.forEach((el) => {
      el.value = '';
    });
  }
});
