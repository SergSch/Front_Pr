// Здесь пока ничего нет.

// 1. Работаем с отложенным выполнением кода. Нужно вывести в консоль сообщение "Delayed message", через 5 секунд после запуска скрипта.
// setTimeout(() => {
//   console.log('Delayed message');
// }, 5000);

// ------------------------------------------------

// 2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.

// const inputDelay = document.createElement('input');
// inputDelay.name = 'delay';
// const btn = document.createElement('button');
// btn.innerText = 'Запуск';
// const root = document.querySelector('#root');
// root.append(inputDelay, btn);
// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     alert('Delayed message');
//   }, inputDelay.value * 1000);
// });

// ---------------------------------------------------------

// 3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
//  - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
//  - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
//  - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.
// const inputDelay = document.createElement('input');
// inputDelay.name = 'delay';
// inputDelay.placeholder = 'Введите время в секундах';
// const btn = document.createElement('button');
// btn.innerText = 'Запуск';
// const cancel = document.createElement('button');
// cancel.innerText = 'Cancel';
// cancel.classList.add('hidden');
// const root = document.querySelector('#root');
// root.append(inputDelay, btn, cancel);
// let timeId;

// btn.addEventListener('click', () => {
//   cancel.classList.remove('hidden');
//   timeId = setTimeout(() => {
//     alert('Delayed message');
//     cancel.classList.add('hidden');
//   }, inputDelay.value * 1000);
// });

// cancel.addEventListener('click', () => {
//   clearTimeout(timeId);
//   inputDelay.value = '';
// });

// ---------------------------------------------------------------
// 4. Работаем с другой асинхронной операцией. Наша задача - каждые 5 секунд выводить в консоль сообщение "Прошло 5 секунд".

// setInterval(() => {
//   console.log('Прошло 5 секунд');
// }, 5000);

// -------------------------------------------------------------

// 5. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида `01.01.2000 11:23:55`. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).

// const root = document.querySelector('#root');
// const date = document.createElement('p');
// setInterval(() => {
//   let time = new Date();
//   date.innerHTML =
//     time.getDate() +
//     '-' +
//     (time.getMonth() + 1) +
//     '-' +
//     time.getFullYear() +
//     ' ' +
//     time.getHours() +
//     ':' +
//     time.getMinutes() +
//     ':' +
//     time.getSeconds();
// }, 1000);

// root.append(date);

// ------------------------------------------------------------

// 6. Реализуем простой секундомер. Нужно добавить в блок с id=`simpleTimerContainer` секундомер. В блоке будут:
//  - параграф, в котором будем выводить текущее время секундомера
//  - кнопка "Старт" - при нажатии запускаем секундомер
//  - кнопка "Сброс" - при нажатии сбрасываем секундомер.

// let timer = document.createElement('p');
// const start = document.createElement('button');
// const stop = document.createElement('button');

// start.innerText = 'Start';
// stop.innerText = 'Stop';
// root.append(timer, start, stop);

// let a = 0;
// let count;
// timer.innerText = 0;

// start.addEventListener('click', function foo() {
//   if (a == 0) {
//     count = setInterval(() => {
//       a++;
//       timer.innerText = a;
//     }, 1000);
//   }
//   // this.removeEventListener('click', foo);
// });

// stop.addEventListener('click', () => {
//   clearInterval(count);
//   a = 0;
//   timer.innerText = a;
// });

// --------------------------------------------------------------------------

// 7. Усложняем наш секундомер. Нам нужно добавить кнопки "Пауза", "Возобновить". Первая будет приостанавливать, но не сбрасывать секундомер, а вторая - возобновлять его работу.

// let timer = document.createElement('div');
// const start = document.createElement('button');
// const stop = document.createElement('button');
// const pause = document.createElement('button');
// const goOn = document.createElement('button');

// start.innerText = 'Start';
// stop.innerText = 'Stop';
// pause.innerText = 'Pause';
// goOn.innerText = 'Continue';

// root.append(timer, start, pause, goOn, stop);

// let a = 0;
// let count;
// timer.innerText = 0;
// let continueClicked = false;

// function foo() {
//   count = setInterval(() => {
//     a++;
//     timer.innerText = a;
//   }, 1000);
// }

// start.addEventListener('click', () => {
//   if (a == 0) {
//     foo();
//   }
// });

// pause.addEventListener('click', () => {
//   clearInterval(count);
//   continueClicked = false;
// });

// goOn.addEventListener('click', () => {
//   if (a != 0 && !continueClicked) {
//     foo();
//     continueClicked = true;
//   }
// });

// stop.addEventListener('click', () => {
//   clearInterval(count);
//   a = 0;
//   timer.innerText = a;
//   continueClicked = false;
// });

// -------------------------------------------------------------------------

// 8. Работаем с промисами. Задача - написать промис, который через 5 секунд будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Successfully finished!');
//   }, 5000);
// });
// promise.then((a) => {
//   console.log(a);
// });

// ----------------------------------------------------------------

// 9. Теперь задача через 5 секунд завершить промис "неуспехом", с текстом "Something went wrong!", и вывести результат в консоль.
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Something went wrong!');
//   }, 5000);
// });

// promise.catch((a) => {
//   console.log(a);
// });

// ---------------------------------------------------------------------
