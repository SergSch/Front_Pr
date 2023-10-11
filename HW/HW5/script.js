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

// ----------------------------------------------------------------

// 1.Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя (/users) и выводит список его задач (/todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя.

// function getTodos(user) {
//   let apiUrl = `https://jsonplaceholder.typicode.com/users?username=${user}`;
//   fetch(apiUrl)
//     .then((responce) => {
//       if (!responce.ok) {
//         throw new Error('Error');
//       }
//       return responce.json();
//     })
//     .then((users) => {
//       if (users.length == 0) {
//         throw new Error('No such user!');
//       }
//       const userId = users[0].id;
//       const todosId = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
//       return fetch(todosId);
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => {
//       console.log(error);
//     });
// }
// getTodos('Leopoldo_Corkery');

// async function getTodos(username) {
//   let urlUsers = `https://jsonplaceholder.typicode.com/users`;
//   let resUsers = await fetch(urlUsers);
//   let dataUser = await resUsers.json();
//   let user = dataUser.find((elem) => elem.username === username);
//   console.log(user.id);

//   let urlTodos = `https://jsonplaceholder.typicode.com/todos`;
//   let resTodos = await fetch(urlTodos);
//   let dataTodos = await resTodos.json();
//   let result = dataTodos.filter((elem) => elem.userId === user.id);
//   console.log(result);
// }
// getTodos('Bret');

// ---------------------

async function getTodos(username) {
  let urlUsers = `https://jsonplaceholder.typicode.com/users?username=${username}`;
  let resUsers = await fetch(urlUsers);
  let dataUser = await resUsers.json();
  console.log(dataUser);

  let urlTodos = `https://jsonplaceholder.typicode.com/todos?userId=${dataUser[0].id}`;
  let resTodos = await fetch(urlTodos);
  let dataTodos = await resTodos.json();
  console.log(dataTodos);
}
// getTodos('Bret');

// -------------------------------------------------------------------

// Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок поста (/posts) и выводит список всех его комментариев (/comments).
// В качестве ответа в консоль выведите массив с комментариями. Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.

// function getComments(title) {
//   const postUrl = `https://jsonplaceholder.typicode.com/posts?title=${title}`;
//   fetch(postUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Ошибка запроса');
//       }
//       return response.json();
//     })
//     .then((posts) => {
//       if (posts.length === 0) {
//         console.log('Пост с указанным заголовком не найден');
//       } else {
//         const postId = posts[0].id;
//         const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
//         return fetch(commentsUrl);
//       }
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Ошибка запроса');
//       }
//       return response.json();
//     })
//     .then((comments) => {
//       if (comments.length === 0) {
//         console.log('У этого поста нет комментариев');
//       } else {
//         console.log(comments);
//       }
//     })
//     .catch((error) => {
//       console.error('Произошла ошибка:', error.message);
//     });
// }
// getComments('doloremque illum aliquid sunt');

async function getComments(title) {
  let urlPosts = `https://jsonplaceholder.typicode.com/posts?title=${title}`;
  let resPosts = await fetch(urlPosts);
  let dataPosts = await resPosts.json();
  if (dataPosts.length == 0) {
    console.log('No such post!');
  } else {
    let urlComments = `https://jsonplaceholder.typicode.com/comments?postId=${dataPosts[0].id}`;
    let resComments = await fetch(urlComments);
    let dataComments = await resComments.json();
    console.log(dataComments);
  }
}
// getComments('et ea vero quia laudantium autem');

// =----------------------------------------------------------

//3.  Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм пользователя (/users) и выводит все его фотографии (/photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

function getPhotoByNickName(nickname) {
  let urlUser = `https://jsonplaceholder.typicode.com/users?username=${nickname}`;
  fetch(urlUser)
    .then((response) => response.json())
    .then((data) => {
      return new Promise((resolve, reject) => {
        let urlPhotos = `https://jsonplaceholder.typicode.com/photos?albumId=${data[0].url}`;
        fetch(urlPhotos)
          .then((responce) => responce.json())
          .then((data) => {
            resolve(data);
            console.log(data);
          });
      });
    });
}
getPhotoByNickName('Karianne');
// getPhotoByNickName('Karianne').then((res) => console.log(res));

// function getPhotoByNickName(username) {
//   let urlUser = `https://jsonplaceholder.typicode.com/users?username=${username}`;

//   // Запрос информации о пользователе
//   fetch(urlUser)
//     .then((response) => response.json())
//     .then((userData) => {
//       if (userData.length === 0) {
//         console.log('Пользователь не найден');
//         return;
//       }

//       let userId = userData[0].id;
//       let urlPhotos = `https://jsonplaceholder.typicode.com/photos?userId=${userId}`;

//       // Запрос фотографий пользователя
//       fetch(urlPhotos)
//         .then((photoResponse) => photoResponse.json())
//         .then((photoData) => {
//           console.log('Фотографии пользователя:');
//           console.log(photoData.slice(0, 50)); // Выводим только первые 50 фотографий
//         })
//         .catch((error) => {
//           console.error('Ошибка при получении фотографий:', error);
//         });
//     })
//     .catch((error) => {
//       console.error('Ошибка при получении информации о пользователе:', error);
//     });
// }

// getPhotoByNickName('Karianne');
// getPhotoByNickName('Karianne').then((res) => console.log(res));
