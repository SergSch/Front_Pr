function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const punkt = arr[Math.floor(arr.length / 2)];

  const left = [];
  const right = [];
  const equal = [];

  for (let element of arr) {
    if (element < punkt) {
      left.push(element);
    } else if (element > punkt) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }

  return quickSort(left).concat(equal, quickSort(right));
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
