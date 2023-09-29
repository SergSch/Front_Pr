// const p2 = new Promise((resolve, reject) => {
//   fetch('https://api.itgid.info/api/d5elay')
//     .then((response) => {
//       console.log(response);
//       if (response.ok) resolve(response.json());
//       else reject(response);
//     })
//     .catch((error) => reject(error));
// });

// p2.then(f1, f2);

// function f1(data) {
//   console.log(p2);
//   console.log('success');
//   console.log(data);
// }
// function f2(data) {
//   console.log(p2);
//   console.log('problem');
//   console.log(data);
// }
// console.log(p2);
// -----------------------------------
// 2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.

// const inputDelay = document.createElement('input');
// const root = document.querySelector('.root');
// inputDelay.placeholder = 'Secunds';

// const btnPusk = document.createElement('button');
// btnPusk.innerText = 'Запуск';
// root.append(inputDelay, btnPusk);

// btnPusk.addEventListener('click', () => {
//   setTimeout(() => {
//     console.log('Delayed message');
//   }, inputDelay.value * 1000);
// });

// ---------------------------------------
// 3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
//  - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
//  - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
//  - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.

const inputDelay = document.createElement('input');
const root = document.querySelector('.root');
inputDelay.placeholder = 'Secunds';
const cancel = document.createElement('button');
cancel.innerText = 'Отмена';
cancel.classList.add('hidden');

const btnPusk = document.createElement('button');
btnPusk.innerText = 'Запуск';

let time;

btnPusk.addEventListener('click', () => {
  cancel.classList.remove('hidden');
  time = setTimeout(() => {
    console.log('Delayed message');
    cancel.classList.add('hidden');
  }, inputDelay.value * 1000);
  inputDelay.value = '';
});
cancel.addEventListener('click', () => {
  clearTimeout(time);
});

// 4. Работаем с другой асинхронной операцией. Наша задача - каждые 5 секунд выводить в консоль сообщение "Прошло 5 секунд".
// --------------------------

// setInterval(() => {
//   console.log('5 sec');
// }, 3000);
// ---------------------------------

// 5. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида `01.01.2000 11:23:55`. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).

const timeBlock = document.createElement('div');

let timer = setInterval(() => {
  let date = new Date();
  timeBlock.innerText =
    date.getDate() +
    '.' +
    (date.getMonth() + 1) +
    '.' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds();
}, 1000);

// 6. Реализуем простой секундомер. Нужно добавить в блок с id=`simpleTimerContainer` секундомер. В блоке будут:
//  - параграф, в котором будем выводить текущее время секундомера
//  - кнопка "Старт" - при нажатии запускаем секундомер
//  - кнопка "Сброс" - при нажатии сбрасываем секундомер.
// -----------------------------------
// 7. Усложняем наш секундомер. Нам нужно добавить кнопки "Пауза", "Возобновить". Первая будет приостанавливать, но не сбрасывать секундомер, а вторая - возобновлять его работу.
// -----------------------------------

const simpleTimerContainer = document.querySelector('#simpleTimerContainer');
const parTimer = document.createElement('p');
const start = document.createElement('button');
start.innerText = 'START';
const btnStop = document.createElement('button');
btnStop.innerText = 'STOP';
const pause = document.createElement('button');
pause.innerText = 'PAUSE';
const goOn = document.createElement('button');
goOn.innerText = 'CONTINUE';

root.append(
  timeBlock,
  inputDelay,
  btnPusk,
  cancel,
  parTimer,
  start,
  pause,
  goOn,
  btnStop
);

let count = 0;
let sec;
let checked = false;

function foo() {
  sec = setInterval(() => {
    count++;
    parTimer.innerText = count;
  }, 1000);
}
parTimer.innerText = count;
start.addEventListener('click', () => {
  if (count == 0) {
    foo();
  }
});

pause.addEventListener('click', () => {
  clearInterval(sec);
  checked = true;
});

goOn.addEventListener('click', () => {
  if (count != 0 && checked == true) {
    foo();
    checked = false;
  }
});

btnStop.addEventListener('click', () => {
  clearInterval(sec);
  count = 0;
  parTimer.innerText = count;
});
// ----------------------------------------------

// 8. Работаем с промисами. Задача - написать промис, который через 5 секунд будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
// 9. Теперь задача через 5 секунд завершить промис "неуспехом", с текстом "Something went wrong!", и вывести результат в консоль.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Successfully finished!');
    reject('Something went wrong!');
  }, 3000);
})
  .then((a) => {
    console.log(a);
  })
  .catch((e) => {
    console.log(e);
  });

//   --------------------------------------------------------------
// 10. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://fakestoreapi.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
fetch(`https://fakestoreapi.com/products/categories`)
  .then((respone) => respone.json())
  .then((a) => console.log(a));
