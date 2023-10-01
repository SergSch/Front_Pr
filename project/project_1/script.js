// ------------------Theme---------------------------
const body = document.querySelector('html');
const theme = document.querySelector('.theme');
const change = document.querySelector('.theme > span');
theme.addEventListener('click', () => {
  if (localStorage.getItem('theme') == 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHtml();
});

function addDarkClassToHtml() {
  if (localStorage.getItem('theme') == 'dark') {
    body.classList.add('dark');
    change.textContent = ' sunny';
  } else {
    body.classList.remove('dark');
    change.textContent = 'dark_mode ';
  }
}
addDarkClassToHtml();
// ----------------------------------------------------------------

const main = document.querySelector('main');
const container = document.querySelector('.container');
const btnAdd = document.createElement('button');
btnAdd.classList.add('btn');
btnAdd.innerText = 'Add Card';
main.append(btnAdd, container);

// Добавьте это здесь

function getUsers() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let localData = JSON.parse(localStorage.getItem('users'));
      if (localData) {
        renderUser(localData);
      } else {
        renderUser(data);
        localStorage.setItem('users', JSON.stringify(data));
      }
    });
}
getUsers();

const renderUser = (arr) => {
  container.innerHTML = '';
  arr.forEach((elem) => {
    const userCard = document.createElement('div');
    userCard.classList.add('userCard');

    const blockL = document.createElement('div');
    const blockR = document.createElement('div');
    blockL.classList.add('blockL');
    blockR.classList.add('blockR');

    const img = document.createElement('img');
    img.classList.add('userImg');
    const userName = document.createElement('h3');
    const userId = document.createElement('p');
    const userEmail = document.createElement('p');
    const close = document.createElement('p');
    close.classList.add('close');
    close.innerText = 'X';

    img.src = 'https://picsum.photos/200';
    userId.innerText = `ID: ${elem.id}`;
    userName.innerText = `User Name: ${elem.name}`;
    userEmail.innerText = `Email: ${elem.email}`;

    blockL.append(img);
    blockR.append(userId, userName, userEmail);
    userCard.append(blockL, blockR, close);
    container.append(userCard);

    close.addEventListener('click', () => {
      const newArr = arr.filter((el) => el.id != elem.id);
      localStorage.setItem('users', JSON.stringify(newArr));
      if (JSON.parse(localStorage.getItem('users')).length === 0) {
        localStorage.removeItem('users');
      }
      renderUser(newArr);
    });
  });
};

const createForm = () => {
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const btnAddUser = document.createElement('button');
  const close = document.createElement('p');

  close.innerText = 'X';
  close.classList.add('close');
  btnAddUser.classList.add('btnAddUser');
  btnAddUser.innerText = 'Add User';
  form.classList.add('form');
  inputName.placeholder = 'Name';
  inputName.name = 'User Name';
  inputEmail.name = 'User Email';
  inputEmail.placeholder = 'Email';
  form.append(inputName, inputEmail, btnAddUser, close);
  main.append(form);
  close.addEventListener('click', () => {
    form.style.display = 'none';
  });
  btnAdd.addEventListener('click', () => {
    form.style.display = 'flex';
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    data.img = 'https://picsum.photos/200';
    data.id = Date.now();
    console.log(data);
  });
};
createForm();
