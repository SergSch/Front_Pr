// 1. В html-документе создать кнопку и пустой контейнер. При клике на кнопку в контейнере появляется карточка пользователя (div). Внутри карточки 3 параграфа - имя, фамилия, возраст
// Стилизовать карточку пользователя через css - добавить border, padding и разместить текст по центру карточки.
// Стилизовать usersContainer через css - сделать грид, 4 колонки
// В параграфы подставить данные из объекта user_info

let plus = 1;
const user_info = {
  id: plus++,
  firstname: 'Anton',
  lastname: 'Ivanov',
  age: 30,
};

const btn = document.querySelector('.addUser');
const container = document.querySelector('.container');

btn.addEventListener('click', () => {
  const userCard = document.createElement('div');
  userCard.classList.add('card');
  const id = document.createElement('p');
  id.textContent = `ID: ${user_info.id}`;
  const name = document.createElement('p');
  name.textContent = `Firstname: ${user_info.firstname}`;
  const sureName = document.createElement('p');
  sureName.textContent = `Lastname: ${user_info.lastname}`;
  const age = document.createElement('p');
  age.textContent = `Age: ${user_info.age}`;
  userCard.append(id, name, sureName, age);
  container.append(userCard);
});
