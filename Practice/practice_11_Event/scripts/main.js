// Здесь может быть Ваша реклама!
// Но вместо этого мы разместим наш код!

// 1. Ставим обработчик на событие загрузки документа (`DOMContentLoaded`). Нужно вывести в консоль текущее время (форматированное по умолчанию). Чтобы получить строку с текущим временем, используем `new Date()`.
// document.addEventListener('DOMContentLoaded', (e) => {
//   let date = new Date();
//   console.log(date);
// });
// ---------------------------------------------------------------------------------------

// 2. Работаем с всплытием событий. В DOM добавлен блок `div#bubblingBlock`. В нем есть кнопки с разными текстами. Нужно сделать так, чтобы при клике на кнопки, в консоль выводилось сообщение "Кликнута кнопка ТЕКСТ_КНОПКИ". ВАЖНО! Обработчик клика добавляем НЕ на кнопки!

// const bubblingBlock = document.querySelector('#bubblingBlock');
// bubblingBlock.addEventListener('click', (event) => {
//   console.log(`Кликнута кнопка ${event.target.innerText}`);
// });

// ---------------------------------------------------------------------------------------
// 3. Усложняем нашу задачу. Предположим, мы хотим "протоколировать" все клики мыши на странице. При каждом клике, нам нужно выводить в консоль тип DOM-узла, по которому кликнули. Подсказки:
//  - нам нужно обрабатывать события на уровне документа, т.е. добавить ОДИН обработчик.
//  - для получения типа узла, используем свойство `nodeName` элемента.

// document.addEventListener('click', (event) => {
//   console.log(`This is element ${event.target.nodeName}`);
// });
// -----------------------------------------------------------------------------------

// 4. Задача "со звездочкой". Делаем "скрытую" от нашего протоколирования кнопку. Нужно, чтобы при клике на кнопку First Button наш обработчик из 3-й задачи не срабатывал. Подсказка - нужно предотвратить всплытие.

// const hideThirdTask = document.querySelector('#firstButton');
// hideThirdTask.addEventListener('click', () => {
//   event.stopPropagation();
// });

// -----------------------------------------------------------------------------------------
// 5. Работаем с текстовым полем `input#testInput`. Наша задача - протоколировать нажатие каждой кнопки (выводить в консоль ее код).
//  - нужен обработчик события нажатия кнопки на инпут. Событие - `keypress`
//  - в объекте события, есть свойство `charCode` - это код нажатой кнопки. Его нужно вывести в консоль.

// const inputTest = document.querySelector('#testInput');
// inputTest.addEventListener('keypress', (event) => {
//   console.log(event.charCode);
// });

// -------------------------------------------------------------------------------------
// 6. Пишем свою функцию валидации для инпута, назовем ее `validateInput`. Предположим, мы вводим количество единиц товара, и у нас разрешенные символы - только цифры. Наша задача - запретить ввод в текстовое поле не-цифровых символов.
//  - нужен обработчик на `keypress` текстового поля - это будет наша функция `validateInput`
//  - при обрабокте события, проверяем `event.charCode`.
//  - коды клавиш-цифр - от 48 до 57.
//  - здесь нам нужно ПРЕДОТВРАТИТЬ стандартное поведение (т.е. изменение текста инпута).

// const inputTest = document.querySelector('#testInput');
// inputTest.addEventListener('keypress', validateInput);
// function validateInput(event) {
//   if (!(event.charCode >= 48 && event.charCode <= 57)) {
//     event.preventDefault();
//   }
// }

// ----------------------------------------------------------------------------------------------
// 7. Усложняем валидацию. Теперь мы хотим проверять правильность ввода при "уходе" фокуса из текстового поля. Что требуется:
//  - закомментировать добавление обработчика `keypress` на инпут
//  - добавить обработчик события утери фокуса (`focusout`) на наш инпут
//  - при обработке события, проверять текст инпута (через `event.target.value`)
//  - если текст не является числом (используем метод `isNaN`), то возвращаем фокус в наше текстовое поле (для этого, у DOM-элементов есть метод `focus` - то есть нам нужно вызвать этот метод у инпута).

// const inputTest = document.querySelector('#testInput');
// inputTest.addEventListener('focusout', (event) => {
//   if (isNaN(event.target.value)) {
//     inputTest.focus();
//   }
// });

// ---------------------------------------------------------------------------------------------------
// 8. Добавляем визуализации - расширяем обработчик события утери фокуса у инпута. Теперь, если в инпуте не число - то применяем к инпуту класс `error-input`. Если число валидное - то этот класс убираем.

// const inputTest = document.querySelector('#testInput');
// inputTest.addEventListener('focusout', (event) =>
//   isNaN(event.target.value)
//     ? inputTest.classList.add('error-input')
//     : inputTest.classList.remove('error-input')
// );

// ---------------------------------------------------------------
// 9. Добавляем в DOM чекбокс с текстом "Валидация". Этот чекбокс нужно добавить в `div.inputsBlock`. Задача чекбокса - включать/выключать валидацию. На событие `change` чекбокса добавляем обработчик. В обработчике, если чекбокс непустой - добавляем обработчик `keypress` на инпут, в качестве функции-обработчика используем `validateInput`. Если пустой - то этот обработчик удаляем.

// const inputsBlock = document.querySelector('#inputsBlock');
// const inputTest = document.querySelector('#testInput');
// const label = document.createElement('label');
// const check = document.createElement('input');
// check.type = 'checkbox';
// label.innerText = 'Валидация';
// inputsBlock.append(label);
// label.append(check);
// check.addEventListener('change', () => {
//   if (check.checked) {
//     inputTest.addEventListener('keypress', validateInput);
//   } else {
//     inputTest.removeEventListener('keypress', validateInput);
//   }
// });
// function validateInput(event) {
//   if (!(event.charCode >= 48 && event.charCode <= 57)) {
//     event.preventDefault();
//   }
// }
