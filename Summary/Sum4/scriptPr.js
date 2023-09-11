const users = [
  {
    id: 1,
    first_name: 'Olga',
    last_name: 'Petrova',
    age: 30,
    score: 44.52,
  },
  {
    id: 2,
    first_name: 'Kirill',
    last_name: 'Shmanov',
    age: 13,
    score: 144.33,
  },
  {
    id: 3,
    first_name: 'Petr',
    last_name: 'Ivanov',
    age: 54,
    score: 10.08,
  },
  {
    id: 4,
    first_name: 'Irina',
    last_name: 'Sokolova',
    age: 29,
    score: 78.94,
  },
  {
    id: 5,
    first_name: 'Boris',
    last_name: 'Pechkin',
    age: 24,
    score: 18.25,
  },
];
// --------------------------------------------------------------------
// 1. Вывести в консоль первого и последнего пользователей в списке
// console.log(users[0]);
// console.log(users[users.length - 1]);

// -----------------------------------------------------------------------
// 2. Вывести в консоль имена первого и последнего пользователя в списке
// console.log(users[0].first_name);
// console.log(users[users.length - 1].first_name);

// -----------------------------------------------------------------------
// 3. Вывести в консоль каждый эелемент массива
// const eachEl = users.forEach((el) => console.log(el));

// ------------------------------------------------------------------------------
// 4. Вывести в консоль для каждого пользователя сообщение в формате: Имя Фамилия: возраст
// users.forEach((el) => {
//   console.log(
//     `Name is ${el.first_name}, surename is ${el.last_name} and age is ${el.age}`
//   );
// });

// ---------------------------------------------------------------------------
// 5. Получить из каждого объекта имя и фамилию пользователя и сформировать из этих имен новый массив
// const newArr = users.map((el) => el.first_name + ' ' + el.last_name);
// console.log(newArr);

// ----------------------------------------------------------------------------
// 6. Получить из массива пользователя с именем Kirill и записать его в отдельную переменную. Вывести переменную в консоль
// let usKir = users.find((el) => el.first_name == 'Kirill');
// let usKir1 = users.find((el) => el.first_name == 'Kirill').first_name;
// console.log(usKir);
// console.log(usKir1);

// ---------------------------------------------------------------------------
// 8. Сформировать новый массив совершеннолетних пользователей
// const newArrUsers = users.filter((el) => el.age > 18);
// console.log(newArrUsers);

// -----------------------------------------------------------------------
// 9. Сформировать новый массив строк, куда попадет информация о совершеннолетних пользователях в формате Имя Фамилия: возраст
// => ['Olga Petrova: 30', 'Petr Ivanov: 54', 'Irina Sokolova: 29', 'Boris Pechkin: 24']

const newArrUs = users
  .filter((el) => el.age >= 18)
  .map((el) => `${el.first_name} ${el.last_name}: ${el.age}`);
console.log(newArrUs);
