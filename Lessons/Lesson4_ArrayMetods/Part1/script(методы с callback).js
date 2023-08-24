// Методы с колбеком

// filter()
// метод фильтрует массив по указанному в колбеке условию
// возвроащает новый массив

// let array = [1,2,3,4,5,6,7,8,9]

// Отфультруйте массив таким образом, чтобы в новом массиве были элементы больше 5
// let result = array.filter((elem) => elem > 5 )           [ 6, 7 ]

// Отфультруйте массив таким образом, чтобы в новом масиве остались только четные элементы
// let result = array.filter((elem) =>  elem % 2 === 0)    [ 1, 3, 5, 7 ]

// Отфультруйте массив таким образом, чтобы в новом масиве остались только элементы, у которых вычисляется квадратный корень
// let result = array.filter((elem) =>  (elem ** 0.5) % 1 === 0)                [1, 4, 9]
// let result = array.filter((elem) =>  Number.isInteger(Math.sqrt(elem)))      [1, 4, 9]

// console.log(result);

// ------------------
// isInteger вычисляет целое ли число. возвращая буелвый тип
// console.log(Number.isInteger(1))             true
// console.log(Number.isInteger(6))             true
// console.log(Number.isInteger(8))             true

// console.log(Number.isInteger(8.3))           false
// console.log(Number.isInteger(100.0005))      false
// console.log(Number.isInteger(1.5))           false

// ---------------------------------------
let goods = ['Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка'];

// Отфильтруйте массив, оставив только товары, которые начинаются на букву 'В'

// let result = goods.filter(elem => elem[0] === 'В')
// let result = goods.filter(elem => elem.startsWith('В'))
// let result = goods.filter(elem => elem.charAt(0) === 'В')

console.log(result);
