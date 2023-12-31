// конструкция Async await

// 1) Cинтаксический сахар, который позволяет немного удобнее работать с асихнронным кодом
// 2) Применяется строго к функциям. Перед функцией должен указываться оператор async
// 3) Xтобы сохранить результат работы промиса, после присвоения (перед примисом) необходимо указать оператор await
// 4) Код внутри функции будет дожидаться выполнения каждого await

// async function getUser(){
//     let url = 'http://158.160.60.4dw9:3050/users'
//     try {
//         let res = await fetch(url)
//         let data = await res.json()
//         console.log(data)
//     } catch {
//         console.log('зафиксирована ошибка!')
//     }
//     console.log(123)
// }

// getUser()

// // Аналог используя методы then()
// function getUsers(){
//     fetch(`${root_url}/users`)
//         .then(res => res.json())
//         .then(data => render(data))
// }

// --------------------------------
// ДЗ
// Перепешите все fetch функции, использия async await.....

// ---------------------------------------
// Обработчик ошибок (try catch)

// Пример, когда на 44 строчки кода сформирована ошибка и выполнение далее скрипта прекращается
// console.log('test!')

// let b = a + 10

// console.log('Done!')

// -------------------
// Пример обработки ошибки
// Блок try ссылается на код, который может быть выполнен с ошибкой
// Если блок try зафксирует ошибку, тогда выполнится тело блока catch
// И далее выполнение скрипта продолжится

// console.log('test!')

// try {
//     let b = a + 10
//     console.log(b)
// } catch{
//     console.log('зафиксирована ошибка!')
// }

// console.log('Done!')
