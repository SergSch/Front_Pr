// Механизм работы хранилища (localStorage)

// Методы объекта localStorage

// localStorage.setItem(key, data) -    запись данных под ключем key
// localStorage.getItem(key)       -    получить данные по ключу. Метод возвращает полученные данные
// localStorage.clear()            -    очищает полнсотью все записи в LS
// localStorage.removeItem(key)    -    очищает LS только для укаанного ключа

// // Запись строки по ключу string
// localStorage.setItem('string1', 'Hello world!')

// // Чтение данных по ключу string
// let answer = localStorage.getItem('string')
// console.log(answer);

// ----------------
// Задание 1
// Создайте кнопку, которая переключает значение localStorage из 1 в 0 и обратно.

const btn = document.querySelector('.btn_elem1');
btn.onclick = () => {
  if (localStorage.getItem('binary') != 1) {
    localStorage.setItem('binary', 1);
  } else {
    localStorage.setItem('binary', 0);
  }
};
// --------------------------------------------------------------------

// Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.

// К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.

// Добавить кнопку, которая очищает localStorage. (только ключ input)

const inp = document.querySelector('.inp_el1');
const set = document.querySelector('.set');
const get = document.querySelector('.get');
const rem = document.querySelector('.remove');
set.addEventListener('click', () => {
  localStorage.setItem('key', inp.value);
  inp.value = '';
});
get.addEventListener('click', () => {
  inp.value = localStorage.getItem('key');
});
rem.addEventListener('click', () => {
  inp.value = '';
  localStorage.removeItem('key');
});

// --------------------------------------------------------------------
const body = document.body;
const theme_btn = document.querySelector('.theme_btn');
body.className = localStorage.getItem('theme') ?? 'light';

theme_btn.addEventListener('click', () => {
  body.className = body.className === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', body.className !== 'dark' ? 'light' : 'dark');
});
