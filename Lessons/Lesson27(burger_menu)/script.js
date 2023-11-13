let burger_menu = document.querySelector('.burger_menu');
let navigation = document.querySelector('nav');

let setBurgerMenu = false;

burger_menu.addEventListener('click', () => {
  burgerMenuHandler();
});

function burgerMenuHandler() {
  if (!setBurgerMenu) {
    burger_menu.classList.add('active');
    navigation.classList.add('active');
  } else {
    burger_menu.classList.remove('active');
    navigation.classList.remove('active');
  }
  setBurgerMenu = !setBurgerMenu;
}
