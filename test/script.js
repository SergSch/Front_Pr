// 'use strict';
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log('Hello! ' + this.name);
//   };
// }
// let ivan = new User('Ivan', 23);
// console.log(ivan);
// ivan.hello();

// function sayName(surename) {
//   console.log(this);
//   console.log(this.name + ' ' + surename);
// }
// const user = {
//   name: 'Ann',
// };
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Dee']);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  this.style.backgroundColor = 'red';
  // console.log(this);
});

const obj = {
  num: 5,
  sayNum: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};
obj.sayNum();

function camelize(str) {
  return str
    .split('-')
    .map((elem, i) => (i == 0 ? elem : elem[0].toUpperCase() + elem.slice(1)))
    .join('');
}
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

function groupById(arr) {
  return arr.reduce((acc, elem) => {
    acc[elem.id] = elem;
    return acc;
  }, {});
}

let usersById = groupById(users);
console.log(usersById);

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((elem) => elem.amount > 0)
    .reduce((acc, elem) => acc + elem.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  let arr = data.map((elem) => Object.values(elem));
  let sum = 0;
  if (arr.some((elem) => elem[0] < 0)) {
    sum = arr.reduce((acc, elem) => {
      return acc + elem[0];
    }, 0);
  } else {
  }
  return sum;
};
console.log(getTotalIncomeAmount(funds));
