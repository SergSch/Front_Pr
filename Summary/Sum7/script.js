// Виды fetch-запросов:

// GET - получить данные
// POST - добавить данные
// PATCH - частично изменить существующие данные
// PUT - полностью изменить существующие данные
// DELETE - удалить данные

// let a = 10;
// const promise = new Promise((res) => {
//   setTimeout(() => {
//     res((a = 30));
//   }, 3000);
// }).then(() => console.log(multA(a)));
// console.log(a);

// const multA = (a) => a * 2;

// console.log(multA(a));
// ------------------------------------

// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/users
// Получить данные по запросу (GET-запрос) и вывести в консоль полученные данные
fetch('https://jsonplaceholder.typicode.com/users') // отправили запрос
  .then((res) => res.json()) // получили ответ и преобразовали в JSON
  .then((json) => renderCards(json)); // полученные по запросу данные в формате JSON вывели в консоль

//   ---------------------------------------------------------
// 2. Написать функцию renderCards(), которая принимает в качестве аргумента массив с объектами и для каждого объекта в массиве отрисовывает карточку пользователя (name, username) в диве с классом users_container
// 3. Для каждой карточки вывести кликабельную почту. При клике на почту должно открывать приложение по работе с почтой (тег a, href + mailto)
// 4. Стилизовать карточки (border, padding, border-radius). Если имя человека начинается с буквы C, то покрасить цвет заднего фона в светло-розовый. Всех остальных покрасить в светло-зеленый.
// 5. Стилизовать контейнер - сделать грид 4 колонки
// 6. Каждой карточке добавить крестик в правый верхний угол, при клике на который происходит удаление карточки
// 7. При клике на карточку менять цвет заднего фона на фиолетовый, а цвет текста на белый

const root = document.querySelector('.root');

function renderCards(arr) {
  arr.forEach((elem) => {
    const usersCard = document.createElement('div');
    usersCard.classList.add('usersCard');
    const userName = document.createElement('p');
    userName.innerText = `User Name: ${elem.username}`;
    const name = document.createElement('p');
    name.innerText = `Name: ${elem.name}`;
    const close = document.createElement('p');
    close.innerText = 'X';
    close.classList.add('close');
    usersCard.style.backgroundColor =
      elem.name[0] == 'C' ? 'lightpink' : 'lightgreen';
    const email = document.createElement('a');
    email.href = `mailto: ${elem.email}`;
    email.innerText = elem.email;
    usersCard.append(name, userName, email, close);
    root.append(usersCard);
    usersCard.addEventListener('click', () => {
      usersCard.style.backgroundColor = 'purple';
      usersCard.style.color = 'white';
      email.style.color = 'white';
    });
    close.addEventListener('click', () => {
      root.innerText = '';
      const newArr = arr.filter((el) => el.id !== elem.id);
      renderCards(newArr);
    });
  });
}
