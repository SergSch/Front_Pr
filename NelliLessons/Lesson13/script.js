// 1. Создать форму (worker_form) с 3 инпутами + кнопка: first_name, last_name, avatar (https://reqres.in/img/faces/7-image.jpg)
// При сабмите формы формируется объект с данными работника и выводится в консоль

// Пример объекта

// {
//   id: unique,
//   first_name: '',
//   last_name: '',
//   avatar: ''
// }

const workersData = [];
const worker_form = document.querySelector('.worker_form');
const workers_container = document.querySelector('.workers_container');

worker_form.addEventListener('submit', (event) => {
  event.preventDefault();
  let { first_name, last_name, avatar, days, lohn } = event.target;

  let worker = {
    id: Date.now(),
    first_name: first_name.value,
    last_name: last_name.value,
    avatar: avatar.value,
    days: days.value,
    lohn: lohn.value,
  };
  workersData.push(worker);
  render(workersData);
  event.target.reset();
});

function render(arr) {
  workers_container.textContent = '';
  arr.forEach((elem) => {
    const card = document.createElement('div');
    const first_name = document.createElement('p');
    const last_name = document.createElement('p');
    const workerImg = document.createElement('img');
    const days = document.createElement('p');
    const salary = document.createElement('p');

    card.classList.add('card');

    first_name.textContent = `Firstname: ${elem.first_name}`;
    last_name.textContent = `Lastname ${elem.last_name}`;
    workerImg.src = elem.avatar;
    workerImg.alt = elem.first_name;

    days.textContent = `Days: ${elem.days}`;

    salary.textContent = `Salary: ${elem.days * elem.lohn}`;

    card.style.backgroundColor =
      elem.days * elem.lohn > 1000 ? 'lightpink' : 'lightgreen';

    card.append(first_name, last_name, workerImg, days, salary);
    workers_container.append(card);
  });
}
