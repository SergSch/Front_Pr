// Array methods

// .forEach(el => {}) - выполняет переданную функцию для каждого элемента массива, ничего не возращает
// .map(el => {}) - выполняет переданную функцию для каждого элемента массива, возвращает новый массив длина которого равна исходному массиву

// .filter(el => {}) - возвращает новый массив, в который попадут только ВСЕ те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию

// .find(el => {}) - возвращает ОДИН элемент (первый), который отвечают переданному в callback-функцию условию

// .reduce()
// .sort()

// ===============REDUCE-====================

const numbers = [22, 3, 5, 11, 10];
const numberSum = numbers.reduce((acc, elem) => acc + elem);
console.log(numberSum);

// ===============SORT===========================

const names = ['Anna', 'Pavel', 'Irina', 'Al'];
console.log(names.sort((a, b) => a.localeCompare(b)));

// 2. Создать копию массива numbers

const numbers_copy = [...numbers];
const numbers_copy1 = numbers.slice();
const numbers_copy2 = numbers.map((el) => el);

console.log(numbers);
console.log(numbers_copy);
console.log(numbers_copy1);
console.log(numbers_copy2);

const user = {
  id: 1,
  first_name: 'Oleg',
  last_name: 'Ivanov',
  age: 25,
  online: false,
  address: {
    city: 'Berlin',
    country: 'Germany',
    postcode: 10034,
  },
  friends: ['Irina', 'Anna', 'Petr'],
};

console.log(user.first_name); // 'Oleg'
console.log(user.age); // 25
console.log(user.address); // {}
console.log(user.address.city); // 'Berlin'
console.log(user.address.postcode); // 10034
// ---------------------

const users = [
  {
    id: 1,
    first_name: 'Oleg',
    last_name: 'Ivanov',
    age: 25,
  },
  {
    id: 2,
    first_name: 'Anna',
    last_name: 'Petrova',
    age: 15,
  },
  {
    id: 3,
    first_name: 'Irina',
    last_name: 'Sidorova',
    age: 35,
  },
  {
    id: 4,
    first_name: 'Igor',
    last_name: 'Ushanov',
    age: 57,
  },
];
let a = users.map((elem) => ({
  Name: `${elem.first_name} ${elem.last_name}, Age: ${elem.age}`,
}));
console.log(a);
// 8. Сформировать новый массив, в который попадут пользователи чье имя начинается на букву I / i
// [{}, {}]
let q = users.filter(
  (elem) => elem.first_name[0] == 'i' || elem.first_name[0] == 'I'
);
console.log(q);

// 9. Создать новый массив users_sorted, в который попадут все элементы из массива users, отсортированные по возрасту в порядке возрастания

const users_sorted = users.slice().sort((a, b) => a.age - b.age);

let newObj = [...users].sort((a, b) => a.age - b.age);
console.log(newObj);

// ДЗ
// 1. Сформировать массив из пользователей, чья фамилия содержит букву S (любой регистр) => [{}, {}]
const users = [
  {
    id: 1,
    first_name: 'Oleg',
    last_name: 'Ivanov',
    age: 25,
  },
  {
    id: 2,
    first_name: 'Anna',
    last_name: 'Petrova',
    age: 15,
  },
  {
    id: 3,
    first_name: 'Irina',
    last_name: 'Sidorova',
    age: 35,
  },
  {
    id: 4,
    first_name: 'Igor',
    last_name: 'Ushanov',
    age: 57,
  },
];
let w = [...users].filter((elem) => elem.last_name.toLowerCase().includes('s'));
console.log(w);

// 2. Сформировать массив из возрастов всех пользователей => [25, 15, 35, 57]
let e = [...users].map((elem) => elem.age);
console.log(e);

// 3. Сформировать массив из возрастов всех пользователей, отсортированными по возрасту в порядке убывания => [57, 35, 25, 15]
let r = users
  .slice()
  .map((elem) => elem.age)
  .sort((a, b) => b - a);
console.log(r);

// 4. Сформировать массив из имен и фамилий пользователей => ['Oleg Ivanov', 'Anna Petrova', '...', '...']
let s = users.slice().map((elem) => elem.last_name + ' ' + elem.first_name);
console.log(s);

// 5. Найти сумму возрастов всех пользователей, записать ее в переменную age_sum

let age_sum = users.slice().reduce((acc, elem) => acc + elem.age, 0);
console.log(age_sum);
