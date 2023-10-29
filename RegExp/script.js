let str = 'bab';
console.log(str.replace(/a/, '!'));
// -------

let str = 'xax eee';
console.log(str.replace(/x.x/, '!'));
// ----------

let str = 'aab';
console.log(str.replace(/a/g, '!'));
// --------

let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab+a/g, '!'));
// ---------

let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab*a/g, '!'));
// -----------

let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab?a/g, '!'));
// ---------

let str = 'ab abab abab abababab abea';
console.log(str.replace(/(ab)+/g, '!'));
// ------------

// ----------------Являются спецсимволами: $ ^ . * + ? \ / {} [] () |
// ---------------Не являются спецсимволами: @ : , ' " ; - _ = < > % # ~ `& !

let str = 'a.a aba aea';
console.log(str.replace(/a\.a/g, '!'));
// ------------

let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
console.log(str.replace(/\*q+\++/g, '!'));
// ------------

let str = '[abc] {abc} abc (abc) [abc]';
console.log(str.replace(/\[...\]/g, '!'));

// ==========================
let str = 'aba accca azzza wwwwa';
console.log(str.replace(/a.*?a/g, '1'));
