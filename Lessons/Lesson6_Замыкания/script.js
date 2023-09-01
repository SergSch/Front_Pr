// function handler(arg) {
//   let str = arg;
//   return function() {
//     console.log(str);
//   }
// }
// let func = handler('test');
// func();

// -----------------------------------------------------------------------------
// function createUrl(zone) {
//   return function (domen) {
//     console.log(`https://${domen}.${zone}`);
//   };
// }
// let urlCom = createUrl('com');
// let netUrl = createUrl('net');
// netUrl('example');
// urlCom('google');

// -------------------------------------------------------------------
// Напишите функцию power, которая будет
// возращать функцию с математическим вычислением
// power(n) должен в качестве аргумента указывать степень возвоедения,
// а анонимная функция должна получить число,
// которое необходимо возвести в n степень
// let math1 = power(2)
// console.log(math1(5))    => 25
// let math2 = power(3)
// console.log(math1(2))    => 8
// function power(val) {
//   return function (val1) {
//     return val1 ** val;
//   };
// }
// let double = power(2);
// console.log(double(5));
// let squared = power(3);
// console.log(squared(2));

// -------------------------------------------------------------------------------------
// Напишите функцию createPassword(pass), которая в качестве аргумента будет получать значение нового пароля
// Функция должна вернуть функцию, которая будет проверять, совпадет ли аргумент pass с тем аргмуентом.
// который будет указан в возвращаемой функции. Если пароль совпадает - возвращаемая функция должна вывести
// в консоль true, в противном случае false
// let user1 = createPass('tigran')
// user1('tigran') => true
// user1('tigr')   => false
// function createPass(pass) {
//     return function(arg) {
//         console.log(pass === arg);
//     }
// }
// let user1 = createPass('serg');
// user1('serg');
// let user2 = createPass('noname');
// user2('noname')
