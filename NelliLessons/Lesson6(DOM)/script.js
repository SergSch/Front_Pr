const people = [
  {
    id: 1,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    city: 'Moscow',
    country: 'Russia',
  },
  {
    id: 2,
    first_name: 'Petr',
    last_name: 'Petrov',
    age: 12,
    city: 'Berlin',
    country: 'Germany',
  },
  {
    id: 3,
    first_name: 'irina',
    last_name: 'Alexandrova',
    age: 46,
    city: 'Paris',
    country: 'France',
  },
  {
    id: 4,
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 30,
    city: 'Rome',
    country: 'Italy',
  },
];
// 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

// let newarr = people.map(
//   (elem) =>
//     `${elem.first_name} ${elem.last_name} (${elem.city} ${elem.country})`
// );
// console.log(newarr);
// ----------------------

// 2. Сформируйте массив из людей, чьи имена начинаются на 'I' (регистр буквы может быть и нижним) => [{}, {}]
// let newArr1 = people.filter((elem) => elem.first_name[0].toLowerCase() == 'i');

// const i_people2 = people.filter((el) =>
//   el.first_name[0].toLowerCase().startsWith('i')
// );
// console.log(newArr1);
// --------------------------------------

// 3. Сформируйте массив строк из совершеннолетних пользователей - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]
// let newarr = people
//   .filter((elem) => elem.age > 18)
//   .map(
//     (elem) =>
//       `${elem.first_name} ${elem.last_name} (${elem.city} ${elem.country})`
//   );
// console.log(newarr);

// ---============================================
const first_par = document.querySelector('.first_par');
first_par.style.color = 'red';

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  first_par.style.background = 'lightpink';
});

// 6. Создать кнопку и параграф. При клике на кнопку менять цвет заднего фона параграфа. Если длина парграфа >= 30 символов, то цвет заднего фона должен быть светло-зеленый. Если меньше, то светло-желтый.
// При клике на кнопку также меняется размер шрифта на 32px

changeBackBtn.addEventListener('click', () => {
  if (secondPar.innerText.length >= 30) {
    secondPar.style.backgroundColor = 'lightgreen';
    secondPar.style.fontSize = 32 + 'px';
  } else {
    secondPar.style.backgroundColor = 'lightyellow';
  }
});

changeBackBtn.addEventListener('click', () => {
  secondPar.style.backgroundColor =
    secondPar.innerText.length >= 30 ? 'lightgreen' : 'lightyellow';
});

// 6. Создать кнопку и параграф. При клике на кнопку менять цвет заднего фона параграфа. Если длина параграфа >= 30 символов, то цвет заднего фона должен быть светло-зеленый. Если меньше, то светло-желтый.
