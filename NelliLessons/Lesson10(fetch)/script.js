fetch('https://dummyjson.com/todos')
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    render(json.todos);
  });

const todos_container = document.querySelector('.products_container');

function render(arr) {
  for (let elem of arr) {
    const card = document.createElement('div');
    const title = document.createElement('p');
    const status = document.createElement('p');

    card.classList.add('card');

    title.textContent = `Title: ${elem.todo}`;
    status.textContent = `Status: ${elem.completed ? 'done' : 'No'}`;

    card.append(title, status);
    todos_container.append(card);
  }
}
