// Метод fetch()
// Метод позволяет реализовать сетевой запрос

// const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
//     // 1) Декодирование ответа от сервера
//     .then((res) => res.json())
//     // 2) Получение самих данных (массив)
//     .then((data) => {
//         let filteredData = data.filter(elem => elem.id % 2 === 0)
//         console.log(filteredData)
//     })

// Задание 1
// Задана ссылка на API постов
// https://jsonplaceholder.typicode.com/posts
// Получите массив, предварительно отфильтровав его по длине сво-ва title (минимум 15 символов).

// const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         let filteredData = data.filter(elem => elem.title.length >= 15)
//         // let changedData = data.map(elem => ({id: elem.id, user_id: elem.userId}))
//         // console.log(changedData)
//         console.log(filteredData)
//     })

// ----------------------------------------
// Пример формирование разметки

// const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
//     .then(res => res.json())
//     .then(data => render(data))

// function render(array){
//     for(let elem of array){
//         const h_name = document.createElement('h2')
//         h_name.innerText = elem.username
//         document.body.append(h_name)
//     }
// }

// ------------------------------
// Методы сетевых запросов

// GET      -   Запрос на чтение/получение данных
// POST     -   Запрос на добоавление данных на сервере
// DELETE   -   Запрос на удаление данных на сервере
// PUTCH    -   Запрос на изменение данных на сервере

// -------------------
// Пример GET - запроса

function getFetchUsers() {
  const url = 'http://158.160.60.49:3050/users/';
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// -----------------
// Пример POST - запроса

function postFetchUsers() {
  const url = 'http://158.160.60.49:3050/user/create';

  let newRow = {
    name: 'Serg',
    age: 40,
    salary: 1000,
    job_id: 'no',
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(newRow),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// postFetchUsers();
getFetchUsers();
const userIdToDelete = 276;
const url = `http://158.160.60.49:3050/user/${userIdToDelete}`;
fetch(url, {
  method: 'DELETE',
})
  .then((response) => {
    if (response.ok) {
      console.log('Учетная запись успешно удалена.');
    } else {
      console.error('Не удалось удалить учетную запись.');
    }
  })
  .catch((error) => {
    console.error('Произошла ошибка при удалении учетной записи:', error);
  });
