// код пишем здесь.
// 1. Пристрелочная задача. Написать асинхронную функцию, которая будет обращаться за списком товаров по адресу `https://fakestoreapi.com/products`, и выводит результат консоль. Использовать синтаксис async/await.
// --------------

// 2. Создать промис, который будет зарезолвлен через 3 секунды словом 'Success'. Используя синтаксис async/await, дождаться успешного выполнения промиса, и вывести результат в консоль. ВАЖНО! Слово `await` мы можем использовать только внутри `async`-функций, а следовательно, создадим для этих целей функцию `asyncFunction`, в которой будем работать с await.

// -----------------------------

// 4. Теперь работаем с нештатными ситуациями. Вызвать функцию `promiseFactory(false, 3, 'Something went wrong!');`. То есть, нужно имитировать нештатную ситуацию. И нам нужно, используя синтаксис async/await, обработать эту нештатную ситуацию - вывести причину в консоль. Здесь нам поможет `try/catch`.
// -------------------------------------

async function getProducts() {
  try {
    let url = `https://fakestoreapi.com/products`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    throw new Error('Error from async');
  } catch (err) {
    console.log('Something went wrong' + err);
  }
}

async function init() {
  //   try {
  //     let myPr = await (promiseFactory = promiseFactory(
  //       false,
  //       3,
  //       'Something went wrong!'
  //     ));
  //     console.log(myPr);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   getProducts();

  const asyncFunction = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success');
    }, 3000);
  });
  const promiseResult = await asyncFunction;
  //   console.log(promiseResult);
}
init();

// ------------------------------

// 3. Освежаем промисы. Написать функцию `promiseFactory`, которая будет создавать промисы. В аргументах она принимает `isSuccess`, `timeout`, `promiseResult`. Функция должна создать промис. Если `isSuccess = true`, то через `timeout` секунд промис должен быть зарезолвлен аргументом `promiseResult`. А если `isSuccess = false`, то через `timeout` секунд нужно вызвать `reject` с `promiseResult`.

function promiseFactory(isSuccess, timeout, promiseResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(promiseResult);
      } else {
        reject(promiseResult);
      }
    }, timeout * 1000);
  });
}
// promiseFactory(false, 3, 'Something went wrong!');

// 5. Нам нужно создать 2 промиса, с использованием нашей функции `promiseFactory`, оба должны зарезолвиться успешно. Первый - через 2 секунды, числом 5, а второй - через 3 секунды, числом 7. С использованием async/await, вывести в консоль сумму результатов этих двух промисов.
// 6. Переписать задачу 5 так, чтобы промисы запускались параллельно. В этом нам может помочь `Promise.all`.

async function sum() {
  try {
    let first = promiseFactory(true, 2, 5);
    let second = promiseFactory(true, 3, 7);
    Promise.all([first, second]).then((res) => console.log(res[0] + res[1]));
  } catch (err) {
    console.log(err);
  }
}
sum();

// ---------------------------------------------

// 7. Пишем универсальную функцию отправки GET-запроса, которая будет возвращать JSON. Назовем ее `jsonRequest`. В аргументах она принимает URL, к которому надо обратиться. Она должна сделать запрос по этому адресу, затем преобразовать результат в JSON, и вернуть "готовый к употреблению" результат. Используем синтаксис async/await.

// 8. С помощью нашей функции, обратимся к адресу `https://fakestoreapi.com/products`. ВАЖНО: с учетом того, что `jsonRequest` объявлена как `async`, то она возвращает нам ПРОМИС, а следовательно, обрабатывать результат можем или тоже с использование async/await, или с помощью then.

// 9. Дорабатываем нашу функцию `jsonRequest`. Теперь, если в функцию передан пустой url, то нужно генерировать свое исключение с текстом "Please, provide the URL!".

async function jsonRequest(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error('Please, provide the URL!');
    }
    let data = await response.json();
    return data;
  } catch (error) {
    {
      console.log('Error: ' + error.message);
    }
  }
}
let res = jsonRequest(`https://fakestoreapi.com/products`).then((data) => {
  data.forEach((elem) => console.log(data));
});
