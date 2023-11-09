const burgerIcon = document.querySelector('.burger_icon');
const menu = document.querySelector('.nav_menu ul');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('nav-menu-active');
});

// ДЗ
// 1. Стилизовать форму по макету

// 2. Реализовать открытие и закрытие модального окна

// найти три элемента - account, x, popup
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const account = document.querySelector('.account');
// повесить слушатель события на account
// при клике на account к popup добавляется класс modal_active
account.addEventListener('click', () => {
  popup.classList.add('modal-active');
});
// повесить слушатель события на x
// при клике на х у popup удаляется класс modal_active
close.addEventListener('click', () => {
  popup.classList.remove('modal-active');
});
// css: прописать стили для класса modal_active
// если класс modal_active есть, то popup виден. если класса нет - то popup невиден
