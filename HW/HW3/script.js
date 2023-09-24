const div_root = document.querySelector('#root');
const div_container = document.createElement('div');
const btn_add = document.createElement('button');
btn_add.innerText = 'Add card';
btn_add.classList.add('btnAdd');
div_container.classList.add('container');
div_root.append(btn_add, div_container);

let data = [
  {
    img: 'https://picsum.photos/150',
    name: 'Stiv',
    salary: 5000,
    userNumber: 1,
  },
  {
    img: 'https://picsum.photos/150',
    name: 'Pit',
    salary: 7000,
    userNumber: 2,
  },
  {
    img: 'https://picsum.photos/150',
    name: 'Ann',
    salary: 6500,
    userNumber: 3,
  },
  {
    img: 'https://picsum.photos/150',
    name: 'Kate',
    salary: 8000,
    userNumber: 4,
  },
  {
    img: 'https://picsum.photos/150',
    name: 'Lena',
    salary: 4500,
    userNumber: 5,
  },
  {
    img: 'https://picsum.photos/150',
    name: 'Dave',
    salary: 8500,
    userNumber: 6,
  },
];

let users = JSON.parse(localStorage.getItem('users')) ?? data;

function render(arr) {
  arr.forEach((elem) => {
    const div_card = document.createElement('div');
    const img = document.createElement('img');
    const h2_name = document.createElement('h2');
    const salary = document.createElement('p');
    const userNumber = document.createElement('p');
    const blockRight = document.createElement('div');
    const blockLeft = document.createElement('div');

    blockRight.classList.add('right');
    div_card.classList.add('card');
    img.classList.add('userImg');

    img.src = elem.img;
    h2_name.innerText = 'Name: ' + elem.name;
    salary.innerText = 'Salary: ' + elem.salary;
    userNumber.innerText = 'User Number: ' + elem.userNumber;

    const deleteCard = document.createElement('p');
    deleteCard.classList.add('deleteCard');
    deleteCard.innerText = 'X';

    blockLeft.append(img);
    blockRight.append(h2_name, salary, userNumber);
    div_container.append(div_card);
    div_card.append(blockLeft, blockRight, deleteCard);

    deleteCard.addEventListener('dblclick', () => deleteUser(elem.userNumber));
  });
}

function pushNewUser(obj) {
  users.push(obj);
  rerender(users);
}

const rerender = (arr) => {
  localStorage.setItem('users', JSON.stringify(arr));
  div_container.innerHTML = '';
  render(arr);
};

function deleteUser(id) {
  users = users.filter((el) => el.userNumber !== id);
  rerender(users);

  if (users.length === 0) {
    localStorage.removeItem('users');
  }
}

render(users);

// ------------FORM--------------
const form = document.createElement('form');
const inputName = document.createElement('input');
const inputSalary = document.createElement('input');
const btn = document.createElement('button');

const closeForm = document.createElement('p');
closeForm.classList.add('closeForm');
closeForm.innerText = 'X';

inputName.placeholder = 'name';
inputSalary.placeholder = 'salary';

inputName.name = 'name';
inputSalary.name = 'salary';

btn.innerText = 'Add to card';
btn.classList.add('addCardForm');

form.append(inputName, inputSalary, btn, closeForm);
div_root.append(form);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { name, salary } = event.target;
  let date = {
    img: 'https://picsum.photos/150',
    name: name.value,
    salary: salary.value,
    userNumber: Date.now(),
  };

  pushNewUser(date);
  name.value = '';
  salary.value = '';
});
closeForm.addEventListener('click', () => {
  form.style.display = 'none';
});
btn_add.addEventListener('click', () => {
  form.style.display = 'flex';
});
