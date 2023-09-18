const div_root = document.querySelector('#root');
const div_container = document.createElement('div');
div_container.className = 'container';
// div_container.classList.add('containet');
div_root.append(div_container);
const add_form = document.querySelector('.add_form');
const update_form = document.querySelector('.update_form');

// Обработка данных с формы
add_form.onsubmit = (e) => {
  e.preventDefault();
  let form_data = new FormData(add_form);
  let data = Object.fromEntries(form_data);
  // аналог автоинкримента для атрибута id нового элемента
  data.id = users.length ? Math.max(...users.map((elem) => elem.id)) + 1 : 1;
  addUser(data);
};

update_form.onsubmit = (e) => {
  e.preventDefault();
  let form_data = new FormData(update_form);
  let { id, ...data } = Object.fromEntries(form_data);
  updateUser(id, data);
};

let data = [
  { id: 1, name: 'Alex', salary: 2000 },
  { id: 2, name: 'John', salary: 4000 },
  { id: 3, name: 'Steven', salary: 1000 },
  { id: 4, name: 'Neena', salary: 5000 },
  { id: 5, name: 'Jimmy', salary: 8000 },
  { id: 6, name: 'Georgy', salary: 500 },
  { id: 7, name: 'Leon', salary: 999 },
];

let users = JSON.parse(localStorage.getItem('users')) ?? data;

function render(arr) {
  for (let el of arr) {
    const div_card = document.createElement('div');
    const h2_name = document.createElement('h2');
    const p_salary = document.createElement('p');
    const h5_id = document.createElement('h5');
    const del_button = document.createElement('button');

    div_card.className = 'card';
    del_button.className = 'del_button';
    h2_name.innerText = el.name;
    p_salary.innerText = el.salary;
    h5_id.innerText = el.id;
    del_button.innerText = 'X';

    div_container.append(div_card);
    div_card.append(h2_name, h5_id, p_salary, del_button);

    del_button.onclick = () => deleteUserById(el.id);
  }
}

function rerender(arr) {
  localStorage.setItem('users', JSON.stringify(arr));
  div_container.innerHTML = '';
  render(arr);
}

function deleteUserById(id) {
  users = users.filter((elem) => elem.id !== id);
  rerender(users);
}

// Добавление нового пользователя
function addUser(obj) {
  users.push(obj);
  // users = [...users, obj];
  rerender(users);
}

// Изменение данных пользователей
function updateUser(id, obj) {
  let findUser = users.find((elem) => elem.id == id);
  if (findUser) {
    findUser.name = obj.name;
    findUser.salary = obj.salary;
    rerender(users);
  } else {
    alert('ID does not exist');
  }
}

// Вызов
render(users);

// Доработайте процесс таким образом, чтобы в момент обновления стрианцы
// формировались элементы, которые были сохранены в LS.
// Примечание: если записи в LS нет - тогда нужно реднерить исходный массив

// В момент загрузки, в функцию рендер должен попасть массив из LS (а не массив users)
