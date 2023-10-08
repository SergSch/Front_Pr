function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(13));

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const n = 3;
const result = fibonacci(n);
console.log(`Число Фибоначчи для n = ${n} равно ${result}`);

let fRec = 0;
let fIte = 0;

const fibonacciRecursion = (n) => {
  fRec++;
  return n === 0 || n === 1
    ? 1
    : fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
};

const fibonacciIteration = (n) => {
  fIte++;
  let result = 1;
  let f0 = 1;
  let f1 = 1;
  for (let i = 2; i <= n; i++) {
    result = f0 + f1;

    f0 = f1;
    f1 = result;
    fIte++;
  }
  return result;
};

// 1.Числами Фибоначчи- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711
