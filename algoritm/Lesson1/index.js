// Описать блок-схему и написать функцию с тестами к ней, которая вычисляет среднее арифметическое всех чисел /*преданных в качестве аргумента.*/
// average([1,2,3,4,5]) -> 3
// Блок-схему
// Написать функцию
// Протестировать её

function average(arr) {
  const count = arr.length;
  if (count == 0) return -1;
  let averDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    averDigit += arr[i];
  }
  let res = averDigit / count;
  return res;
}

console.log(average([1, 2, 3, 4, 5]) == 3);
console.log(average([]) == -1);
console.log(average([6, 7, 8]) == 7);
console.log(average([10, 11, 12]) == 11);
console.log(average([-3, -4, -5]) == -4);
