// ДЗ
// 1. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа
const evenNum = (arr) => {
  let newArr = arr.filter((elem) => elem % 2 == 0);
  return newArr;
};

// -------------------------------------
// 2. *Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые начинаются с буквы A.
const startA = (arr) => {
  let newArr = arr.filter(
    (elem) => elem.startsWith('A') || elem.startsWith('a')
  );
  return newArr;
};
console.log(startA(['sdfsd', 'Aert', 'ognb', 'Aorng', 'Arv', 'art']));

// ----------------------------------------------
// 3. Создайте функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа
const positiveNumbers = (arr) => {
  let newArr = arr.filter((elem) => elem > 0);
  return newArr;
};

// -----------------------------------------------
// 4. *Напишите функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы
const uniqueEl = (arr) => {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!new_arr.includes(arr[i])) {
      new_arr.push(arr[i]);
    }
  }
  return new_arr;
};
console.log(uniqueEl([1, 3, 4, 5, 6, 2, 434, 1, 2, 3, 4, 5]));
