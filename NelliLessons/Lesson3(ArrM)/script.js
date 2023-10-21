// .filter(el => {}) - возвращает новый массив, в который попадут только те эелементы из исходного массива, которые отвечают переданному в callback-функцию условию

// 1. Напишите функцию getEvenNums(), которая принимает массив с числами и возвращает новый массив с четными числами из переданного массива

const getEvenNums = (arr) => {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};

const getEvenNums1 = (arr) => {
  let newArr = [];
  arr.forEach((elem) => (elem % 2 == 0 ? newArr.push(elem) : ''));
  return newArr;
};
console.log(getEvenNums1([1, 2, 3, 4, 5, 6, 6, 7, 8]));

const getEvenNums2 = (arr) => {
  let newA = arr.filter((elem) => elem % 2 == 0);
  return newA;
};
console.log(getEvenNums2([1, 2, 3, 4, 5, 6, 6, 7, 8]));

// 2. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длинее 5 символов

const getLongStrings = (arr) => {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};

const getLongStrings1 = (arr) => {
  let nA = arr.filter((elem) => elem.length > 5);
  return nA;
};

// 3. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длинее 5 символов и содержащими букву 'e'/'E'

// 3. Напишите функцию getLongStrings(), которая будет принимать массив со строками и возвращать новый массив только со строками длиннее 5 символов и содержащими букву 'e'/'E'

const getLongStrings2 = (arr) =>
  arr.filter((el) => el.length > 5 && (el.includes('e') || el.includes('E')));

console.log(
  getLongStrings2(['hello', 'hi', 'good morning', 'good evening', 'hEllo!'])
); // ['good evening', 'hEllo!']

// 4. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами

const getNumbers = (arr) => {
  let na = arr.filter((elem) => typeof elem == 'number');
};

console.log(getNumbers([true, 3, 'hello', 98, 150, undefined])); // [3, 98, 150]

// 5. Напишите функцию, которая принимает массив с разными типами данных и возвращает новый массив только с числами больше 50

const getNumbers1 = (arr) => arr.filter((el) => el > 50);

console.log(getNumbers1([true, 3, 'hello', 98, 150, undefined])); // [98, 150]

const changesNum = (arr) => {
  let na = arr.filter((elem) => elem > 0).map((elem) => elem * 2);
  return na;
};
console.log(changesNum());
