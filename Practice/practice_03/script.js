const modal = document.querySelector('.modal');
const connect = document.querySelector('.connect');
const h3 = document.querySelector('h3');
const hidden = document.querySelector('.hidden');
const btn = document.querySelector('.btn');
const kreuz = document.querySelector('.kreuz');

modal.addEventListener('click', () => {
  modal.style.display = 'none';
  connect.style.display = 'block';
});
btn.addEventListener('click', () => {
  h3.style.display = 'none';
  hidden.style.display = 'block';
});
kreuz.addEventListener('click', () => {
  connect.style.display = 'none';
  modal.style.display = 'block';
  hidden.style.display = 'none';
  h3.style.display = 'block';
});
