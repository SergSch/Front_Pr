// 1. Отработка взаимодействия с localStorage
// - реализовать сохранение в localStorage ключа test, и значения 100.
// - реализовать получение ключа test из localStorage, и вывод его в консоль.
// - очистить ключ test в localStorage.

// localStorage.setItem('test', 100);
// let locSt = localStorage.getItem('test');
// console.log(locSt);
// localStorage.removeItem('test');
// -----------------------------------------------------------

// 2. Реализовать запоминание времени первого посещения сайта, и вывод его в консоль. То есть, на событие загрузки документа добавить обработчик, который:
//  - проверит наличие в localStorage ключа `firstEnter`.
//  - если его нет - запомнит в localStorage значение текущего времени (использовать конструкцию `let firstEnter = Date.now();`), с ключом `firstEnter`.
//  - если такой ключ есть - вывести его в консоль.

// document.addEventListener('DOMContentLoaded', (event) => {
//   const existingValue = localStorage.getItem('firstEnter');
//   if (existingValue) {
//     console.log(existingValue);
//   } else {
//     localStorage.setItem('firstEnter', Date.now());
//   }
// });

// let time =
//   localStorage.getItem('firstEnter') ??
//   localStorage.setItem('firstEnter', Date.now());
// console.log(localStorage.getItem('firstEnter'));
// --------------------------------------------------------------------------------

// 3. Реализовать сохранение значения инпута в localStorage, а именно:
//  - средствами JS добавить в `div.root`, инпут.
//  - на инпут, на событие потери фокуса, добавить обработчик, который сохранит в localStorage значение инпута (использовать ключ inputValue)
//  - на событие загрузки документа, добавить обработчик, который проверит наличие в localStorage ключа inputValue. Если такой имеется - то его значение записать в инпут.

// const div = document.querySelector('div.root');
// const newEl = document.createElement('input');
// div.append(newEl);
// newEl.addEventListener('blur', () => {
//   localStorage.setItem('inputValue', newEl.value);
// });
// document.addEventListener('DOMContentLoaded', () => {
//   let proof = localStorage.getItem('inputValue');
//   if (proof) {
//     newEl.value = proof;
//   }
// });
// -------------------------------------------------------------------------------------------

// 4. Верстка формы обратной связи. От нас требуется с помощью JS (методами работы с DOM), создать и добавить на страницу форму обратной связи. Предполагается, что форма имеет следующие поля:
//    - фамилия
//    - имя
//    - емейл
//    - телефон
//    - кнопка "Отправить"
//    - кнопка "Отмена"

// const div = document.querySelector('div.root');
// const wrap = document.querySelector('.wrapper');
// const form = document.createElement('form');
// wrap.append(form);
// const familie = document.createElement('input');
// familie.classList.add = 'familie';
// familie.placeholder = 'Familie';
// form.append(familie);
// const name = document.createElement('input');
// name.classList.add = 'name';
// name.placeholder = 'Name';
// form.append(name);
// const email = document.createElement('input');
// email.classList.add = 'email';
// email.placeholder = 'Email';
// form.append(email);
// const phone = document.createElement('input');
// phone.classList.add = 'phone';
// phone.placeholder = 'Phone';
// form.append(phone);
// const send = document.createElement('button');
// send.textContent = 'Send';
// send.classList.add('send');
// form.append(send);
// const back = document.createElement('button');
// back.textContent = 'Отмена';
// back.classList.add('back');
// form.append(back);

// --------------------------------------------------------------------------------------
// 5. Обеспечение сохранения имени пользователя при обновлении страницы, и при показе формы, если значение указано - заполняем соответствующий инпут.
// send.addEventListener('click', () => {
//   localStorage.setItem('familie', familie.value);
// });
// familie.addEventListener('click', () => {
//   familie.value = localStorage.getItem('familie');
// });

// --------------------------------------------------------------------------------------------
// 6. Обеспечение сохранения данных полей формы при обновлении страницы, и заполнение значениями при показе формы.
// let obj;
// send.addEventListener('click', (ev) => {
//   ev.preventDefault();
//   let formAll = document.querySelectorAll('input');
//   obj = {
//     familie: familie.value,
//     name: name.value,
//     email: email.value,
//     phone: phone.value,
//   };
//   localStorage.setItem('obj', JSON.stringify(obj));
//   formAll.forEach((el) => (el.value = ''));
// });

// -------------------------------------------------------------------------

// 7. Обеспечение очистки данных формы при нажатии "Отмена" - т.е. если пользователь нажал "Отмена", то очищаем localStorage
// const rem = document.querySelector('.back');
// back.addEventListener('click', (ev) => {
//   ev.preventDefault();
//   localStorage.clear();
//   let formAll = document.querySelectorAll('input');
//   formAll.forEach((el) => (el.value = ''));
// });

// -----------------------------------------------------------------------------

// 8. Показ формы как модального окна. Для этого, на страницу (в разметку HTML) добавляем кнопку "Связаться с нами". По клику на эту кнопку - показываем модальное окно с формой.

// const contact = document.querySelector('.contact');
// const close = document.querySelector('.close');

// contact.addEventListener('click', () => {
//   wrap.style.display = 'block';
//   let serializedObj = localStorage.getItem('obj');
//   if (serializedObj != null) {
//     let deserializedObj = JSON.parse(serializedObj);
//     familie.value = deserializedObj.familie;
//     name.value = deserializedObj.name;
//     email.value = deserializedObj.email;
//     phone.value = deserializedObj.phone;
//   }
// });

// close.addEventListener('click', () => {
//   wrap.style.display = 'none';
// });

// const myObj = {
//   name: 'Vasilij',
//   surname: 'Vailiev',
// };

// localStorage.setItem('myObj', JSON.stringify(myObj));

// const serializedData = localStorage.getItem('myObj');
// console.log(serializedData);
// const deserialized = JSON.parse(serializedData);
// console.log(deserialized);
// -------------------------------------------------------------------------------

// Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами. Запустите этот скрипт, чтобы данные сохранились. Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму. Запустите второй скрипт и убедитесь в его работоспособности.

// const arrInp = document.querySelectorAll('.block > input');
// const btn = document.querySelector('.first');
// const get = document.querySelector('.second');
// const par = document.querySelector('.sum');
// let arr = {};
// btn.addEventListener('click', () => {
//   arr = Array.from(arrInp).reduce((acc, elem, i) => {
//     acc[elem.id] = elem.value;
//     return acc;
//   }, {});
//   localStorage.setItem('key', JSON.stringify(arr));
//   arrInp.forEach((el) => {
//     el.value = '';
//   });
// });

// get.addEventListener('click', () => {
//   let a = JSON.parse(localStorage.getItem('key'));
//   let sum = 0;
//   for (let i of Object.values(a)) {
//     sum += +i;
//   }
//   par.textContent = sum;
//   console.log(par);
// });

// ---------------------------------------------------------------------------------------------
// По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени. Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.

// // Проверяем, есть ли запись в локальном хранилище
// if (localStorage.getItem('lastVisit')) {
//   // Если запись существует, получаем предыдущее время
//   let previousVisitTime = new Date(localStorage.getItem('lastVisit'));
//   // Получаем текущее время
//   let currentTime = new Date();
//   // Рассчитываем разницу во времени
//   let timeDiff = currentTime - previousVisitTime;
//   // Конвертируем разницу во времени в секунды
//   let secondsDiff = Math.floor(timeDiff / 1000);

//   // Выводим сообщение о времени, прошедшем с предыдущего захода
//   console.log(
//     'С момента предыдущего захода прошло ' + secondsDiff + ' секунд.'
//   );
// }

// // Сохраняем текущий момент времени в локальное хранилище
// let currentVisitTime = new Date();
// localStorage.setItem('lastVisit', currentVisitTime);
// ----------------------
