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
    change.textContent = 'sunny';
  } else {
    body.classList.remove('dark');
    change.textContent = 'dark_mode';
  }
}
addDarkClassToHtml();

// -------------------------------------------------------------
const div_root = document.querySelector('#root');
const div_container = document.createElement('div');
div_container.className = 'container';
div_root.append(div_container);

let root_url = 'http://158.160.60.49:3050';

// Forms

const post_form = document.querySelector('.post_form');
const delete_form = document.querySelector('.delete_form');
const update_form = document.querySelector('.update_form');

post_form.addEventListener('submit', (event) => {
  event.preventDefault();
  let form_data = new FormData(event.target);
  let data = Object.fromEntries(form_data);
  postUsers(data);
  post_form.reset();
});

delete_form.addEventListener('submit', (event) => {
  event.preventDefault();
  let form_data = new FormData(event.target);
  let id = form_data.get('id');
  deleteUsers(id);
  delete_form.reset();
});

update_form.addEventListener('submit', (event) => {
  event.preventDefault();
  let form_data = new FormData(event.target);
  let data = Object.fromEntries(form_data);
  let { id, ...user } = data;
  updateUser(id, user);
  console.log(id, user);
});

function getUser() {
  fetch(`${root_url}/users`)
    .then((response) => response.json())
    .then((data) => render(data));
}

function postUsers(obj) {
  fetch(`${root_url}/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then(() => getUser());
}

function deleteUsers(id) {
  fetch(`${root_url}/users/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => getUser(data));
}

function updateUser(id, obj) {
  fetch(`${root_url}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset = utf-8',
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getUser();
    });
}

function render(array) {
  div_container.innerText = '';
  for (let elem of array) {
    const div_card = document.createElement('div');
    const h3_name = document.createElement('h3');
    const p_info = document.createElement('p');
    const close = document.createElement('p');
    close.textContent = 'X';
    close.classList.add('close');

    div_card.className = 'card';
    h3_name.innerText = `${elem.name} ${elem.id}`;
    p_info.innerText = `${elem.age} ${elem.job_id} ${elem.salary}`;

    div_card.append(h3_name, p_info, close);
    div_container.append(div_card);

    close.addEventListener('click', () => {
      deleteUsers(elem.id);
    });
  }
}
getUser();
