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
// ---------------------------------------------
// Forms

const post_form = document.querySelector('.post_form');

post_form.addEventListener('submit', (event) => {
  event.preventDefault();
  let form_data = new FormData(event.target);
  let data = Object.fromEntries(form_data);
  postUsers(data);
  getUsers();
});

// --------------------------------------------------------
const root_url = 'http://158.160.60.49:3050';
const div_container = document.createElement('div');
div_container.classList.add('container');
const div_root = document.querySelector('#root');
div_root.append(div_container);

function getUsers() {
  fetch(`${root_url}/users`)
    .then((res) => res.json())
    .then((data) => render(data));
}

function postUsers(obj) {
  fetch(`${root_url}/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset = utf-8',
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function render(arr) {
  for (let elem of arr) {
    const div_card = document.createElement('div');
    const h3_name = document.createElement('h3');
    const p_info = document.createElement('p');

    div_card.classList.add('card');
    h3_name.innerText = `${elem.name} ${elem.id}`;
    p_info.innerText = `${elem.age} ${elem.job_id} ${elem.salary}`;

    div_card.append(h3_name, p_info);
    div_container.append(div_card);
  }
}
getUsers();
