// https://habr.com/ru/articles/439746/

// Введение в асинхронный код
// Асинхронный код - это код (или скрипт) на выполнение которого требуется n-время

// Функция setTimeout() - функция, которая формирует задержку в указаннов колбек-функции

// -----------------------------
// Пример (1) работы скрипта учитывая асинхронную конструкцию

// setTimeout(() => {
//     console.log(1)
// }, 1)

// console.log(2)

// console.log(3)

// -------------
// Порядок выполнения логов:
// 2
// 3
// 1

// Во время выполнения скрипта, синхронная часть кода НЕ БУДЕТ дожидаться, пока
// будет идти выполнение асихнронной части

// --------------------------------
// Пример 2
// Логи в консоль происходят в произвольном порядке

// setTimeout(() => {
//     console.log('1 блок кода')
// }, Math.random() * 200)

// setTimeout(() => {
//     console.log('2 блок кода')
// }, Math.random() * 200)

// --------------------------
// Решение проблемы - вложенность (не верный подход)

// setTimeout(() => {
//     console.log('1 блок кода')
//     let a = [1,2,3]

//     setTimeout(() => {
//         console.log('2 блок кода', a)
//     }, Math.random() * 200)

// }, Math.random() * 200)

// ----------------------------------------------------------
// Promise
// Promise - это объект, который является обверткой для удобной работы с асихнронным кодом

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('1 блок кода')
//         let a = [1,2,3]
//         // resolve(a)
//         reject('error!')
//     }, Math.random() * 200)
// })

// ----------------
// Метод then дожидается пока promise увидит выполнение функции resolve и только потом начнем выпонление указанного колбека
// То, что мы получаем в колбеке метода then в качестве аргумента - это содержимое указанного параметра функции resolve

// promise.then((a) => {
//     a.push(4)
//     console.log(2, a)
// })

// ------------------
// Метод catch делает тоже самое, что и then, только дожидается уже выполнения функции reject в промисе

// promise.catch((error) => {
//     console.log(error)
// })

// ------------------
// Метод finally выполнит свой код в любом случае (когда промис полуает resolve или reject)

// promise
//     .then((a) => {
//         a.push(4)
//         console.log(2, a)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('finally!')
//     })

// ------------------------------------------

let getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = [1, 2, 3, 4];
    console.log('1 блок кода', a);
    resolve(a);
  }, Math.random() * 200);
});

getData
  .then((a) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        a.push(4);
        console.log('2 блок кода');
        resolve(a);
      }, Math.random() * 200);
    });
  })
  .then((data) => {
    console.log(data);
  });

// --------------------------------------------------
// Метод Promise.all() дожидается пока выполнятся все промисы указанные в качестве аргумента
// и сколлекционирует все результаты работы в один метод then()
// Если хотябы 1 промис перейдет в reject, тогда Promise.all тоже атвоматически станет reject
// Если then получает в качестве аргумента массив со всеми resolve в виде массива
// Тогда как сatch получает первый reject, который был определен в цепочке промисов

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('1 блок')
//     }, Math.random() * 200)
// })

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('2 блок')
//     }, Math.random() * 200)
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('3 блок')
//         // reject('3 блок')
//     }, 3000)
// })

// Promise.all([promise1, promise2, promise3])
//     .then((a) => console.log(a))
//     // [ '1 блок', '2 блок', '3 блок' ]
//     .catch((a) => console.log(a))
//     // 3 блок
