let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));

// ----------------------
function func(n1, n2, n3, n4, n5, n6, n7, n8) {
  return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}
console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));

// -------------------

let arr1 = [1, 2, 3, 4, 5];
let min = Math.min(...arr1);
console.log(min);

// ----------------------
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

// -------------------
let arr = ['a', ...'12345'];
console.log(arr);

// ---------------------------
let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, ...'12345'];
console.log(arr2);

// -=====================Rest-=======================

function unite(...arrs) {
  return arrs;
}
console.log(unite([1, 2, 3], [4, 5, 6], [7, 8, 9]));
let res = [].concat(...unite([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(res);

// -==========================Деструктуризация-=================================

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

console.log(name, surname, department);

// ---------------------------
function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}
let [name, surname, department] = func();
console.log(name);

// -----------------------

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [, , department, position] = arr;
console.log(department);

// ------------------------------
let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, ...info] = arr;
console.log(name, surname, info);

// --------------------------------
let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;
console.log(position);
// ----------------------------

let arr = [];
function func() {
  return new Date().getDate();
}
let d1 = new Date().getMonth();
let d2 = new Date().getFullYear();
let [year = d2, month = d1, day = func()] = arr;
console.log(day, year, ++month);
// -------------------------------

let options = {
  color: 'red',
  width: 400,
  height: 500,
};
let { color: c, width: w, height: h } = options;
console.log(w);

// --------------------------------

let options = {
  width: 400,
  height: 500,
};
let { width, color = 'black', height } = options;
console.log(width, color);

// ----------------------------

function func([name, surname, department, position = 'junior', salary]) {
  console.log(name, surname, position, salary);
}
func(['John', 'Smit', 'development', , 2000]);

// ------------------------------

function func([name, surname, department, position = 'junior']) {
  console.log(name, surname, department, position);
}
func(['John', 'Smit', 'development']);
// ------------------------------------------

function func(department, [name, surname], [year, month, day]) {
  console.log(name, surname, year, month, day);
}
func('development', ['John', 'Smit'], [2018, 12, 31]);

// ----------------------------------

function func({ color, width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}

func({ color: 'red', width: 400, height: 500 });
// -------------------------------

function func({ color = 'black', width, height }) {
  console.log(color, width, height);
}

func({ color: 'red', width: 400, height: 500 });
