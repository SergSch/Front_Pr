// 1. В html-документе создать кнопку и параграф. При клике на кнопку менять у параграфа размер текста на 26px и перекрашивать цвет заднего фона в светло-зеленый

// const changeBtn = document.querySelector('.change_btn');
// const changeText = document.querySelector('.change_text');

// changeBtn.addEventListener('click', () => {
//   changeText.style.fontSize = '26px';
//   changeText.style.backgroundColor = 'lightgreen'
// });

// -------------------------------------------

// 2. При клике на кнопку меняется цвет текста. Если текст содержит букву a, то цвет текста поменяется на красный. Если не содержит - то на синий

// changeBtn.addEventListener('click', () => {
//     changeText.style.color = changeText.innerText.includes('a') ? 'red' : 'blue'
//   });

// -----------------------------------------------

// 3. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутри контейнера добавляется параграф с текстом зеленого цвета Hello, world!
// const btn = document.querySelector('button');
// const container = document.querySelector('.container');
// btn.addEventListener('click', () => {
//   const par = document.createElement('p');
//   par.innerText = 'Guten Abend';
//   par.style.color = 'green';
//   container.append(par);
// });

// -------------------------------------
// 4. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутрь контейнера добавляется квадрат (div) красного цвета, высотой и шириной 30px и с border 3px solid purple
// 4. В html-документе создать кнопку и пустой контейнер (div). При клике на кнопку внутрь контейнера добавляется квадрат (div) красного цвета и с border 3px solid purple. Первый квадрат добавится с 30х30px, каждый следующий квадрат будет высотой и шириной превышать предыдущий на 10px
// const btn = document.querySelector('button');
// const container = document.querySelector('.container');
// let params = 20;
// btn.addEventListener('click', () => {
//   const div = document.createElement('div');
//   div.classList.add('square');

//   params += 10;
//   div.style.width = params + 'px';
//   div.style.height = params + 'px';

//   container.append(div);
// });

// --------------------------------------------------
// 5. В html-документе создать два квардрата 50х50 - синий и зеленый. При клике на синий квадрат - зеленый перекрашивается в желтый и уменьшается до размеров 30х30. При клике на зеленый - синий увеличивается до размеров 70х70 и у него появляется border
// const green = document.querySelector('.green');
// const blue = document.querySelector('.blue');
// let a = 50;
// blue.addEventListener('click', () => {
//   green.style.backgroundColor = 'yellow';
//   green.style.width = '30px';
//   green.style.height = '30px';
// });

// green.addEventListener('click', () => {
//   blue.style.border = '3px solid black';
//   blue.style.width = '70px';
//   blue.style.height = '70px';
// });

// -------------------------------------

// 6. Создать кнопку и пустой контейнер. При клике на кнопку в контейнер добавляется два параграфа с произвольным текстом. Один параграф синего цвета, второй - зеленого
const btn = document.querySelector('button');
const container = document.querySelector('.container');
btn.addEventListener('click', () => {
  const par1 = document.createElement('p');
  const par2 = document.createElement('p');

  par1.style.color = 'blue';
  par2.style.color = 'green';

  par1.textContent = 'Guten Abend';
  par2.textContent = 'Guten Nacht';

  container.append(par1, par2);
});
