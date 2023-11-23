fetch('https://jsonplaceholder.typicode.com/users') // отправляем запрос на сервер, получаем в ответ промис
  .then((res) => res.json()) // преобразуем полученные данные в json
  .then((json) => {
    renderUsers(json);
    console.log(json);
  }); // полученный по запросу json выводим в консоль

const users_container = document.querySelector('.users_container');

function renderUsers(arr) {
  for (let elem of arr) {
    const card = document.createElement('div');
    const name = document.createElement('p');
    const username = document.createElement('p');
    const mail = document.createElement('a');

    const address = document.createElement('p');
    address.innerText = `Address: ${elem.address.city}, ${elem.address.street}, ${elem.address.zipcode}, ${elem.address.suite}`;

    card.classList.add('card');

    mail.href = `mailto:${elem.email}`;
    mail.innerText = `Email: ${elem.email}`;

    name.textContent = `Name: ${elem.name}`;
    username.textContent = `Username: ${elem.username}`;
    card.append(name, username, mail, address);
    users_container.append(card);

    card.style.backgroundColor = elem.name.toLowerCase().startsWith('c')
      ? 'yellow'
      : 'lightgreen';
  }
}
