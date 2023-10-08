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
// ------------------------------------------

const task_container = document.querySelector('.task_container');

// 1. Отправить fetch get-запрос по ссылке https://dummyjson.com/todos и полученные по запросу данные вывести в консоль
// 2. Написать функцию renderTasks(), которая принимает в качестве аргумента массив с объектами и для каждого объекта создает карточку задачи (todo). Карточка должна состоять из одного параграфа с описанием todo
// 3. Добавить созданные карточки (30 штук) в div.tasks_container
// 4. Стилизовать карточки (border, padding, border-radius).
// 5. Стилизовать контейнер (грид)
// 6. Если задача выполнена, то покрасить карточку в светло-зеленый, если не выполнена, то в светло-серый
// 7. К каждой карточке добавить параграф со статусом.  Если задача выполнена, то написать "Status: task done". Если не выполнена, то - "Status: not done"
// 8. При клике на карточку менять ее статус на противоположный
// 9. Каждой карточке добавить крестик в правый верхний угол, при клике на который карточка удаляется.
// 10. Добавить форму (1 инпут + кнопка), которая собирает данные о todo. При сабмита формы, формируется объект с ключами todo и completed (по умолчанию false) и выводится в консоль

let todosData = [];

let url = 'https://dummyjson.com/todos';
async function getTodos(url) {
  let promise = await fetch(url);
  let res = await promise.json().then((data) => {
    console.log(data.todos);
    getData(data.todos);
    renderTasks(todosData);
  });
}
const getData = (arr) => (todosData = arr);

getTodos(url);

function renderTasks(arr) {
  task_container.innerText = '';
  arr.forEach((elem, i) => {
    const taskCard = document.createElement('div');
    const taskElem = document.createElement('p');
    const status = document.createElement('p');
    const close = document.createElement('p');
    close.innerText = 'X';
    close.classList.add('close');

    status.innerText = `Status: ${
      elem.completed ? 'task done' : 'task not done'
    }`;

    taskCard.classList.add('taskCard');
    taskElem.innerText = `${i + 1}. ${elem.todo}`;
    taskCard.append(taskElem, status, close);

    taskCard.style.background = elem.completed ? 'lightgreen' : 'lightgrey';

    task_container.append(taskCard);

    taskCard.addEventListener('click', () => {
      elem.completed = !elem.completed;
      renderTasks(arr);
    });
    close.addEventListener('click', (event) => {
      event.stopPropagation();
      let newArr = arr.filter((el) => el.id !== elem.id);
      renderTasks(newArr);
    });
  });
}

const form = document.querySelector('.task_form');
const inpTodo = document.createElement('input');
const btnAdd = document.createElement('button');

inpTodo.placeholder = 'ToDo';
inpTodo.name = 'inptodo';
btnAdd.innerText = 'Add Todo';
form.append(inpTodo, btnAdd);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { inptodo } = event.target;
  const new_task = {
    id: Date.now(),
    todo: inptodo.value,
    completed: false,
  };
  todosData.push(new_task);
  renderTasks(todosData);
});
