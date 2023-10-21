// ДЗ
// 1. Создайте пустой массив numbers. Добавьте в него числа от 1 до 5 с использованием цикла и метода push.

const numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log(numbers);

// 2. Создайте массив evenNumbers и с использованием цикла метода push добавьте в него все четные числа от 2 до 10.

const evenNumbers = [];
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);

// 3. Создайте пустой массив squares. Заполните его квадратами чисел от 1 до 5 с использованием метода push.

const squares = [];
for (let i = 1; i < 6; i++) {
  squares.push(i ** 2);
}
console.log(squares);

// 4. Создайте массив randomNumbers и добавьте в него 10 случайных чисел от 1 до 100 с использованием цикла и метода push.

const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.round(Math.random() * (100 - 1) + 1));
}
console.log(randomNumbers);

// 5. Создайте массив positiveNumbers и добавьте в него только положительные числа из массива numbers = [1, -2, 3, -4, 5, -6] с использованием цикла и метода push.

const positiveNumbers = [];
let numbers = [1, -2, 3, -4, 5, -6];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveNumbers.push(numbers[i]);
  }
}
console.log(positiveNumbers);

// 6. Создайте пустой массив doubledNumbers. Используя цикл, умножьте каждый элемент из массива numbers на 2 и добавьте результаты в doubledNumbers с использованием метода push.

const doubledNumbers = [];
let numbers = [1, -2, 3, -4, 5, -6];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

// *7. Создайте пустой массив vowels. Используя цикл, найдите и добавьте все гласные буквы из строки "Hello, World!" в массив с использованием метода push. Вам также понадобится использовать метод includes().

const vowels = [];
let str = 'Hello, World!';
let prove = ['a', 'e', 'u', 'o', 'i'];
let prov = 'aeuio';
for (let i = 0; i < str.length; i++) {
  let letter = str[i].toLowerCase();
  if (prov.includes(letter)) {
    vowels.push(str[i]);
  }
}
console.log(vowels);
