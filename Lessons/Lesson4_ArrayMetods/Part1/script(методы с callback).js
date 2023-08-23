let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = a.filter((elem) => elem % 2 === 0);
// console.log(res);

// let result = a.filter((elem) => (elem ** 0.5) % 1 === 0);!!!
// let result = a.filter((elem) => Number.isInteger(Math.sqrt(elem)));
// console.log(result);

let goods = ['Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка'];
let res = goods.filter((el) => el[0] === 'В');
console.log(res);
