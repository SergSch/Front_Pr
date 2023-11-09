// Если пользователь онлайн, то покрасить карточку в  светло-зеленый цвет. Если не онлайн - то в светло-серый

const users = [
  {
    id: 1,
    firstname: 'Anton',
    lastname: 'Ivanov',
    age: 30,
    online: true,
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  },
  {
    id: 2,
    firstname: 'Oleg',
    lastname: 'Petrov',
    age: 14,
    online: false,
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
  },
  {
    id: 3,
    firstname: 'Boris',
    lastname: 'Ushanov',
    age: 27,
    online: true,
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
  },
  {
    id: 4,
    firstname: 'Irina',
    lastname: 'Sokolova',
    age: 54,
    online: true,
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
  },
  {
    id: 5,
    firstname: 'Anna',
    lastname: 'Gribova',
    age: 10,
    online: true,
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
  },
  {
    id: 6,
    firstname: 'Liana',
    lastname: 'Ivanova',
    age: 33,
    online: false,
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
  },
];

const btn = document.querySelector('.addUser');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
  users
    .filter((elem) => elem.age > 18)
    .forEach((elem) => {
      const userCard = document.createElement('div');
      userCard.classList.add('card');
      const avatar = document.createElement('img');
      avatar.src = elem.avatar;
      avatar.setAttribute('alt', `${elem.firstname} ${elem.lastname}`);
      const id = document.createElement('p');
      id.textContent = `ID: ${elem.id}`;
      const name = document.createElement('p');
      name.textContent = `Firstname: ${elem.firstname}`;
      const sureName = document.createElement('p');
      sureName.textContent = `Lastname: ${elem.lastname}`;
      const age = document.createElement('p');
      age.textContent = `Age: ${elem.age}`;
      let status = document.createElement('p');
      status.textContent = `Status: ${elem.online ? 'online' : 'offline'}`;

      userCard.style.backgroundColor = elem.online ? 'lightgreen' : 'lightgrey';

      userCard.append(id, avatar, name, sureName, age, status);

      container.append(userCard);
    });
});

// Добавить в каждую карточку параграф со статусом. Если пользователь онлайн, то  "Status: online", если не онлайн - "Status: offline"
// Каждой карточке добавить аватар с картинкоq, доступной по ссылке под ключом avatar
