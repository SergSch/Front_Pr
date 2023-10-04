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

const addDarkClassToHtml = () => {
  if (localStorage.getItem('theme') == 'dark') {
    body.classList.add('dark');
    change.textContent = 'sunny';
  } else {
    body.classList.remove('dark');
    change.textContent = 'dark_mode';
  }
};
addDarkClassToHtml();

// ----------------------------------------------------

const div_root = document.querySelector('#root');
const div_container = document.createElement('div');
div_container.className = 'container';
div_root.append(div_container);

const post_form = document.querySelector('.post_form');
const delete_form = document.querySelector('.delete_form');
const update_form = document.querySelector('.update_form');

post_form.addEventListener('submit', (event) => {
  event.preventDefault();
  let form_data = new FormData(event.target);
  let data = Object.fromEntries(form_data);
  postUsers(data);
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
  // let id = data.id;
  // let user = {
  //   name: data.name,
  //   salary: data.salary,
  //   age: data.age,
  //   job_id: data.job_id,
  // }
  let { id, ...user } = data;
  console.log(id);
  console.log(user);
  updateUsers(user, id);
});

async function deleteUsers(id) {
  try {
    let request = await fetch(`${root_url}/users/${id}`, {
      method: 'DELETE',
    });
    let response = await request.json();
    getUsers(response);
  } catch (err) {
    console.log(err);
  }
}

const root_url = 'http://158.160.60.49:3050';

async function getUsers() {
  try {
    let res = await fetch(`${root_url}/users`);
    let response = await res.json();
    render(response);
  } catch (err) {
    console.log(err);
  }
}

async function postUsers(obj) {
  try {
    let request = await fetch(`${root_url}/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(obj),
    });
    let response = await request.json();
    getUsers(response);
  } catch (err) {
    console.log(err);
  }
}

async function updateUsers(obj, id) {
  try {
    let request = await fetch(`${root_url}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(obj),
    });
    let response = await request.json();
    getUsers(response);
  } catch (err) {
    console.log(err);
  }
}

getUsers();

const render = (arr) => {
  div_container.innerHTML = '';

  for (let elem of arr) {
    const div_card = document.createElement('div');
    const h3_name = document.createElement('h3');
    const p_info = document.createElement('p');
    const close = document.createElement('button');

    close.innerText = 'X';
    close.classList.add('close');
    div_card.classList.add('card');
    h3_name.innerText = `${elem.name} ${elem.id}`;
    p_info.innerText = `${elem.age} ${elem.job_id} ${elem.salary}`;

    close.addEventListener('click', () => {
      deleteUsers(elem.id);
    });

    div_card.append(h3_name, p_info, close);
    div_container.append(div_card);
  }
};
