// 1. Отправить fetch-запрос по ссылке https://api.escuelajs.co/api/v1/users и вывести в консоль полученный массив с объектами

// 2. Из полученных данных отрисовать карточки пользователей (avatar, name, кликабельный email, role) и добавить эти карточки в div.users_container

// 3. Стилизовать карточки (без добавления классов) - border, border-radius, padding, оцентровка.
// Сделать всем карточкам картинку одинаковых размеров без деформации изображения.
//При наведении на карточку курсора - цвет заднего фона меняется на светло-голубой

// 4. Стилизовать контейнер - сделать грид (4 колонки с отступами)

// 5. Создать форму с 5 инпутами - name, email, avatar, role, password + кнопку. При сабмите формируется объект и выводит в консоль

// Пример объекта:

// {
//   email: "string",
//   name: "string",
//   password: "string",
//   role: "string",
//   avatar: "string"
// }

// 6. Написать функцию, принимающую в качестве аргумента объект (newUser) и отправляющую fetch-post-запрос по ссылке https://api.escuelajs.co/api/v1/users

const users_container = document.querySelector('.users_container');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let dataFromForm = new FormData(form);
  let data = Object.fromEntries(dataFromForm);
  getUser(data);

  //   let { name, email, password, role, avatar } = event.target;
  //   let userObj = {
  //     email: email.value,
  //     name: name.value,
  //     password: password.value,
  //     role: role.value,
  //     avatar: avatar.value,
  //   };
  //   getUser(userObj);
  event.target.reset();
});

function getUser(obj) {
  fetch('https://api.escuelajs.co/api/v1/users', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

const url = 'https://api.escuelajs.co/api/v1/users';
fetch(url)
  .then((responce) => responce.json())
  .then((data) => render(data));

function render(arr) {
  arr.forEach((elem) => {
    const card = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('h2');
    const email = document.createElement('a');
    const role = document.createElement('p');

    avatar.src = elem.avatar;
    avatar.alt = elem.name;
    name.textContent = `Name: ${elem.name}`;
    email.href = `mailto:${elem.email}`;
    email.textContent = elem.email;
    role.textContent = `Role: ${elem.role}`;

    card.append(avatar, name, email, role);
    users_container.append(card);
  });
}
