// Задача
// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// Отфильтруйте массив таким образом, оставив толко элементы длина которых будет более 6 символов
// let result = goods.filter( elem => elem.length > 6)

// ------------------------------------
// Получение индекса в методах массива
// Получаемые аргументы колбека у методов массива

// 1) Значение элементов массива
// 2) Индекс элементов массива
// 3) Целый исходный массив

// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// let result = goods.filter( (elem, ind) => ind > 2 || elem[0] == 'В')
// console.log(result);

// Пример получения 3 аргмуентов используя log()
// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// let result = goods.filter( (elem,index,array) => console.log(elem,index,array))

// Велосипед 0 [ 'Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка' ]
// Телевизор 1 [ 'Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка' ]
// Яблока 2 [ 'Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка' ]
// Вишня 3 [ 'Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка' ]
// Груша 4 [ 'Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка' ]
// Ручка 5 [ 'Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка' ]

// --------
// Задача
// Отфильтруйте массив таким образом, чтобы остались элементы с четным индексом
// let result = goods.filter( (elem,index) => index % 2 === 0)
// console.log(result)

// -----------------------------------
// Метод find()
// Метод осуществляет поиск элемента в массиве по условию
// Возвращает первый найденный элемент массива
// В случае, если метод не найдет элемент - он вернет undefined

// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// let result = goods.find((elem, ind) => ind === 4);
// let result = goods.find((elem, ind) => elem[0] === 'Т');
// console.log(result);

// -----------------------------------
// Метод findIndex()
// Делает все тоже самое, что и index(), но вместо значения возвращает индекс первого найденного элемента
// В случае, если метод не найдет индекс - он вернет -1

// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// let result = goods.findIndex((elem) => elem[0] === 'Ж')
// console.log(result);

// -------------------------------
// Задача
// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Neena', salary: 2000},
//     {id: 3, name: 'Willyam', salary: 3000},
//     {id: 4, name: 'John', salary: 4000},
//     {id: 5, name: 'Steven', salary: 4400},
//     {id: 6, name: 'Gendalf', salary: 200},
// ]

// Найти элемент, значения id которого будет больше 4
// Отфильтруйте массив таким образом, получив пользователей с зарплатой от 3000 до 4500 включительно

// let task1 = users.find(elem => elem.id > 4)
// let task2 = users.filter(elem => elem.salary >= 3000 && elem.salary <= 4500)

// console.log(task1);
// console.log(task2);

// ---------------------------------------
// Метод map()
// Метод переопределяет значения элементов массива по указанному в колбеке значению
// Метод возвращает новый массив

// let array = [1,2,3,4,5]

// let result = array.map(elem => elem ** 2)
// [ 1, 4, 9, 16, 25 ]

// let result = array.map(elem => elem + 100)
// [ 101, 102, 103, 104, 105 ]

// let result = array.map(elem => elem + ' value')
// [ '1 value', '2 value', '3 value', '4 value', '5 value' ]

// let result = array.map((elem,ind )=> [elem, ind])
// let array = [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]

// let result = array.map((elem )=> elem > 3)
// console.log(result);

// ---------------------------------
// Задача
// let prices = [200,500,1000,150,780,2000]

// В магазине объявлена распродажа. Стоимость всех товаров упала на 20%
// Сформируйте массив с новыми ценами с учетом указанной скидки

// let result = prices.map(elem => elem * 0.8)
// console.log(result);

// ----------------------------------
// Задача

// let users = [
//     {first_name: 'Alex', last_name: 'Wilyam', second_name: 'Agreos'},
//     {first_name: 'Steven', last_name: 'Negroni', second_name: 'Prostif'},
//     {first_name: 'Neena', last_name: 'Jeneffer', second_name: 'Greatiros'},
//     {first_name: 'John', last_name: 'Lemas', second_name: 'Klement'},
// ]

// Создайте новый массив который будет хранить инициалы пользователей по следующему примеру:
// 'W. A. Agreos'

// let result = users.map(elem => `${elem.last_name[0]}. ${elem.first_name[0]}. ${elem.second_name}`)
// console.log(result);

// ----------------------------------
// Метод sort()
// Метод сортирует элементы массива
// Метод мутирует исходный массив
// Метод возвращает ссылку на старый массив

// В случае, если мы сортируемся по строковым типам внутри массива - колбек использовать не обязательно
// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]
// goods.sort()
// console.log(goods);
// [ 'Велосипед', 'Вишня', 'Груша', 'Ручка', 'Телевизор', 'Яблока' ]

// --------------
// let prices = [5, 6, 4, 7, 8, 3, 9, 10, 1, 2];

// Решение проблемы с числовыми типами
// Метод sort в колбеке должен получить код операции
// 1
// -1
// 0
// По этим командам сорт понимает как необходимо переставить элементы

// Полная запись
// prices.sort((crElem, nxElem)=> {
//     if(crElem > nxElem) return 1
//     if(crElem < nxElem) return -1
//     if (crElem === nxElem) return 0
// })

// Более короткая форма записи (по возрастанию)
// prices.sort((crElem, nxElem)=> crElem - nxElem)

// Сортировка по убыванию
// prices.sort((crElem, nxElem)=> nxElem - crElem)

// console.log(prices);

// -------------------
// Задача
// Отсортуйте массив users по атрибуту salary

// let users = [
//     {id: 1, name: 'Alex', salary: 1000},
//     {id: 2, name: 'Neena', salary: 2000},
//     {id: 3, name: 'Willyam', salary: 3000},
//     {id: 4, name: 'John', salary: 4000},
//     {id: 5, name: 'Steven', salary: 4400},
//     {id: 6, name: 'Gendalf', salary: 200},
// ]

// users.sort((crElem, nxElem) => crElem.salary - nxElem.salary)
// console.log(users);

// Cортировка по name
// users.sort((a,b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     if (a.name === b.name) return 0
// })

// console.log(users);

// -------------------------
// JS сравнивает не символы, а их unicode
// A    a
// 67   95
// console.log('a' > 'A');
// console.log(95 > 67);

// Метод определяющий unicode символа
// console.log('A'.charCodeAt());
// // Латиница 65
// console.log('А'.charCodeAt());
// // Кириллица 1040
