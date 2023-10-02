const div_root = document.querySelector('#root');
const div_container = document.createElement('div');
div_container.className = 'container';
div_root.append(div_container);

const post_form = document.querySelector('.post_form');
const delete_form = document.querySelector('.delete_form');

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

function deleteUsers(id) {
  fetch(`${root_url}/users/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getUsers();
    });
}

const root_url = 'http://158.160.60.49:3050';
function getUsers() {
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
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getUsers();
    });
}
getUsers();

const render = (arr) => {
  div_container.innerHTML = '';

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
};
