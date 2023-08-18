// Правильно

// let age = 25;
// let user1 = '';
// let $color = '';
// let _side = 12;

// Неправильно
// let 1age
// let my-name
// let let = '';
// let const = '';

let rate = 29371;
function exchange() {
  let inputValue = +document.querySelector('.form__input').value;
  let result = inputValue * rate;
  document.querySelector('.result').innerText = `${inputValue} BTC = ${result}`;
}

function exchangeBack() {
  let value = +document.querySelector('.form__input1').value;
  let result1 = value / rate;
  document.querySelector(
    '.result1'
  ).innerText = `${value}USD  = ${result1} BTC`;
}
