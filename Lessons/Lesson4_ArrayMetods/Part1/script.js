// Методы массива

// -----------------------
// includes()
// метод проверяет, существует ли элемент в масииве
// возвращает булевый тип

// let a = [1,2,3,4,5,6]

// let result = a.includes(5) true
// let result = a.includes(7) false
// console.log(result)

// -------------------------
// indexOf() и (lastIndexOff())
// метод возвращает индекс указанного элемента массива
// если значения отсутсвует в массиве, метод вернет -1

// let a = [10,20,30,40,50,60,70,80]

// let result = a.indexOf(50)   4
// let result = a.indexOf(90)   -1
// console.log(result)

// -------------------------
// slice(n,m)
// метод формирует новый массив, указав диапазон от n индекса до m индекса (не включительно)

// let a = [10,20,30,40,50,60,70,80]

// let result = a.slice(0,3)    [ 10, 20, 30 ]
// let result = a.slice(4,7)    [ 50, 60, 70 ]
// let result = a.slice(2,5)    [ 30, 40, 50 ]
// let result = a.slice(6)      [ 70, 80 ]

// console.log(result)

// ---------------------------
// Комплекс методов, которые удаляют/добалвюят элементы в начало/конец массива
// Все ниже указанные методы МУТИРУЮТ исходний массив

// push(n)      - добавляет в конец массива указанный n элемент
// pop()        - удаляет последний элемент в массиве
// shift()      - удаляет первый элемент в массиве
// unshift(n)   - добавляет в начало массива указанный n элемент

// Методы pop, shift возвращают удаленный элемент
// Методы push, unshift возвращают новую длину массива

// let a = [10,20,30,40,50]

// Что возвращает метод?
// let result = a.push()

// console.log(a)
// console.log(result)

// ------------------------------------
// splice(a,b,c) - одновременно может удалить и добавить нове элементы в массив
// Метод мутирует исходный массив

// a - индекс начала операции (не только удаления, но и добавления нового элемента)
// b - количество удаляемых элементов
// с - значение нового элемента массива
// аргменты далее - новые элементы

// Новый элемент будет добавлен ДО индекса начала

// let goods = ["Велосипед", "Телевизор", "Яблока", "Вишня","Груша", "Ручка"]

// goods.splice(1,2)                [ 'Велосипед', 'Вишня', 'Груша', 'Ручка' ]
// goods.splice(2,4, 'Ракетка')     [ 'Велосипед', 'Телевизор', 'Ракетка' ]

// console.log(goods)
