// --------------------linear---------------------
// const array = [1, 2, 4, 2, 7, 4, 2, 8, 3, 11, 5];
// let count = 0;
// function linearsearch(array, item) {
//   for (let i = 0; i < array.length; i++) {
//     count += 1;
//     if (array[i] === item) {
//       return i;
//     }
//   }
//   return null;
// }
// console.log(linearsearch(array, 7));
// console.log('count = ' + count);

// =-------------------binary_search-----------------
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let count = 0;
// function binarySearch(array, item) {
//   let start = 0;
//   let end = array.length;
//   let middle;
//   let found = false;
//   let position = -1;
//   while (found == false && start <= end) {
//     count += 1;
//     middle = Math.floor((start + end) / 2);
//     if (array[middle] === item) {
//       found = true;
//       position = middle;
//       return position;
//     }
//     if (item < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return position;
// }
// console.log(binarySearch(array, 14));
// console.log(count);

// ---------------------------selection sort------------------------------

const arr = [5, 3, 2, 6, 4, 8, -9, 4, 6, 5, 7, 2, 2, 1, 4];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}
console.log(selectionSort(arr));
console.log(count);
console.log(arr.length);
