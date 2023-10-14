function fibonacciIterative(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let fibPrev = 0;
  let fibCurr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = fibPrev + fibCurr;
    fibPrev = fibCurr;
    fibCurr = temp;
  }
  return fibCurr;
}
// -------------------
function fibonacciRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
// ----------------------

function countFibonacciIterations(n) {
  let recursiveCalls = 0;
  let iterativeIterations = 0;

  function fibonacciRecursiveWithCount(n) {
    recursiveCalls++;
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return (
      fibonacciRecursiveWithCount(n - 1) + fibonacciRecursiveWithCount(n - 2)
    );
  }

  for (let i = 0; i <= n; i++) {
    fibonacciIterative(i);
    iterativeIterations++;
  }

  for (let i = 0; i <= n; i++) {
    fibonacciRecursiveWithCount(i);
  }

  return { recursiveCalls, iterativeIterations };
}
const n = 30;
const { recursiveCalls, iterativeIterations } = countFibonacciIterations(n);
console.log(`Первые ${n} чисел Фибоначчи:`);
console.log(`Рекурсия: ${recursiveCalls} вызовов`);
console.log(`Итерации: ${iterativeIterations}`);

// Первые 10 чисел Фибоначчи:

// Рекурсия: 109 вызовов
// Итерации: 11
// Первые 20 чисел Фибоначчи:

// Рекурсия: 21891 вызовов
// Итерации: 21
// Первые 30 чисел Фибоначчи:

// Рекурсия: 3524578 вызовов
// Итерации: 31

// Для больших n рекурсия не выгодна. Итеративный метод более выгоден.
