function findKthElement(arr1, arr2, k) {
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
    if (i + j === k) {
      return Math.min(arr1[i], arr2[j]);
    }
  }

  while (i < arr1.length) {
    i++;
    if (i + j === k) {
      return arr1[i - 1];
    }
  }

  while (j < arr2.length) {
    j++;
    if (i + j === k) {
      return arr2[j - 1];
    }
  }

  return -1;
}

const array1 = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];
const k = 6;

const result = findKthElement(array1, array2, k);
console.log(result);
